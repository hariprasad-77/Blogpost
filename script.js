// Toggle the navigation menu on mobile devices
document.getElementById("menu-toggle").addEventListener("click", function() {
    document.querySelector(".nav-links").classList.toggle("active");
});

// Handle subscription form submission
document.getElementById("subscribe-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const message = document.getElementById("form-message");

    if (email !== "") {
        message.textContent = `Thank you for subscribing with ${email}!`;
        message.style.color = "green";
        document.getElementById("email").value = "";  // Clear the input
    } else {
        message.textContent = "Please enter a valid email address.";
        message.style.color = "red";
    }
});
