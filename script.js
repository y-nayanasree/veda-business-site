
const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

// Mobile navigation
menuToggle.addEventListener("click", function () {
  navigation.classList.toggle("active");
});

// Close menu after clicking a link
document.querySelectorAll("#navigation a").forEach(function (link) {
  link.addEventListener("click", function () {
    navigation.classList.remove("active");
  });
});

// Contact form demonstration
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();

  formStatus.textContent =
    "Thank you, " + name + "! Your form was submitted successfully in this demo.";

  contactForm.reset();
});
