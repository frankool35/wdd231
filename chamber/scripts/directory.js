// ====== Member Directory ======
const membersContainer = document.querySelector("#members");
const gridBtn = document.querySelector("#grid");
const listBtn = document.querySelector("#list");

// Fetch and display members
async function getMembers() {
  const response = await fetch("data/members.json"); // adjust if needed
  const data = await response.json();
  displayMembers(data.members);
}

function displayMembers(members) {
  membersContainer.innerHTML = "";
  members.forEach(member => {
    const card = document.createElement("section");
    card.classList.add("member-card");
    card.innerHTML = `
      <img src="images/${member.image}" alt="${member.name}">
      <h3>${member.name}</h3>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
    `;
    membersContainer.appendChild(card);
  });
}

gridBtn.addEventListener("click", () => {
  membersContainer.classList.add("grid-view");
  membersContainer.classList.remove("list-view");
});

listBtn.addEventListener("click", () => {
  membersContainer.classList.add("list-view");
  membersContainer.classList.remove("grid-view");
});

getMembers();

// ====== Footer Info ======
document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

// ====== Hamburger Menu ======
const menuToggle = document.getElementById("menu");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  menuToggle.textContent = navLinks.classList.contains("show") ? "✖" : "☰";
});


const apiKey = "1b44dc16babc235a0fd201fcddfbaf9d"; // OpenWeatherMap API key
const city = "Lagos";
const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

async function getWeather() {
  try {
    const response = await fetch(apiURL);
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();

    // Extract data
    const temp = data.main.temp;
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;

    // Display on page
    document.getElementById("temperature").textContent = `Temperature: ${temp}°C`;
    document.getElementById("description").textContent = description;
    document.getElementById("weather-icon").src = `https://openweathermap.org/img/wn/${icon}.png`;
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

getWeather();
