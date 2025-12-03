// script/explore.js
// Module to render the Explore page (expects preview-attraction.js & utils.js in same folder)

import { fetchAttractions } from "./preview-attraction.js";
import { buildAttractionCard, filterByCategory } from "./utils.js";

const container = document.getElementById("attractionsContainer");
const categorySelect = document.getElementById("categoryFilter");
const modal = document.getElementById("detailsModal");
const modalContent = document.getElementById("modalContent");
const closeModalBtn = document.getElementById("closeModal");

let allItems = [];

// Render items to container
function renderItems(items) {
  if (!container) return;
  container.innerHTML = "";
  items.forEach(item => {
    const card = buildAttractionCard(item);

    // add click handler for modal details
    card.addEventListener("click", () => openModal(item));
    container.appendChild(card);
  });
}

// Simple modal content
function openModal(item) {
  if (!modal || !modalContent) return;
  modalContent.innerHTML = `
    <h2>${item.name}</h2>
    <img src="${item.image}" alt="${item.name}" style="max-width:100%;height:auto;">
    <p><strong>Category:</strong> ${item.category}</p>
    <p><strong>Location:</strong> ${item.location}</p>
    <p>${item.description}</p>
    <p><strong>Duration:</strong> ${item.duration}</p>
    <p><strong>Rating:</strong> ⭐ ${item.rating}</p>
  `;
  modal.showModal();
}

function closeModal() {
  if (!modal) return;
  modal.close();
}

// Category filter change
function onCategoryChange() {
  const selected = categorySelect ? categorySelect.value : "all";
  if (selected === "all") {
    renderItems(allItems);
  } else {
    const filtered = filterByCategory(allItems, selected);
    renderItems(filtered);
  }
}

// Initialization
async function init() {
  try {
    allItems = await fetchAttractions();
    if (!Array.isArray(allItems) || allItems.length === 0) {
      container.innerHTML = "<p>No attractions found.</p>";
      return;
    }

    renderItems(allItems);

    if (categorySelect) {
      categorySelect.addEventListener("change", onCategoryChange);
    }

    if (closeModalBtn) {
      closeModalBtn.addEventListener("click", closeModal);
    }

  } catch (err) {
    console.error("Error initializing explore page:", err);
    if (container) container.innerHTML = "<p>Failed to load attractions.</p>";
  }
}

// Wait for DOM
document.addEventListener("DOMContentLoaded", init);
