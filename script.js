// HERO SECTION
let hero = document.getElementById("hero");
let title = document.getElementById("heroTitle");
let text = document.getElementById("heroText");
let btn = document.getElementById("heroBtn");

btn.addEventListener("click", () => {
  hero.classList.toggle("active");

  if (hero.classList.contains("active")) {
    title.innerText = "I design clean & modern websites";
    text.innerText = "Scroll down to see my services and projects.";
    btn.innerText = "Go Back";
  } else {
    title.innerText = "Hi, I'm Naina";
    text.innerText = "a beginner web & UI designer.";
    btn.innerText = "View My Work";
  }
});

// ABOUT SECTION
let aboutText = document.getElementById("aboutText");
let aboutBtn = document.getElementById("aboutBtn");

aboutBtn.addEventListener("click", () => {
  if (aboutBtn.innerText === "Read More") {
    aboutText.innerText =
      "I’m a beginner freelance web & UI designer who loves creating clean layouts. I’m currently learning HTML, CSS, and JavaScript and building real projects step by step.";
    aboutBtn.innerText = "Read Less";
  } else {
    aboutText.innerText =
      "I’m a beginner freelance web & UI designer who loves creating clean layouts.";
    aboutBtn.innerText = "Read More";
  }
});

// SERVICE CARDS
let cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    cards.forEach((c) => c.classList.remove("active"));
    card.classList.add("active");
  });
});

// SKILLS PROGRESS
let progresses = document.querySelectorAll(".progress");

progresses.forEach((bar) => {
  let value = bar.getAttribute("data-value");
  bar.style.width = value + "%";
});

// JOURNEY SECTION
let buttons = document.querySelectorAll(".toggleBtn");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    let details = btn.previousElementSibling;

    if (details.style.display === "block") {
      details.style.display = "none";
      btn.innerText = "Read More";
    } else {
      details.style.display = "block";
      btn.innerText = "Read Less";
    }
  });
});

// TESTIMONIALS
let reviews = [
  { text: "Very clean and professional design!", name: "Client A" },
  { text: "Great learning progress and effort.", name: "Mentor" },
  { text: "Simple UI with good structure.", name: "Reviewer" }
];

let index = 0;
let reviewText = document.getElementById("reviewText");
let reviewName = document.getElementById("reviewName");

function showReview() {
  reviewText.innerText = reviews[index].text;
  reviewName.innerText = reviews[index].name;
}

showReview();

document.getElementById("next").addEventListener("click", () => {
  index = (index + 1) % reviews.length;
  showReview();
});

document.getElementById("prev").addEventListener("click", () => {
  index = (index - 1 + reviews.length) % reviews.length;
  showReview();
});

// CONTACT FORM
let form = document.getElementById("contactForm");
let successMsg = document.getElementById("successMsg");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  if (!name || !email || !message) {
    alert("Please fill all fields");
  } else {
    successMsg.innerText = "Message sent successfully!";
    form.reset();
  }
});
