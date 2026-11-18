#!/usr/bin/env python3
"""Append dated, verified catalogue prices to a compact history file."""
import json
from datetime import datetime, timezone, timedelta
from pathlib import Path

CATALOG = Path("products.json")
HISTORY = Path("price-history.json")
HISTORY_SHARDS = Path("data/price-history")
RETENTION_DAYS = 365


def load_json(path, default):
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except (OSError, ValueError):
        return default


def update_history(now=None):
    now = now or datetime.now(timezone.utc)
    today = now.date().isoformat()
    catalog = load_json(CATALOG, {})
    items = catalog.get("items", []) if isinstance(catalog, dict) else []
    history = load_json(HISTORY, None)
    if history is None:
        manifest = load_json(HISTORY_SHARDS / "manifest.json", {})
        merged = {}
        for entry in manifest.get("files", []) if isinstance(manifest, dict) else []:
            part = load_json(HISTORY_SHARDS / str(entry.get("file", "")), {})
            records = part.get("products", {}) if isinstance(part, dict) else {}
            if isinstance(records, dict):
                merged.update(records)
        history = {"version": 1, "products": merged}
    products = history.get("products", {}) if isinstance(history, dict) else {}
    if not isinstance(products, dict):
        products = {}
    cutoff = (now.date() - timedelta(days=RETENTION_DAYS)).isoformat()
    added = 0
    for item in items if isinstance(items, list) else []:
        if not isinstance(item, dict):
            continue
        try:
            price = round(float(item.get("price")), 2)
        except (TypeError, ValueError):
            continue
        updated = item.get("updatedAt")
        if price <= 0 or item.get("currency") != "PLN" or not updated:
            continue
        try:
            timestamp = datetime.fromisoformat(str(updated).replace("Z", "+00:00"))
            if timestamp.tzinfo is None:
                timestamp = timestamp.replace(tzinfo=timezone.utc)
            age = now - timestamp.astimezone(timezone.utc)
            if age < timedelta(0) or age > timedelta(hours=72):
                continue
        except ValueError:
            continue
        product_id = str(item.get("id", "")).strip()
        name = str(item.get("name", "")).strip()
        if not product_id or not name:
            continue
        points = products.setdefault(product_id, [])
        if not isinstance(points, list):
            points = products[product_id] = []
        points[:] = [point for point in points if isinstance(point, dict) and point.get("date", "") >= cutoff]
        point = {"date": today, "price": price, "name": name, "merchant": str(item.get("merchant", ""))}
        existing = next((i for i, old in enumerate(points) if old.get("date") == today), None)
        if existing is None:
            points.append(point)
            added += 1
        else:
            points[existing] = point
    products = {key: value for key, value in products.items() if isinstance(value, list) and value}
    output = {"version": 1, "updatedAt": now.isoformat(), "products": products}
    HISTORY.write_text(json.dumps(output, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    return added


if __name__ == "__main__":
    print(f"Historia cen: zapisano nowe dzienne pomiary dla {update_history()} produktów.")
