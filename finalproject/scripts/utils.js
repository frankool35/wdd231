// ================================
// utils.js — Reusable website tools
// ================================



// ==========================================
// FOOTER UTILITIES
// ==========================================

// Update footer with current year + last modified date
export function updateFooterInfo() {
  const yearSpan = document.getElementById("currentyear");
  const lastModified = document.getElementById("lastModified");

  // Current Year
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Last Modified Timestamp
  if (lastModified) {
    lastModified.textContent = `Last Modified: ${document.lastModified}`;
  }
}



// ==========================================
// GENERAL TEXT UTILITIES
// ==========================================

// Format date like: "Jan 10, 2025"
export function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
}

// Capitalize first letter of each word
export function capitalizeWords(text) {
  return text.replace(/\b\w/g, char => char.toUpperCase());
}

// Convert text to URL-friendly slug
// e.g. "Nike Art Gallery" → "nike-art-gallery"
export function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}



// ==========================================
// ARRAY / RANDOM UTILITIES
// ==========================================

// Get a random item from an array
export function randomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Shuffle an array (Fisher-Yates)
export function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}



// ==========================================
// ATTRACTIONS FILTERING + SORTING UTILITIES
// ==========================================

// Filter attractions by category
export function filterByCategory(items, category) {
  return items.filter(
    item => item.category.toLowerCase() === category.toLowerCase()
  );
}

// Sort attractions by rating (High → Low)
export function sortByRating(items) {
  return [...items].sort((a, b) => b.rating - a.rating);
}

// Search attractions by name, description, or category
export function searchAttractions(items, query) {
  if (!query) return items; // no search → return all items

  const lower = query.toLowerCase();

  return items.filter(item =>
    item.name.toLowerCase().includes(lower) ||
    item.description.toLowerCase().includes(lower) ||
    (item.category && item.category.toLowerCase().includes(lower))
  );
}



// ==========================================
// PAGINATION UTILITY
// ==========================================

// Paginate any array
export function paginate(items, page = 1, perPage = 6) {
  const start = (page - 1) * perPage;
  return items.slice(start, start + perPage);
}



// ==========================================
// CARD BUILDER (for Explore page)
// ==========================================

// Build an attraction card HTML element
export function buildAttractionCard(item) {
  const card = document.createElement("div");

  // IMPORTANT → Add both classes for proper layout
  card.classList.add("card", "attraction-card");

  card.innerHTML = `
    <img src="${item.image}" alt="${item.name}">
    <h3>${item.name}</h3>
    <p>${item.description}</p>

    <div class="card-meta">
      <span class="category">${item.category}</span>
      <span class="rating">⭐ ${item.rating}</span>
    </div>
  `;

  return card;
}
