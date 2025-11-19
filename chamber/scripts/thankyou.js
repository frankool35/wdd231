// Retrieve query parameters from URL
const params = new URLSearchParams(window.location.search);

// Insert submitted values
document.getElementById("firstName").textContent = params.get("first") || "";
document.getElementById("lastName").textContent = params.get("last") || "";
document.getElementById("email").textContent = params.get("email") || "";
document.getElementById("phone").textContent = params.get("phone") || "";
document.getElementById("organization").textContent = params.get("organization") || "";
document.getElementById("timestamp").textContent = params.get("timestamp") || "";

// Update footer year
document.getElementById("year").textContent = new Date().getFullYear();
