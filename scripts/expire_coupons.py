#!/usr/bin/env python3
"""Validate coupon data and optionally remove expired entries."""
import argparse
import json
from datetime import date
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA_FILE = ROOT / "kupony.json"

def validate(data):
    coupons = data.get("coupons", [])
    if not isinstance(coupons, list):
        raise ValueError("'coupons' must be a list")
    seen = set()
    for i, coupon in enumerate(coupons):
        for field in ("partner", "code", "starts", "ends", "description"):
            if not coupon.get(field):
                raise ValueError(f"coupon #{i+1}: missing {field}")
        start = date.fromisoformat(coupon["starts"])
        end = date.fromisoformat(coupon["ends"])
        if end < start:
            raise ValueError(f"coupon #{i+1}: end date precedes start date")
        key = (coupon["partner"].strip().lower(), coupon["code"].strip().upper())
        if key in seen:
            raise ValueError(f"duplicate coupon: {coupon['partner']} / {coupon['code']}")
        seen.add(key)
        if coupon.get("url") and not coupon["url"].startswith(("https://", "http://")):
            raise ValueError(f"coupon #{i+1}: URL must be http(s)")
    return True

def prune_expired(data, today=None):
    today = today or date.today()
    before = len(data.get("coupons", []))
    data["coupons"] = [c for c in data["coupons"] if date.fromisoformat(c["ends"]) >= today]
    return before - len(data["coupons"])

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--prune", action="store_true", help="remove expired coupons")
    args = parser.parse_args()
    data = json.loads(DATA_FILE.read_text(encoding="utf-8"))
    validate(data)
    removed = prune_expired(data) if args.prune else 0
    if removed:
        DATA_FILE.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\\n", encoding="utf-8")
    print(f"Coupon data valid; {len(data.get('coupons', []))} remaining; removed {removed} expired.")

if __name__ == "__main__":
    main()
