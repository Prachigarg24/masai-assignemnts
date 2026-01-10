function databaseQuery(query) {
  return `RESULT_FOR_${JSON.stringify(query)}`;
}

module.exports = databaseQuery;
