const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const faqButtons = document.querySelectorAll(".faq-item button");
const orderForm = document.querySelector("#orderForm");
const formMessage = document.querySelector("#formMessage");

const whatsappNumber = "6281234567890";

// Mobile navigation toggle
navToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("active");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// FAQ accordion interaction
faqButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.parentElement;
    const isActive = item.classList.toggle("active");

    button.setAttribute("aria-expanded", String(isActive));
    button.querySelector("span").textContent = isActive ? "-" : "+";
  });
});

// Simple order form redirect to WhatsApp
orderForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.querySelector("#name").value.trim();
  const status = document.querySelector("#status").value;
  const selectedPackage = document.querySelector("#package").value;
  const goal = document.querySelector("#goal").value.trim();

  const message = [
    "Halo CVSiapKerja, saya ingin konsultasi pembuatan CV.",
    `Nama: ${name}`,
    `Status: ${status}`,
    `Paket: ${selectedPackage}`,
    `Target: ${goal}`,
  ].join("\n");

  formMessage.textContent = "Membuka WhatsApp untuk melanjutkan konsultasi...";
  const phone = "6281277895708";

window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`);
});
