const items = [
  { id: 1, name: 'MacBook Pro', category: 'Electronics' },
  { id: 2, name: 'Nike Shoes', category: 'Footwear' },
  { id: 3, name: 'iPhone 15', category: 'Electronics' },
  { id: 4, name: 'Adidas Jacket', category: 'Clothing' },
  { id: 5, name: 'Sony Headphones', category: 'Electronics' }
];

const searchInput = document.getElementById("search");
const list = document.getElementById("list");
const count = document.getElementById("count");

function render(filtered, query = "") {
  list.innerHTML = "";

  filtered.forEach(item => {
    const li = document.createElement("li");

    let name = item.name;
    let category = item.category;

    if (query) {
      const regex = new RegExp(query, "gi");
      name = name.replace(regex, match => `<mark>${match}</mark>`);
      category = category.replace(regex, match => `<mark>${match}</mark>`);
    }

    li.innerHTML = `${name} - ${category}`;
    list.appendChild(li);
  });

  count.textContent = `Showing ${filtered.length} items`;
}

render(items);

searchInput.addEventListener("input", function () {
  const query = this.value.toLowerCase();

  const filtered = items.filter(item =>
    item.name.toLowerCase().includes(query) ||
    item.category.toLowerCase().includes(query)
  );

  render(filtered, query);
});
