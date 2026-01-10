const data = [
  { name: "MacBook", price: 1200, category: "Electronics" },
  { name: "Nike Shoes", price: 150, category: "Footwear" },
  { name: "iPhone", price: 1000, category: "Electronics" },
  { name: "Adidas Jacket", price: 200, category: "Clothing" }
];

const tbody = document.querySelector("tbody");
const headers = document.querySelectorAll("th");

let sortConfig = { key: null, direction: "asc" };

function renderTable(data) {
  tbody.innerHTML = "";
  data.forEach(row => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${row.name}</td>
      <td>${row.price}</td>
      <td>${row.category}</td>
    `;
    tbody.appendChild(tr);
  });
}

function sortData(key) {
  const dir = sortConfig.key === key && sortConfig.direction === "asc"
    ? "desc"
    : "asc";

  sortConfig = { key, direction: dir };

  const sorted = [...data].sort((a, b) => {
    if (typeof a[key] === "number") {
      return dir === "asc" ? a[key] - b[key] : b[key] - a[key];
    }
    return dir === "asc"
      ? a[key].localeCompare(b[key])
      : b[key].localeCompare(a[key]);
  });

  updateArrows(key, dir);
  renderTable(sorted);
}

function updateArrows(activeKey, dir) {
  headers.forEach(h => {
    h.textContent = h.textContent.replace("↑", "").replace("↓", "").trim();
    if (h.dataset.key === activeKey) {
      h.textContent += dir === "asc" ? " ↑" : " ↓";
    }
  });
}

headers.forEach(header => {
  header.addEventListener("click", () => {
    sortData(header.dataset.key);
  });
});

renderTable(data);
