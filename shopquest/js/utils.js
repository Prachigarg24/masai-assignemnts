function withTimeout(promise, ms = 5000) {
  const timeout = new Promise((_, reject) =>
    setTimeout(() => reject("Request Timeout"), ms)
  );
  return Promise.race([promise, timeout]);
}

function retry(fn, retries = 2) {
  return fn().catch(err => {
    if (retries === 0) throw err;
    return retry(fn, retries - 1);
  });
}
