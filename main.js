    const navLinks = document.querySelector(".nav-links");
    
      function onToggleMenu(e) {
        e.name = e.name === "menu" ? "close" : "menu";
        navLinks.classList.toggle("top-[10%]");
      }

    
      function submitNewForm() {
        const name = document.getElementById("names").value;
        const email = document.getElementById("emails").value;
        if (name && email) {
          document.getElementById("myNorm").style.display = "none";
          document.getElementById("diver").style.display = "none";
          document.getElementById("success-text").style.display = "block";        

        }
      }



      function submitForm() {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        if (name && email) {
          document.getElementById("myForm").style.display = "none";
          document.getElementById("success-message").style.display = "block";
        }
      }

