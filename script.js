
  
 
  
  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  const form = document.forms['contact-form'];
const successMessage = document.getElementById("success-message");

form.addEventListener('submit', (e) => {
    e.preventDefault();

    fetch('https://script.google.com/macros/s/AKfycbxzHjhJcu9xzrKXWbYz48Qbm7WLUWTwWnxRHkow0omwX-Q5o89hYUSGGA65oPaQEiZM/exec', {
        method: 'POST',
        body: new FormData(form)
    })
    .then(response => {
        form.style.display = "none";  // Hide the form
        successMessage.style.display = "block"; // Show success message
    })
    .catch(error => console.error('Error!', error.message));
});
