
//Figuring out svg length. Unnecessary beyond initial calculation for css

var path = document.getElementById("drawArrowLine");
var length = path.getTotalLength();
console.log("Line",length);

var arrowHeadPath = document.getElementById("drawArrowHead");
var arrowHeadLength = arrowHeadPath.getTotalLength();
console.log("Arrowhead",arrowHeadLength);






/* IN PROGRESS
var pathHeadHorizontal = document.getElementById("drawArrowHeadHorizontal");
var lengthHeadHorizontal = pathHeadHorizontal.getTotalLength();
console.log("HorizontalHead",lengthHeadHorizontal);

var pathLineHorizontal = document.getElementById("drawArrowLineHorizontal");
var lengthLineHorizontal = pathLineHorizontal.getTotalLength();
console.log("HorizontalLine",lengthLineHorizontal);
*/


//Hover "Explore my portfolio!" to show the arrows
function showArrow(){
  document.getElementById("drawArrowLeft").style.display = "block";
  document.getElementById("drawArrowRight").style.display = "block";
}

//Hides the arrows after hover
function hideArrow(){
  document.getElementById("drawArrowLeft").style.display = "none";
  document.getElementById("drawArrowRight").style.display = "none";
}

function highlightNav(){
  document.getElementById("myTopnav").style.filter = 'brightness(0.9)';
  var t = setTimeout(function(){
      document.getElementById("myTopnav").style.filter = 'brightness(1)';
    },(0.4*1000));





}

//Shows the arrows for mobile "Explore my portfolio!"
/*
function showArrowHorizontal(){
  document.getElementById("drawArrowHorizontal").style.display = "block";
}
*/

//Sets the arrows at a height within the nav bar
function setArrowHeight() {
  var headerHeight = document.getElementById('header').clientHeight;
  var navHeight = document.getElementById('myTopnav').clientHeight;

  document.getElementById("drawArrowLeft").style.top = `calc(${headerHeight}px + (${navHeight}px / 4))`;
  document.getElementById("drawArrowRight").style.top = `calc(${headerHeight}px + (${navHeight}px / 4))`;
  }

  window.addEventListener('load', setArrowHeight, true);
  window.addEventListener('resize', setArrowHeight, true);


//Positioning the arrows right outside the navigation links
function setArrowPosition(){
  var nav = document.getElementsByClassName('circle');
  var navWidth = 0;

  // Loop through the 'nav' collection and sum the widths of each div
  for (var i = 0; i < nav.length; i++) {
    navWidth += nav[i].offsetWidth; // Get the width of each div (including padding, borders, etc.)
  }

  var totalNavWidth = document.getElementById('myTopnav').clientWidth;

  document.getElementById("drawArrowLeft").style.left = `calc((${totalNavWidth}px - ${navWidth}px)/2 - 60px)`;
  document.getElementById("drawArrowRight").style.right = `calc((${totalNavWidth}px - ${navWidth}px)/2 - 60px)`;
  }

  window.addEventListener('load', setArrowPosition, true);
  window.addEventListener('resize', setArrowPosition, true);
