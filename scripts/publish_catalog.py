#!/usr/bin/env python3
"""Publish large partner data as bounded static JSON shards for GitHub Pages."""
import hashlib
import json
import shutil
from pathlib import Path

CATALOG_SOURCE = Path("products.json")
HISTORY_SOURCE = Path("price-history.json")
CATALOG_DIR = Path("data/catalog")
HISTORY_DIR = Path("data/price-history")
CATALOG_CHUNK_SIZE = 5000
HISTORY_BUCKETS = 32


def read_json(path, default):
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except (OSError, ValueError):
        return default


def write_json(path, payload):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(payload, ensure_ascii=False, separators=(",", ":")) + "\n", encoding="utf-8")


def clean_json_shards(directory, prefix):
    directory.mkdir(parents=True, exist_ok=True)
    for path in directory.glob(prefix + "-*.json"):
        path.unlink()


def publish_catalog():
    payload = read_json(CATALOG_SOURCE, {})
    items = payload.get("items", []) if isinstance(payload, dict) else []
    if not isinstance(items, list):
        raise RuntimeError("Nieprawidłowy format katalogu produktów.")
    items = [item for item in items if isinstance(item, dict) and item.get("id")]
    if not items:
        raise RuntimeError("Katalog jest pusty — publikacja została przerwana, aby nie usunąć ofert.")
    clean_json_shards(CATALOG_DIR, "products")
    files = []
    for offset in range(0, len(items), CATALOG_CHUNK_SIZE):
        name = f"products-{offset // CATALOG_CHUNK_SIZE:04d}.json"
        chunk = items[offset:offset + CATALOG_CHUNK_SIZE]
        write_json(CATALOG_DIR / name, {"items": chunk})
        files.append({"file": name, "count": len(chunk)})
    categories = {}
    for item in items:
        category = str(item.get("category") or "Inne")
        categories[category] = categories.get(category, 0) + 1
    manifest = {
        "version": 1,
        "generatedAt": payload.get("fetchedAt"),
        "count": len(items),
        "chunkSize": CATALOG_CHUNK_SIZE,
        "files": files,
        "categories": categories,
    }
    write_json(CATALOG_DIR / "manifest.json", manifest)
    print(f"Katalog: {len(items)} produktów w {len(files)} plikach.")
    return len(items)


def publish_history():
    payload = read_json(HISTORY_SOURCE, {"version": 1, "products": {}})
    products = payload.get("products", {}) if isinstance(payload, dict) else {}
    if not isinstance(products, dict):
        products = {}
    buckets = [dict() for _ in range(HISTORY_BUCKETS)]
    for product_id, points in products.items():
        if not isinstance(points, list) or not points:
            continue
        index = int(hashlib.sha256(str(product_id).encode("utf-8")).hexdigest()[:8], 16) % HISTORY_BUCKETS
        buckets[index][str(product_id)] = points
    clean_json_shards(HISTORY_DIR, "history")
    files = []
    for index, bucket in enumerate(buckets):
        if not bucket:
            continue
        name = f"history-{index:02d}.json"
        write_json(HISTORY_DIR / name, {"products": bucket})
        files.append({"file": name, "count": len(bucket)})
    write_json(HISTORY_DIR / "manifest.json", {
        "version": 1,
        "updatedAt": payload.get("updatedAt"),
        "productCount": sum(len(bucket) for bucket in buckets),
        "files": files,
    })
    print(f"Historia cen: {sum(len(bucket) for bucket in buckets)} produktów w {len(files)} plikach.")


if __name__ == "__main__":
    publish_catalog()
    publish_history()
