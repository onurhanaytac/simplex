export default class LRU {
  max;
  cache;

  constructor(max = 24) {
    this.max = max;
    this.cache = new Map();
  }

  get(key: unknown): unknown {
    const value = this.cache.get(key);
    if (value) {
      // refresh key
      this.set(key, value);
    }
    return value;
  }

  set(key: unknown, val: unknown): void {
    // refresh key
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.cache.size == this.max) {
      // delete oldest
      this.cache.delete(this.first());
    }

    this.cache.set(key, val);
  }

  first(): unknown {
    return this.cache.keys().next().value;
  }
}
