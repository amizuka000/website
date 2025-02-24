function openCloseNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
    document.body.style.overflow = 'hidden';
  } else {
    x.className = "topnav";
    document.body.style.overflow = 'auto';
  };
}
