document.addEventListener("DOMContentLoaded", function () {
    // Check if the 'introHidden' flag is set
    if (localStorage.getItem("introHidden") !== "true") {
        // Intro is not hidden, display the intro section
        var introEl = document.getElementById("intro");
        if (introEl) {
            introEl.style.display = "block"; // Ensure intro section is displayed
        }
        document.querySelectorAll(".section").forEach(function (section) {
            section.classList.remove("visible"); // Ensure other sections are hidden
        });
    } else {
        // Intro is hidden, show all sections
        document.querySelectorAll(".section").forEach(function (section) {
            section.classList.add("visible");
            console.log("Section made visible:", section.id); // Debug log
        });
        AOS.refresh(); // Refresh AOS to apply animations
    }
  
    var discoverBtn = document.querySelector(".scroll-down");
    if (discoverBtn) {
        discoverBtn.addEventListener("click", function (e) {
            e.preventDefault();
  
            document.documentElement.style.overflow = "auto";
            document.body.style.overflow = "auto";
  
            var introEl = document.getElementById("intro");
            if (introEl) {
                introEl.style.display = "none";
            }
            document.querySelectorAll(".section").forEach(function (section) {
                section.classList.add("visible");
                console.log("Section made visible:", section.id); // Debug log
            });
  
            localStorage.setItem("introHidden", "true");
  
            var aboutSection = document.getElementById("about");
            if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: "smooth" });
            }
            AOS.refresh(); // Refresh AOS to apply animations
        });
    }
  });
  