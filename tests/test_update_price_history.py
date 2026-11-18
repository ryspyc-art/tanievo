import json
import tempfile
import unittest
from datetime import datetime, timezone
from pathlib import Path
from unittest.mock import patch
import sys

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "scripts"))
import update_price_history as updater


class PriceHistoryTests(unittest.TestCase):
    def test_adds_only_fresh_verified_pln_prices_and_deduplicates_day(self):
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            catalog = root / "products.json"
            history = root / "price-history.json"
            now = datetime(2026, 11, 18, 12, tzinfo=timezone.utc)
            fresh = {"id":"p1","name":"Produkt","price":123.45,"currency":"PLN",
                     "updatedAt":"2026-11-18T10:00:00+00:00","merchant":"Sklep"}
            catalog.write_text(json.dumps({"items":[fresh,
                {**fresh,"id":"old","updatedAt":"2026-11-10T10:00:00+00:00"},
                {**fresh,"id":"usd","currency":"USD"}]}), encoding="utf-8")
            with patch.object(updater, "CATALOG", catalog), patch.object(updater, "HISTORY", history):
                self.assertEqual(updater.update_history(now), 1)
                self.assertEqual(updater.update_history(now), 0)
            data=json.loads(history.read_text(encoding="utf-8"))
            self.assertEqual(list(data["products"]), ["p1"])
            self.assertEqual(len(data["products"]["p1"]), 1)
            self.assertEqual(data["products"]["p1"][0]["price"], 123.45)

if __name__ == "__main__":
    unittest.main()
