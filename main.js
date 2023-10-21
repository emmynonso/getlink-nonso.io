    const navLinks = document.querySelector(".nav-links");
    
      function onToggleMenu(e) {
        e.name = e.name === "menu" ? "close" : "menu";
        navLinks.classList.toggle("top-[10%]");
      }



      // submit form

      function submitNewForm() {
        const name = document.getElementById("names").value;
        const email = document.getElementById("emails").value;
        if (name && email) {
          document.getElementById("myNorm").style.display = "none";
          document.getElementById("diver").style.display = "none";
          document.getElementById("success-text").style.display = "block";        

        }
      }

      // submit form

      function submitForm() {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        if (name && email) {
          document.getElementById("myForm").style.display = "none";
          document.getElementById("success-message").style.display = "block";
        }
      }


      function updateCountdown() {
        const targetTime = new Date("01-10-2023");
        targetTime.setHours(targetTime.getHours() + 23);
        targetTime.setMinutes(targetTime.getMinutes() + 59);
        targetTime.setSeconds(targetTime.getSeconds() + 30);

        const now = new Date("01-10-2023");
        const remainingTime = targetTime - now;

        const hours = Math.floor(remainingTime / (1000 * 60 * 60));
        const minutes = Math.floor(
          (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

        document.getElementById(
          "countdown-timer"
        ).textContent = `${hours}hrs ${minutes}mins ${seconds}s`;

        if (remainingTime <= 0) {
          clearInterval(countdownInterval);
          document.getElementById("countdown-timer").textContent =
            "Countdown finished!";
        }
      }

      const countdownInterval = setInterval(updateCountdown, 1000);

      