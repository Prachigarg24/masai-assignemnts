const databaseQuery = require("../db/fakeDB");

function executeQuery(query, cache) {
  const cached = cache.get(query);

  if (cached) {
    console.log("Cache Hit:", query);
    return cached;
  }

  console.log("DB Hit:", query);
  const result = databaseQuery(query);
  cache.set(query, result);
  return result;
}

module.exports = executeQuery;
