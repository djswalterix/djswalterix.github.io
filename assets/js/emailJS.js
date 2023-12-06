(function () {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init("5hY2rKWsJ2oxnGaUU");
})();
/*
$(document).ready(function () {
  $("button[type='submit']").on("click", function () {
    console.log("submit2");
    event.preventDefault();
    // Genera un numero di cinque cifre per la variabile contact_number
    this.contact_number.value = Math.floor(Math.random() * 100000);
    // Invio dell'email utilizzando emailjs
    emailjs.sendForm("contact_service", "contact_form", this).then(
      function () {
        console.log("SUCCESSO!");
      },
      function (error) {
        console.log("FALLITO...", error);
      }
    );
  });
});
*/
window.onload = function () {
  emailjs.init("5hY2rKWsJ2oxnGaUU");
  //console.log("window on load");
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      console.log("submit");
      $(".response-message").append("Messaggio inviato con successo!");

      event.preventDefault();
      // generate a five digit number for the contact_number variable
      this.contact_number.value = (Math.random() * 100000) | 0;
      var responseMessage = document.getElementById("response-message");

      emailjs.sendForm("service_7f8i0ur", "template_z0yia6m", this).then(
        function () {
          console.log("SUCCESS!");
          responseMessage.innerHTML =
            "<p style='color: green;'>Messaggio inviato con successo!</p>";
        },
        function (error) {
          console.log("FAILED...", error);
          responseMessage.innerHTML =
            "<p style='color: red;'>Errore nell'invio del messaggio. Riprova.</p>";
        }
      );
    });
};
