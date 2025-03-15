document.addEventListener("DOMContentLoaded", function () {
    var backBtn = document.getElementById("back-to-work-experience");
    if (backBtn) {
      backBtn.addEventListener("click", function (e) {
        e.preventDefault();
        // Set the flag so that the intro remains hidden on index.html
        localStorage.setItem("introHidden", "true");
        // Redirect to index.html with an anchor to the work experience section
        window.location.href = "index.html#work-experience";
      });
    }
  });
  