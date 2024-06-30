function toggleSideMenu() {
  var menu = document.getElementById("sideMenu");
  var menuButton = document.querySelector(".side-menu-button"); // Select the menu button

  if (menu.style.width === "100%") {
    menu.style.width = "0"; // Hide the menu
    menuButton.style.display = "block"; // Show the menu button
  } else {
    menu.style.width = "100%"; // Show the menu full width
    menuButton.style.display = "none"; // Hide the menu button
  }
}

function closeSideMenu() {
  var sideMenu = document.getElementById("sideMenu");
  var menuButton = document.getElementsByClassName("side-menu-button")[0];
  sideMenu.style.width = "0";
  menuButton.style.display = "block";
}

// Close side menu when clicking outside of it
window.onclick = function (event) {
  var sideMenu = document.getElementById("sideMenu");
  if (event.target === sideMenu) {
    closeSideMenu();
  }
};

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slides");
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("showSlide");
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].classList.add("showSlide");

  setTimeout(showSlides, 2000); // Change image every 4 seconds, adjust as needed
}
