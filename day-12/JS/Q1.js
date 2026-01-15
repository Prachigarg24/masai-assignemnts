// DATA
const allItems = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  title: `Item ${i + 1}`,
  description: `Description for item ${i + 1}`
}));

const container = document.getElementById("container");
const loader = document.getElementById("loader");
const end = document.getElementById("end");

let index = 0;
const LIMIT = 10;
let loading = false;

// FUNCTION TO LOAD ITEMS
function loadMoreItems() {
  if (loading) return;
  loading = true;
  loader.style.display = "block";

  setTimeout(() => {
    const items = allItems.slice(index, index + LIMIT);

    items.forEach(item => {
      const div = document.createElement("div");
      div.className = "item";
      div.innerHTML = `
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      `;
      container.appendChild(div);
    });

    index += LIMIT;
    loader.style.display = "none";
    loading = false;

    if (index >= allItems.length) {
      end.style.display = "block";
      window.removeEventListener("scroll", handleScroll);
    }
  }, 500);
}

// SCROLL HANDLER
function handleScroll() {
  const scrollPosition = window.innerHeight + window.scrollY;
  const threshold = document.documentElement.scrollHeight - 100;

  if (scrollPosition >= threshold) {
    loadMoreItems();
  }
}

// INITIAL LOAD
loadMoreItems();
window.addEventListener("scroll", handleScroll);
