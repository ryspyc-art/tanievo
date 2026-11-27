import unittest
from datetime import date
from scripts.expire_coupons import validate, prune_expired

class CouponManagerTests(unittest.TestCase):
    def test_valid_coupon_data(self):
        data = {"coupons":[{"partner":"Test","code":"SAVE10","starts":"2026-01-01","ends":"2026-12-31","description":"Discount","verified":False}]}
        self.assertTrue(validate(data))

    def test_invalid_date_order(self):
        data = {"coupons":[{"partner":"Test","code":"SAVE10","starts":"2026-12-31","ends":"2026-01-01","description":"Discount"}]}
        with self.assertRaises(ValueError):
            validate(data)

    def test_expired_coupon_pruned(self):
        data = {"coupons":[{"partner":"Old","code":"OLD","starts":"2025-01-01","ends":"2025-12-31","description":"Expired"},{"partner":"New","code":"NEW","starts":"2026-01-01","ends":"2026-12-31","description":"Valid"}]}
        removed = prune_expired(data, date(2026, 1, 1))
        self.assertEqual(removed, 1)
        self.assertEqual(data["coupons"][0]["code"], "NEW")

if __name__ == "__main__":
    unittest.main()
