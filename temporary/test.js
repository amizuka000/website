function openNav() {
  var x = document.getElementById("myTopnav");
    document.body.style.overflow = 'hidden';
    x.style.width = "70%";
}

function closeNav(){
  var x = document.getElementById("myTopnav");
    document.body.style.overflow = 'auto';
    x.style.width = "0";
}



/*=============== MOBILE NAVIGATION ============================+*/


/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
