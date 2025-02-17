
// Interaction for CTA's
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".buynow").forEach(button => {
        button.addEventListener("click", function () {
            alert("Redirecting to checkout...");
        });
    });

    document.querySelectorAll(".addtocart").forEach(button => {
        button.addEventListener("click", function () {
            alert("Item added to cart!");
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('.navlinks a').forEach(anchor => {
        anchor.addEventListener('click', function (event) {
            event.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
