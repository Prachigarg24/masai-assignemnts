class QueryCache {
  constructor() {
    this.cache = new Map();
  }

  get(query) {
    return this.cache.get(JSON.stringify(query));
  }

  set(query, result) {
    this.cache.set(JSON.stringify(query), result);
  }
}

module.exports = QueryCache;
