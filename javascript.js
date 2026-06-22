// Welcome Message
window.onload = function () {
    alert("Welcome to FashionNest!");
};

// Shop Now Button
const shopBtn = document.getElementById("shopBtn");

shopBtn.addEventListener("click", function () {
    document.getElementById("products").scrollIntoView({
        behavior: "smooth"
    });
});

// Navbar Link Highlight
const links = document.querySelectorAll("nav ul li a");

links.forEach(link => {
    link.addEventListener("click", function () {
        links.forEach(item => item.style.color = "black");
        this.style.color = "#ff4d6d";
    });
});

// Dynamic Greeting
const hour = new Date().getHours();

if (hour < 12) {
    console.log("Good Morning!");
} else if (hour < 18) {
    console.log("Good Afternoon!");
} else {
    console.log("Good Evening!");
}

// Dark Theme Toggle
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.innerText = "☀ Light Mode";
    } else {
        themeBtn.innerText = "🌙 Dark Mode";
    }
});