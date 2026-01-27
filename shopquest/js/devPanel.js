function logApi({ url, method, status, duration, source }) {
  let logs = JSON.parse(localStorage.getItem("apiLogs")) || [];

  logs.unshift({ url, method, status, duration, source });
  logs = logs.slice(0, 5);

  localStorage.setItem("apiLogs", JSON.stringify(logs));
}
