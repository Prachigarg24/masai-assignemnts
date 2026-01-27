function fetchProducts() {
  const start = Date.now();

  return retry(() =>
    withTimeout(fetch(ENDPOINTS.products))
      .then(res => {
        logApi({
          url: ENDPOINTS.products,
          method: "GET",
          status: res.status,
          duration: Date.now() - start,
          source: "network"
        });
        return res.json();
      })
  )
  .then(data => {
    localStorage.setItem("products_cache", JSON.stringify(data));
    return data;
  })
  .catch(() => {
    const cache = localStorage.getItem("products_cache");
    if (cache) {
      logApi({
        url: ENDPOINTS.products,
        method: "GET",
        status: "cached",
        duration: 0,
        source: "cache"
      });
      return JSON.parse(cache);
    }
    return [];
  });
}
