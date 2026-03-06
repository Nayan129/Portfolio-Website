const form = document.getElementById("contact-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  emailjs
    .sendForm("service_m8zl1yb", "template_qeay8qd", this)
    .then(function () {
      alert("✅ Message sent successfully!");
      form.reset();
    })
    .catch(function (error) {
      console.error("EmailJS Error:", error);
      alert("❌ Failed to send message.");
    });
});
