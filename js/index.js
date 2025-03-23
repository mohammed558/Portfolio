document.addEventListener("DOMContentLoaded", function () {
    // Check if the 'introHidden' flag is set in sessionStorage
    if (sessionStorage.getItem("introHidden") === "true") {
      // Intro is hidden, so hide it and show all sections
      var introEl = document.getElementById("intro");
      if (introEl) {
        introEl.style.display = "none";
      }
      document.querySelectorAll(".section").forEach(function (section) {
        section.classList.add("visible");
      });
      // Enable scrolling (body only)
      document.body.style.overflow = "auto";
      AOS.refresh();
    } else {
      // Intro is not hidden: show the intro section and keep others hidden
      var introEl = document.getElementById("intro");
      if (introEl) {
        introEl.style.display = "block";
      }
      document.querySelectorAll(".section").forEach(function (section) {
        section.classList.remove("visible");
      });
      // Disable scrolling on the body only while the intro is visible
      document.body.style.overflow = "hidden";
    }
  
    // Add event listener for the Discover More button
    var discoverBtn = document.querySelector(".scroll-down");
    if (discoverBtn) {
      discoverBtn.addEventListener("click", function (e) {
        e.preventDefault();
        // Re-enable scrolling on the body
        document.body.style.overflow = "auto";
  
        // Hide the intro section and reveal content sections
        var introEl = document.getElementById("intro");
        if (introEl) {
          introEl.style.display = "none";
        }
        document.querySelectorAll(".section").forEach(function (section) {
          section.classList.add("visible");
        });
        // Set the sessionStorage flag so the intro stays hidden for this session
        sessionStorage.setItem("introHidden", "true");
  
        // Smooth scroll to the About section
        var aboutSection = document.getElementById("about");
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: "smooth" });
        }
        AOS.refresh();
      });
    }

    const h1Element = document.getElementById("typing-h1");
    const pElement = document.getElementById("typing-p");
  
    const h1Texts = ["Welcome, I'm Mohammed Arshad", "Creative Developer", "Problem Solver"];
    const pTexts = ["Java Full Stack Developer", "Building Scalable Solutions", "Crafting Engaging Experiences"];
  
    let h1Index = 0;
    let pIndex = 0;
  
    function typeText() {
      h1Element.textContent = h1Texts[h1Index];
      pElement.textContent = pTexts[pIndex];
  
      h1Element.style.animation = "none";
      pElement.style.animation = "none";
  
      // Trigger reflow to restart animation
      void h1Element.offsetWidth;
      void pElement.offsetWidth;
  
      h1Element.style.animation = "typing 3s steps(30, end), blink 0.5s step-end infinite alternate";
      pElement.style.animation = "typing 3s steps(30, end), blink 0.5s step-end infinite alternate";
  
      h1Index = (h1Index + 1) % h1Texts.length;
      pIndex = (pIndex + 1) % pTexts.length;
    }
  
    // Initial typing
    typeText();
  
    // Repeat typing every 6 seconds
    setInterval(typeText, 6000);
  });
