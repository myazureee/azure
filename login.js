document.addEventListener("DOMContentLoaded", function() {
    // Elemente abrufen
    var loginBtn = document.getElementById("loginBtn");
    var modal = document.getElementById("loginModal");
    var closeModal = document.getElementsByClassName("close")[0];
    var loginForm = document.getElementById("loginForm");
  
    // Klicken des Login-Buttons öffnet das Modal
    loginBtn.addEventListener("click", function() {
      modal.style.display = "block";
    });
  
    // Klicken des Schließen-Symbols schließt das Modal
    closeModal.addEventListener("click", function() {
      modal.style.display = "none";
    });
  
    // Klicken außerhalb des Modals schließt es
    window.addEventListener("click", function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });
  
    // Formular-Einreichung verhindern (nur zu Demonstrationszwecken)
    loginForm.addEventListener("submit", function(event) {
      event.preventDefault();
      alert("Login erfolgreich!");
      // Füge hier deine eigene Logik für den Login-Prozess hinzu
    });
  });
  