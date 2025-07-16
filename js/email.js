// email.js

// Initialize EmailJS with your public key
emailjs.init("gtKtVdiRtFbwercWi"); // Replace with your actual EmailJS public key
const btn = document.getElementById("button")

// Send email function
function sendEmail(event) {
    event.preventDefault();
    btn.value = "Sending"

    const form = event.target;

    emailjs.sendForm("service_njo0l3o", "template_08ucynt", form)
        .then(() => {
            // alert("Message sent successfully!");
            btn.value = "Message Sent"
            setTimeout(() => {
                form.reset();
                btn.value = "Send Message"
            }, 2000);
        })
        .catch((error) => {
            alert("Failed to send message. Error: " + error.text);
        });
}

// Attach the event listener once the DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.querySelector(".contact__form");
    if (contactForm) {
        contactForm.addEventListener("submit", sendEmail);
    }
});
