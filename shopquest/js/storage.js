function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function saveSearch(term) {
  let history = JSON.parse(localStorage.getItem("searches")) || [];
  history.unshift(term);
  history = [...new Set(history)].slice(0, 5);
  localStorage.setItem("searches", JSON.stringify(history));
}
