import importlib.util
import json
import tempfile
import unittest
from pathlib import Path
from unittest.mock import patch

MODULE_PATH = Path(__file__).resolve().parents[1] / "scripts" / "publish_catalog.py"
SPEC = importlib.util.spec_from_file_location("publish_catalog", MODULE_PATH)
publisher = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(publisher)


class PublishCatalogTests(unittest.TestCase):
    def test_catalog_and_history_are_published_as_separate_shards(self):
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            source = root / "products.json"
            history = root / "price-history.json"
            catalog_dir = root / "data" / "catalog"
            history_dir = root / "data" / "price-history"
            source.write_text(json.dumps({"fetchedAt":"2026-11-18T12:00:00+00:00","items":[
                {"id":"p1","name":"Produkt 1","category":"Elektronika"},
                {"id":"p2","name":"Produkt 2","category":"Dom"}
            ]}), encoding="utf-8")
            history.write_text(json.dumps({"updatedAt":"2026-11-18T12:00:00+00:00","products":{
                "p1":[{"date":"2026-11-18","price":10}]
            }}), encoding="utf-8")
            with patch.object(publisher, "CATALOG_SOURCE", source), \
                 patch.object(publisher, "HISTORY_SOURCE", history), \
                 patch.object(publisher, "CATALOG_DIR", catalog_dir), \
                 patch.object(publisher, "HISTORY_DIR", history_dir), \
                 patch.object(publisher, "CATALOG_CHUNK_SIZE", 1):
                self.assertEqual(publisher.publish_catalog(), 2)
                publisher.publish_history()
            manifest = json.loads((catalog_dir / "manifest.json").read_text(encoding="utf-8"))
            self.assertEqual(manifest["count"], 2)
            self.assertEqual(len(manifest["files"]), 2)
            self.assertEqual(set(manifest["categoryFiles"]), {"Elektronika", "Dom"})
            self.assertEqual(len(manifest["categoryFiles"]["Elektronika"]), 1)
            first = json.loads((catalog_dir / manifest["categoryFiles"]["Elektronika"][0]["file"]).read_text(encoding="utf-8"))
            self.assertEqual(len(first["items"]), 1)
            history_manifest = json.loads((history_dir / "manifest.json").read_text(encoding="utf-8"))
            self.assertEqual(history_manifest["productCount"], 1)
            self.assertTrue((history_dir / history_manifest["files"][0]["file"]).exists())


if __name__ == "__main__":
    unittest.main()
