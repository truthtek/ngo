 
 document.addEventListener("DOMContentLoaded", function() {
    const carousel = new bootstrap.Carousel(document.getElementById("demo"), {
        interval: 5000, // Set the interval for auto slide (5000 ms = 5 seconds)
        ride: true // Enable auto sliding
    });
});






function redirectToDonationPage() {
    window.location.href = 'https://www.flutterwave.com/ng/';
}



    function getInvolved() {
        var donateContent = document.getElementById("donate").innerText;
        alert(donateContent);
    }


    document.addEventListener("DOMContentLoaded", function() {
        const mobileIcon = document.querySelector(".mobile-icon"); // Corrected class name
        const navLinks = document.querySelector(".nav-links");
        const navLinkItems = Array.from(navLinks.querySelectorAll('a'));
    
        mobileIcon.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    
        navLinkItems.forEach((link) => { // Removed extra parentheses
            link.addEventListener("click", (event) => {
                event.preventDefault();
                navLinkItems.forEach((item) => { // Removed extra parentheses
                    item.classList.remove("active");
                });
                link.classList.add("active");
            });
        });
    });
    
        
    document.addEventListener("DOMContentLoaded", function () {
        const navbarToggler = document.getElementById("navbarToggler");
        const navbarMenu = document.getElementById("navbarMenu");
      
        navbarToggler.addEventListener("click", function () {
          navbarMenu.classList.toggle("show");
        });
      
        // Prevent clicks inside the menu from closing it
        navbarMenu.addEventListener("click", function (event) {
          event.stopPropagation();
        });
      
        // Close the menu when clicking anywhere else on the page
        document.addEventListener("click", function (event) {
          if (!navbarMenu.contains(event.target) && event.target !== navbarToggler) {
            navbarMenu.classList.remove("show");
          }
        });
      });
      
      
      
      