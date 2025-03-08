// Add event listener to navigation menu
document.addEventListener("DOMContentLoaded", function () {
    const navMenu = document.querySelector("nav ul");
    const navItems = document.querySelectorAll("nav ul li");

    navItems.forEach((item) => {
        item.addEventListener("click", () => {
            // Remove active class from all items
            navItems.forEach((item) => item.classList.remove("active"));
            // Add active class to clicked item
            item.classList.add("active");
        });
    });
});
