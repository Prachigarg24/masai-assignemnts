let users = [];
let filteredUsers = [];
let sortAsc = true;

const tableBody = document.getElementById("tableBody");
const searchInput = document.getElementById("search");
const domainFilter = document.getElementById("domainFilter");
const totalUsersEl = document.getElementById("totalUsers");
const avgPostsEl = document.getElementById("avgPosts");
const errorEl = document.getElementById("error");

async function fetchData() {
  try {
    const usersRes = await fetch("https://jsonplaceholder.typicode.com/users");
    const postsRes = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!usersRes.ok || !postsRes.ok) {
      throw new Error("API Error");
    }

    users = await usersRes.json();
    const posts = await postsRes.json();

    const postCount = posts.reduce((acc, p) => {
      acc[p.userId] = (acc[p.userId] || 0) + 1;
      return acc;
    }, {});

    users.forEach(u => u.posts = postCount[u.id] || 0);

    setupDomainFilter();
    updateStats(users);
    renderTable(users);

  } catch (err) {
    errorEl.textContent = "Failed to load data. Please try again.";
  }
}

function setupDomainFilter() {
  const domains = [...new Set(users.map(u => u.email.split("@")[1]))];
  domains.forEach(d => {
    const opt = document.createElement("option");
    opt.value = d;
    opt.textContent = d;
    domainFilter.appendChild(opt);
  });
}

function updateStats(data) {
  totalUsersEl.textContent = data.length;
  const avg = data.reduce((sum, u) => sum + u.posts, 0) / data.length;
  avgPostsEl.textContent = avg.toFixed(1);
}

function renderTable(data) {
  tableBody.innerHTML = "";
  data.forEach(u => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${u.name}</td>
      <td>${u.email}</td>
      <td>${u.company.name}</td>
    `;
    tableBody.appendChild(tr);
  });
}

function applyFilters() {
  const search = searchInput.value.toLowerCase();
  const domain = domainFilter.value;

  filteredUsers = users.filter(u => {
    const matchesSearch =
      u.name.toLowerCase().includes(search) ||
      u.email.toLowerCase().includes(search);
    const matchesDomain = domain ? u.email.endsWith(domain) : true;
    return matchesSearch && matchesDomain;
  });

  updateStats(filteredUsers);
  renderTable(filteredUsers);
}

document.getElementById("sortName").addEventListener("click", () => {
  const data = filteredUsers.length ? filteredUsers : users;
  data.sort((a, b) =>
    sortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
  );
  sortAsc = !sortAsc;
  renderTable(data);
});

searchInput.addEventListener("input", applyFilters);
domainFilter.addEventListener("change", applyFilters);

fetchData();
