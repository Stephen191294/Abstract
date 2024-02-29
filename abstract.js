function toggleMenu() {
  var menuIcon = document.getElementById("menu-icon");
  var slideDownMenu = document.getElementById("slide-down-menu");

  if (slideDownMenu.style.display === "none") {
      // Open the menu
      slideDownMenu.style.display = "block";
      menuIcon.innerHTML = "&#10006;"; // Close icon
  } else {
      // Close the menu
      slideDownMenu.style.display = "none";
      menuIcon.innerHTML = "&#9776;"; // Menu icon
  }
}


document.getElementById('menu-icon').addEventListener('click', function() {
  // Toggle visibility of menu icon and close icon
  document.getElementById('menu-icon').style.display = 'none';
  document.getElementById('close-icon').style.display = 'inline';
});

