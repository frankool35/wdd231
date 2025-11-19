// ---- Set timestamp on form load ----
window.addEventListener("DOMContentLoaded", () => {
    const timestampField = document.getElementById("timestamp");
    timestampField.value = new Date().toISOString();
});

// ---- Membership Card Animation ----
const cards = document.querySelectorAll(".membership-card");

cards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transition = "opacity 1s ease, transform 1s ease";
    card.style.transform = "translateY(20px)";

    setTimeout(() => {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
    }, 200 * index);
});

// ---- Modal Functionality ----
const modalLinks = document.querySelectorAll(".open-modal");
const modals = document.querySelectorAll(".modal");
const closeButtons = document.querySelectorAll(".close-modal");

modalLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = e.target.getAttribute("data-modal");
        document.getElementById(target).showModal();
    });
});

closeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.closest("dialog").close();
    });
});
