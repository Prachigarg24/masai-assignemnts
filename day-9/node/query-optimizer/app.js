const queries = require("./data/queries");
const QueryCache = require("./cache/QueryCache");
const recommendIndexes = require("./optimizer/indexRecommender");
const executeQuery = require("./executor/executeQuery");

const cache = new QueryCache();

console.log("\nRecommended Indexes:");
console.log(recommendIndexes(queries));

console.log("\nExecuting Queries:\n");

for (let query of queries) {
  const result = executeQuery(query, cache);
  console.log(result);
}
