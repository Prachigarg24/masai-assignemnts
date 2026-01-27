// pagination state
let page = 1;
const limit = 6;

// product data
let products = [];

// fetch products on load
fetchProducts().then(data => {
  products = data;
  renderProducts();
});

// render products with pagination
function renderProducts() {
  const start = (page - 1) * limit;
  const current = products.slice(start, start + limit);

  document.getElementById("products").innerHTML =
    current.map(p => `
      <div>
        <h4>${p.title}</h4>
        <button onclick='addToCart(${JSON.stringify(p)})'>Add</button>
      </div>
    `).join("");
}

// pagination controls
function nextPage() {
  page++;
  renderProducts();
}

function prevPage() {
  if (page > 1) page--;
  renderProducts();
}

// search handler
function handleSearch() {
  const q = document.getElementById("search").value.toLowerCase();

  saveSearch(q);

  products = products.filter(p =>
    p.title.toLowerCase().includes(q)
  );

  page = 1;
  renderProducts();
}

// add to cart
function addToCart(product) {
  const cart = getCart();
  cart.push(product);
  saveCart(cart);
}
