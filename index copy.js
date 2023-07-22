 
 document.addEventListener("DOMContentLoaded", function() {
    const carousel = new bootstrap.Carousel(document.getElementById("demo"), {
        interval: 1000, // Set the interval for auto slide (5000 ms = 5 seconds)
        pause: "hover", // Pause the auto slide on hover
        ride: true // Enable auto sliding
    });
});