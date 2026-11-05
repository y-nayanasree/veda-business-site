
const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

// Mobile navigation
menuToggle.addEventListener("click", () => {
  const isOpen = navbar.classList.toggle("active");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close navigation after clicking a link
document.querySelectorAll("#navbar a").forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// Contact form validation and demo response
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name.length < 2) {
    formStatus.textContent = "Please enter a valid name.";
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    formStatus.textContent = "Please enter a valid email address.";
    return;
  }

  if (message.length < 10) {
    formStatus.textContent = "Message must contain at least 10 characters.";
    return;
  }

  formStatus.textContent =
    `Thank you, ${name}! Your demo message has been received.`;

  contactForm.reset();
});

console.log("VedaTech website loaded successfully!");
