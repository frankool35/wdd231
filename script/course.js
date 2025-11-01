// ==============================
// course.js — Dynamic Course Cards
// ==============================

// ====== COURSE LIST ======
const courses = [
  {
    subject: "CSE",
    number: 110,
    title: "Introduction to Programming",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course will introduce students to programming and the building blocks of programming languages.",
    technology: ["Python"],
    completed: true, // ✅ Completed
  },
  {
    subject: "WDD",
    number: 130,
    title: "Web Fundamentals",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "Introduces students to web design and development using HTML and CSS.",
    technology: ["HTML", "CSS"],
    completed: true, // ✅ Completed
  },
  {
    subject: "CSE",
    number: 111,
    title: "Programming with Functions",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "Students learn to write and test their own functions to solve problems in various disciplines.",
    technology: ["Python"],
    completed: true, // ✅ Completed
  },
  {
    subject: "CSE",
    number: 210,
    title: "Programming with Classes",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course introduces classes, objects, inheritance, and polymorphism.",
    technology: ["C#"],
    completed: false,
  },
  {
    subject: "WDD",
    number: 131,
    title: "Dynamic Web Fundamentals",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "Learn to create dynamic websites that use JavaScript for interactivity.",
    technology: ["HTML", "CSS", "JavaScript"],
    completed: true, // ✅ Completed
  },
  {
    subject: "WDD",
    number: 231,
    title: "Frontend Web Development I",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "Focuses on user experience, accessibility, and performance optimization.",
    technology: ["HTML", "CSS", "JavaScript"],
    completed: false,
  },
];

// ====== DOM REFERENCES ======
const courseList = document.getElementById("course-list");
const totalCredits = document.getElementById("total-credits");
const filterButtons = document.querySelectorAll(".filter-buttons button");

// ====== FUNCTIONS ======
function displayCourses(courseArray) {
  courseList.innerHTML = ""; // Clear previous display

  courseArray.forEach((course) => {
    const courseCard = document.createElement("div");
    courseCard.classList.add("course-card");
    if (course.completed) courseCard.classList.add("completed");

    courseCard.innerHTML = `
      <h3>${course.subject} ${course.number}</h3>
      <p>${course.title}</p>
      <p><strong>Credits:</strong> ${course.credits}</p>
      <p class="desc">${course.description}</p>
    `;
    courseList.appendChild(courseCard);
  });

  // Update total credits dynamically
  const total = courseArray.reduce((sum, course) => sum + course.credits, 0);
  totalCredits.textContent = total;
}

// ====== FILTERING ======
function filterCourses(filterType) {
  let filteredCourses;

  if (filterType === "WDD") {
    filteredCourses = courses.filter((c) => c.subject === "WDD");
  } else if (filterType === "CSE") {
    filteredCourses = courses.filter((c) => c.subject === "CSE");
  } else {
    filteredCourses = courses; // "All" selected
  }

  displayCourses(filteredCourses);
}

// ====== EVENT LISTENERS ======
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    filterCourses(button.id);
  });
});

// ====== INITIAL LOAD ======
displayCourses(courses);
