// Example of a simple script to dynamically update the current year
document.addEventListener("DOMContentLoaded", () => {
    const currentYear = new Date().getFullYear();
    const footer = document.querySelector("footer");
    footer.innerHTML += `<p>© ${currentYear} Kisan Sahayak | All Rights Reserved</p>`;
});
