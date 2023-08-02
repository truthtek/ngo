 
 document.addEventListener("DOMContentLoaded", function() {
    const carousel = new bootstrap.Carousel(document.getElementById("demo"), {
        interval: 5000, // Set the interval for auto slide (5000 ms = 5 seconds)
        ride: true // Enable auto sliding
    });
});



document.addEventListener("DOMContentLoaded", function() {
    const navbarToggler = document.getElementById("navbarToggler");
    const navbarIcon = document.getElementById("navbarIcon");

    // Toggle the fixed class when the icon is clicked
    navbarToggler.addEventListener("click", function() {
        navbarIcon.classList.toggle("fixed-icon");
    });

   
    document.addEventListener("click", function(event) {
        if (!navbarToggler.contains(event.target)) {
            navbarIcon.classList.remove("fixed-icon");
        }
    });
});


function redirectToDonationPage() {
    window.location.href = 'https://www.flutterwave.com/ng/';
}



    function getInvolved() {
        var donateContent = document.getElementById("donate").innerText;
        alert(donateContent);
    }

