// Hamburger menu 
const menuButton = document.getElementById("menu-toggle");
const navigation = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navlink.classList.toggle("show");
  menuToggle.textContent = navlink.classList.contain("show") ? "☰" : "✖";
});

function openNav() {
  document.getElementById("mySideNav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySideNav").style.width = "0";
}
