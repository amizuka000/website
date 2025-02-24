/*
1. Mobile Navigation
2. Accordion
3. Gallery Lightbox
*/




//=======================Scroll to topnav==============================
// Get the button:
let myScrollButton = document.getElementById("scrollButton");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
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



//====================Setting minimum content height for footer =============================
//finding content margin height because it's not included in the clientHeight
function getMarginHeight() {
  const marginElement = document.getElementById("contentHeight");
  const style = getComputedStyle(marginElement);
  const marginTop = parseInt(style.marginTop, 10);
  const marginBottom = parseInt(style.marginBottom, 10);
  return marginTop + marginBottom;

}


function setContentHeight() {
  const marginHeight = getMarginHeight();
  var contentHeightValue = document.body.clientHeight; //find the body height

      //For non-mobile versions with a nav bar
        if (contentHeightValue < window.innerHeight && window.innerWidth > 500) {
            var headerHeight = document.getElementById('header').clientHeight;
            var footerHeight = document.getElementById('footer').clientHeight;
            var navHeight = document.getElementById('myTopnav').clientHeight;
            const windowHeight = window.innerHeight;

            document.getElementById("contentHeight").style.height = `calc(${windowHeight}px -  ${headerHeight}px - ${footerHeight}px - ${navHeight}px - ${marginHeight}px)`;
       }

       //For mobile versions without the nav bar
        else if (contentHeightValue < window.innerHeight && window.innerWidth < 500)  {
          var headerHeight = document.getElementById('header').clientHeight;
          var footerHeight = document.getElementById('footer').clientHeight;
          const windowHeight = window.innerHeight;

          document.getElementById("contentHeight").style.height = `calc(${windowHeight}px -  ${headerHeight}px - ${footerHeight}px - ${marginHeight}px)`;
        }


          else{
            document.getElementById("contentHeight").style.height = "";
                  }
                  //document.getElementById("contentHeight").style.top = `${headerHeight}px`;
              }

    window.addEventListener('load', setContentHeight, true);
    window.addEventListener('resize', setContentHeight, true);


/*=============== ACCORDION ============================+*/

function sizeAccordion(){
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

}

window.addEventListener('load', sizeAccordion, true);
window.addEventListener('resize', sizeAccordion, true);



function openNav() {
  var x = document.getElementById("myTopnav");
    document.body.style.overflow = 'hidden';
    document.getElementById("contentHeight").style.filter = 'brightness(0.5)';
    x.style.width = "70%";
}

function closeNav(){
  var x = document.getElementById("myTopnav");
    document.body.style.overflow = 'auto';
    document.getElementById("contentHeight").style.filter = 'brightness(1)';
    x.style.width = "0";
}













//window refresh
var initialViewportWidth = window.innerWidth || document.documentElement.clientWidth;

// portrait mobile viewport initial, any change refresh
if (initialViewportWidth < 500) {
 		 window.addEventListener('resize', function () {
				newViewportWidth = window.innerWidth || document.documentElement.clientWidth;
				if (newViewportWidth > 499) {
					location.reload();
					}
			});
}

// landscape mobile viewport initial, any change refresh
else if (initialViewportWidth > 499 && initialViewportWidth < 720) {
    window.addEventListener('resize', function () {
				newViewportWidth = window.innerWidth || document.documentElement.clientWidth;
				if (newViewportWidth < 500 || newViewportWidth > 719) {
					location.reload();
					}
			});
}

// tablet viewport initial, any change refresh
else if (initialViewportWidth > 719 && initialViewportWidth < 1000)  {
      window.addEventListener('resize', function () {
				newViewportWidth = window.innerWidth || document.documentElement.clientWidth;
				if (newViewportWidth < 720 || newViewportWidth > 999) {
					location.reload();
					}
			});
}

// web viewport initial, any change refresh
else if (initialViewportWidth > 999) {
        window.addEventListener('resize', function () {
				newViewportWidth = window.innerWidth || document.documentElement.clientWidth;
				if (newViewportWidth < 1000) {
					location.reload();
					}
			});
}
