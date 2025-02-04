/*
1. Mobile Navigation
2. Accordion
3. Gallery Lightbox
*/



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


/*=============== ACCORDION ============================+*/

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("accordionactive");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}




//=======================Scroll to topnav==============================
// Get the button:
let myScrollButton = document.getElementById("scrollButton");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myScrollButton.style.display = "block";
  } else {
    myScrollButton.style.display = "none";
  }

//Don't go below footer
  let footerElement = document.getElementById('footer');
    let footerElementRect = footerElement.getBoundingClientRect();
    let myScrollButtonPositionBottom = myScrollButton.offsetTop + myScrollButton.offsetHeight;
    if (footerElementRect.y < myScrollButtonPositionBottom) {
      // if button is lower than footer.
      // modify css bottom.
      let diffheight = myScrollButtonPositionBottom - footerElementRect.y;
      let style = window.getComputedStyle(myScrollButton);
      let addBottom = parseInt(style.getPropertyValue('bottom')) + diffheight + parseFloat(getComputedStyle(myScrollButton).fontSize); // Adding 1em space (based on font size)
      myScrollButton.style.bottom = addBottom + 'px'; // maybe add more 10 px for bottom space of a button.
    } else {
      // if button is heigher than footer. this including scroll up.
      // remove custom css bottom.
      myScrollButton.style.bottom = '';
    }

}


function topFunction() {
  window.scrollTo({
    top: 0,      // Scroll to the top of the page
    left: 0,     // Keep horizontal position as 0 (if needed)
    behavior: 'smooth'  // Apply smooth scroll
  });
}


/*
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
*/
