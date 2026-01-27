function renderCart() {
  const cart = getCart();
  document.getElementById("cart").innerHTML =
    cart.map(p => `<p>${p.title}</p>`).join("");
}

renderCart();

function checkout() {
  const token = localStorage.getItem("token");
  if (!token) {
    alert("Login required");
    return;
  }

  fetch(ENDPOINTS.carts, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + token
    },
    body: JSON.stringify({
      userId: 1,
      products: getCart()
    })
  })
  .then(res => res.json())
  .then(() => {
    alert("Order placed successfully");
    localStorage.removeItem("cart");
    renderCart();
  });
}
