function recommendIndexes(queries) {
  const patternCount = {};

  for (let query of queries) {
    const fields = Object.keys(query).sort().join(",");
    patternCount[fields] = (patternCount[fields] || 0) + 1;
  }

  const indexes = [];

  for (let pattern in patternCount) {
    if (patternCount[pattern] > 1) {
      indexes.push(`CREATE INDEX ON (${pattern})`);
    }
  }

  return indexes;
}

module.exports = recommendIndexes;
