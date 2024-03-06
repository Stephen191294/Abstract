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


document.getElementById('menuIcon').addEventListener('click', function() {
  // Toggle visibility of menu icon and close icon
  if(slideMenu.style.display === 'none'){
    slideMenu.style.display = 'block';
  }
  else{
    slideMenu.style.display = 'none';
  }
});



let myIcon = document.getElementById('searchIcon');
let secondNav = document.getElementById('secondNav');
let mainNav = document.getElementById('mainNav');
let secondNavInput = document.getElementById('secondNavInput');
let closeButton = document.getElementById('closeButton');



myIcon.addEventListener('click', function() {
  if (window.matchMedia('(max-width: 800px)').matches){
   mainNav.style.display ='none';
    secondNav.style.display = 'block';
    secondNavInput.style.display = 'block';
    closeButton.style.display = 'block';

  }
  else{
    mainNav.style.display ='block';
    secondNavInput.style.display = 'none';
    secondNav.style.display = 'none';
  }

});


//close the second nav to show the main nav
let closebutton = document.getElementById('closeButton');
let secondnav = document.getElementById('secondNav');
let mainnav = document.getElementById('mainNav');


closeButton.addEventListener('click', function() {
  // Hide the secondNav when the closeButton is clicked
  secondNav.style.display = 'none';
  mainNav.style.display = 'block';
});

