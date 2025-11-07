document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs.sendForm("service_m8zl1yb", "template_qeay8qd", this).then(
      function () {
        alert("✅ Message sent successfully!");
        document.getElementById("contact-form").reset();
      },
      function (error) {
        alert("❌ Failed to send message. Please try again later.");
        console.error(error);
      }
    );
  });
