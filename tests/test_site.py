from html.parser import HTMLParser
from pathlib import Path
import re
import unittest
import json

ROOT = Path(__file__).resolve().parents[1]


class SiteParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ids = []
        self.links = []
        self.meta = []
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if "id" in attrs:
            self.ids.append(attrs["id"])
        if tag == "a":
            self.links.append(attrs)
        if tag == "meta":
            self.meta.append(attrs)


class SiteIntegrityTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.html = (ROOT / "index.html").read_text(encoding="utf-8")
        cls.parser = SiteParser()
        cls.parser.feed(cls.html)
        cls.app = (ROOT / "app.js").read_text(encoding="utf-8")

    def test_no_duplicate_ids(self):
        self.assertEqual(len(self.parser.ids), len(set(self.parser.ids)))

    def test_main_interaction_targets_exist(self):
        required = {"main-content", "searchInput", "productGrid", "favoritesToggle",
                    "favoritesCount", "resultCount", "emptyState", "copyPromoText",
                    "shareFeedback", "year"}
        self.assertTrue(required.issubset(set(self.parser.ids)))

    def test_comparison_navigation_points_to_comparison_hub(self):
        self.assertIn('href="#aktualne-porownania">Porównania</a>', self.html)
        self.assertIn('id="aktualne-porownania"', self.html)

    def test_custom_domain_configuration_is_consistent(self):
        self.assertEqual((ROOT / "CNAME").read_text(encoding="utf-8").strip(), "tanievo.pl")
        self.assertIn('href="https://tanievo.pl/"', self.html)
        self.assertIn("https://tanievo.pl/sitemap.xml", (ROOT / "robots.txt").read_text(encoding="utf-8"))

    def test_store_comparison_page_and_komputronik_disclosure(self):
        page = (ROOT / "porownanie-sklepow.html").read_text(encoding="utf-8")
        for term in ("Komputronik", "Acer Nitro V 16S", "Gigabyte A18",
                     "Morele", "OleOle", "afiliacyjnymi Tanievo",
                     "zwykłymi odnośnikami"):
            with self.subTest(term=term):
                self.assertIn(term, page)
        self.assertIn('href="porownanie-sklepow.html"', self.html)

    def test_comparison_engine_has_model_ids_direct_links_and_sorting(self):
        page = (ROOT / "porownywarka.html").read_text(encoding="utf-8")
        script = (ROOT / "porownywarka.js").read_text(encoding="utf-8")
        data = json.loads((ROOT / "porownania.json").read_text(encoding="utf-8"))
        self.assertIn('href="porownywarka.html"', self.html)
        self.assertIn('id="comparisonSort"', page)
        self.assertIn('modelCode', json.dumps(data))
        self.assertIn('ean', json.dumps(data))
        self.assertIn('shipping', json.dumps(data))
        self.assertIn('availability', json.dumps(data))
        self.assertIn('checkedAt', json.dumps(data))
        self.assertIn('offer.url', script)
        self.assertIn('at - bt', script)
        self.assertIn('allowedHosts', script)
        for product in data["products"]:
            self.assertTrue(product.get("modelCode"))
            self.assertTrue(product.get("ean"))
            self.assertGreaterEqual(len(product.get("offers", [])), 2)
            for offer in product["offers"]:
                self.assertTrue(offer.get("url", "").startswith("https://"))
                self.assertTrue(offer.get("checkedAt"))
                self.assertIsInstance(offer.get("price"), (int, float))

    def test_product_images_have_verified_sources_and_fallback(self):
        self.assertIn("verifiedProductImages", self.app)
        self.assertIn("cdn.newtime.ua/upload/2025-09/navushniki-apple-airpods-pro-3_2400.webp", self.app)
        self.assertIn("Samsung Galaxy Buds3 Pro", self.app)
        self.assertIn('grid.addEventListener("error"', self.app)
        self.assertIn("product-image-fallback", self.app)
        self.assertIn(".product-image{", (ROOT / "style.css").read_text(encoding="utf-8"))

    def test_has_search_engine_metadata(self):
        names = {item.get("name") for item in self.parser.meta}
        properties = {item.get("property") for item in self.parser.meta}
        self.assertIn("description", names)
        self.assertIn("robots", names)
        self.assertIn("og:title", properties)

    def test_affiliate_and_search_links_use_shared_ceneo_tracking(self):
        exact_airpods_url = "https://www.ceneo.pl/199946527#cid=52090&crid=818405&pid=31443"
        self.assertIn('productUrl:"' + exact_airpods_url + '"', self.app)
        self.assertIn('const AIRPODS_5_CENEO_URL = CENEO_CREATIVE_URLS["tanievo-001"];', self.app)
        self.assertIn('const CENEO_DEFAULT_TRACKING = CENEO_CAMPAIGN + "&crid=818403&" + CENEO_PUBLISHER;', self.app)
        self.assertIn('"tanievo-001": "https://www.ceneo.pl/199946527#cid=52090&crid=818405&pid=31443"', self.app)
        self.assertIn('„Tanievo – produkt 001” (pierwsza pozycja) -> crid 818404', self.app)
        self.assertIn('url.hash = CENEO_DEFAULT_TRACKING;', self.app)
        self.assertIn('getCeneoUrl(product)', self.app)
        self.assertIn('getAmazonUrl(product)', self.app)
        self.assertIn('rel="nofollow noopener noreferrer"', self.app)
        self.assertIn('rel="sponsored nofollow noopener noreferrer"', self.app)
        offers = json.loads((ROOT / "amazon-offers.json").read_text(encoding="utf-8"))
        from urllib.parse import urlparse, parse_qs
        for offer in offers["offers"]:
            if offer.get("linkType") == "comparison":
                for key in ("productUrl", "ceneoUrl"):
                    if offer.get(key, "").startswith("https://www.ceneo.pl/"):
                        self.assertEqual(urlparse(offer[key]).fragment, "cid=52090&crid=818403&pid=31443")
            else:
                parsed = urlparse(offer["productUrl"])
                self.assertEqual(parsed.scheme, "https")
                self.assertEqual(parsed.hostname, "www.amazon.pl")
                self.assertEqual(parse_qs(parsed.query).get("tag"), ["tanievo-21"])

    def test_ceneo_search_links_receive_shared_tracking_without_changing_search_paths(self):
        self.assertIn('url.hash = CENEO_DEFAULT_TRACKING;', self.app)
        self.assertIn('function withCeneoTracking(candidate)', self.app)
        self.assertIn('url.hash = CENEO_DEFAULT_TRACKING;', self.app)
        self.assertIn('product.linkType = "search";', self.app)
        self.assertIn('if (!product.productUrl && product.linkType !== "paused")', self.app)

    def test_comparison_renderer_escapes_catalog_text(self):
        script = (ROOT / "porownywarka.js").read_text(encoding="utf-8")
        self.assertIn("const escapeHTML", script)
        self.assertIn("escapeHTML(product.name)", script)
        self.assertIn("escapeHTML(offer.store)", script)

    def test_price_sources_and_check_dates_are_rendered(self):
        self.assertIn("product.priceSource", self.app)
        self.assertIn("product.priceCheckedAt", self.app)
        self.assertIn("Cena orientacyjna", self.app)

    def test_discovery_catalog_is_not_mislabeled_as_affiliate(self):
        discovery_ids = re.findall(r'\["tanievo-(\d{3})"', self.app)
        discovery_ids = [value for value in discovery_ids if 11 <= int(value) <= 50]
        self.assertEqual(discovery_ids, [f"{number:03d}" for number in range(11, 51)])
        self.assertIn('linkType:"search"', self.app)

    def test_live_catalog_loader_is_wired_but_api_is_not_enabled(self):
        self.assertEqual(len(re.findall(r"(?m)^loadLiveCatalog\(\);$", self.app)), 1)
        self.assertIn('CENEO_API_PUBLICATION_APPROVED', (ROOT / "scripts" / "update_ceneo.py").read_text(encoding="utf-8"))

    def test_privacy_policy_is_linked(self):
        self.assertIn("polityka-prywatnosci.html", self.html)
        self.assertTrue((ROOT / "polityka-prywatnosci.html").is_file())

    def test_all_public_pages_have_content_security_policy(self):
        pages = sorted(path.name for path in ROOT.glob("*.html"))
        for filename in pages:
            with self.subTest(page=filename):
                content = (ROOT / filename).read_text(encoding="utf-8")
                self.assertIn('http-equiv="Content-Security-Policy"', content)
                self.assertIn("object-src 'none'", content)
                self.assertIn('name="referrer"', content)

    def test_external_new_tab_links_use_noopener(self):
        for filename in sorted(path.name for path in ROOT.glob("*.html")):
            parser = SiteParser()
            parser.feed((ROOT / filename).read_text(encoding="utf-8"))
            for link in parser.links:
                if link.get("target") == "_blank":
                    with self.subTest(page=filename, href=link.get("href")):
                        rel = set(link.get("rel", "").split())
                        self.assertIn("noopener", rel)
                        self.assertIn("noreferrer", rel) if link.get("href", "").startswith("http") else None

    def test_new_category_tiles_have_searchable_catalog_entries(self):
        expected = {
            "Oświetlenie samochodowe": ["tanievo-073", "tanievo-074"],
            "Elektronarzędzia": ["tanievo-075", "tanievo-076", "tanievo-077"],
            "Ogrzewanie domu": ["tanievo-078", "tanievo-079", "tanievo-080"],
        }
        for category, product_ids in expected.items():
            with self.subTest(category=category):
                self.assertIn(f'data-category-jump="{category}"', self.html)
                for product_id in product_ids:
                    self.assertIn(f'"{product_id}"', self.app)
                self.assertIn(f'"{category}"', self.app)
        self.assertIn('Wyszukaj w Ceneo', self.app)


    def test_metal_detector_and_battery_categories_have_searchable_products(self):
        expected = {
            "Wykrywacze metali": ["tanievo-081", "tanievo-082", "tanievo-083"],
            "Akcesoria do wykrywaczy": ["tanievo-084", "tanievo-085"],
            "Ładowarki i zasilacze": ["tanievo-086", "tanievo-087"],
            "Akumulatory AA i AAA": ["tanievo-088", "tanievo-089", "tanievo-090"],
        }
        for category, product_ids in expected.items():
            with self.subTest(category=category):
                self.assertIn(f'data-category-jump="{category}"', self.html)
                for product_id in product_ids:
                    self.assertIn(f'"{product_id}"', self.app)
                self.assertIn(f'"{category}"', self.app)
        self.assertIn('Wyszukaj w Ceneo', self.app)




    def test_flashlight_18650_and_toy_categories_have_searchable_products(self):
        expected = {
            "Latarki LED": ["tanievo-091", "tanievo-092", "tanievo-093", "tanievo-094"],
            "Akumulatory 18650": ["tanievo-095", "tanievo-096", "tanievo-097"],
            "Zabawki": ["tanievo-099", "tanievo-100", "tanievo-101", "tanievo-102", "tanievo-103"],
        }
        for category, product_ids in expected.items():
            with self.subTest(category=category):
                self.assertIn(f'data-category-jump="{category}"', self.html)
                for product_id in product_ids:
                    self.assertIn(f'"{product_id}"', self.app)
                self.assertIn(f'"{category}"', self.app)
        self.assertIn('Wyszukaj w Ceneo', self.app)


    def test_beauty_and_mixer_categories_have_searchable_products(self):
        expected = {
            "Uroda i stylizacja": ["tanievo-104", "tanievo-105", "tanievo-106", "tanievo-107", "tanievo-108", "tanievo-109"],
            "Miksery i blendery": ["tanievo-110", "tanievo-111", "tanievo-112", "tanievo-113", "tanievo-114", "tanievo-115"],
        }
        for category, product_ids in expected.items():
            with self.subTest(category=category):
                self.assertIn(f'data-category-jump="{category}"', self.html)
                for product_id in product_ids:
                    self.assertIn(f'"{product_id}"', self.app)
                self.assertIn(f'"{category}"', self.app)
        self.assertIn('Wyszukaj w Ceneo', self.app)

if __name__ == "__main__":
    unittest.main()
