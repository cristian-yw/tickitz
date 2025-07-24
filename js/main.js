 function toggleMenu() {
    const navmenu = document.getElementById("nav-menu");
    navmenu.classList.toggle("show");
    
  }
  
  const user = JSON.parse(localStorage.getItem("userlg"));
    const authButtons = document.getElementById("authButtons");
    const userHeader = document.getElementById("userHeader");
    const profileImg = document.getElementById("profileimg");
    const dropdown = document.getElementById("dropdown");


    if (user) {
      if (authButtons) authButtons.style.display = "none";
      if (userHeader) userHeader.style.display = "block";
      if (profileImg) profileImg.src = user.avatar || "default.png";
    }

  
    profileImg.addEventListener("click", () => {
      if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
      } else {
        dropdown.style.display = "block";
      }


    window.addEventListener("click", function (e) {
      if (!profileImg.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.style.display = "none";
      }
    });
  });


  function logout() {
    localStorage.removeItem("userlg");
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/index.html";
  }