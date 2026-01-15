const items = ["Item A", "Item B", "Item C", "Item D", "Item E"];

const list = document.getElementById("list");
let draggedIndex = null;

function renderList() {
  list.innerHTML = "";

  items.forEach((item, index) => {

    // DROP ZONE (LI)
    const dropZone = document.createElement("li");
    dropZone.className = "drop-zone";
    dropZone.style.height = "10px";

    addDropEvents(dropZone, index);
    list.appendChild(dropZone);

    // ACTUAL ITEM
    const li = document.createElement("li");
    li.textContent = item;
    li.draggable = true;

    li.addEventListener("dragstart", () => {
      draggedIndex = index;
      li.classList.add("dragging");
    });

    li.addEventListener("dragend", () => {
      draggedIndex = null;
      li.classList.remove("dragging");
      clearActiveZones();
    });

    list.appendChild(li);
  });

  // END DROP ZONE
  const endZone = document.createElement("li");
  endZone.className = "drop-zone";
  endZone.style.height = "10px";
  addDropEvents(endZone, items.length);
  list.appendChild(endZone);
}

function addDropEvents(zone, dropIndex) {
  zone.addEventListener("dragover", (e) => {
    e.preventDefault(); // 🔥 mandatory
    zone.classList.add("active");
  });

  zone.addEventListener("dragleave", () => {
    zone.classList.remove("active");
  });

  zone.addEventListener("drop", (e) => {
    e.preventDefault();

    if (draggedIndex === null) return;

    const draggedItem = items.splice(draggedIndex, 1)[0];
    items.splice(dropIndex, 0, draggedItem);

    renderList();
  });
}

function clearActiveZones() {
  document
    .querySelectorAll(".drop-zone")
    .forEach(zone => zone.classList.remove("active"));
}

renderList();
