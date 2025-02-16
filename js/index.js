
var path = document.getElementById("drawArrowLine");
var length = path.getTotalLength();
console.log("Line",length);

var arrowHeadPath = document.getElementById("drawArrowHead");
var arrowHeadLength = arrowHeadPath.getTotalLength();
console.log("Arrowhead",arrowHeadLength);

function showArrow(){
  document.getElementById("drawArrowLeft").style.display = "block";
  document.getElementById("drawArrowRight").style.display = "block";

}

function hideArrow(){
  document.getElementById("drawArrowLeft").style.display = "none";
  document.getElementById("drawArrowRight").style.display = "none";
}





function setArrowHeight() {
            var headerHeight = document.getElementById('header').clientHeight;
            var navHeight = document.getElementById('myTopnav').clientHeight;

            document.getElementById("drawArrowLeft").style.top = `calc(${headerHeight}px + (${navHeight}px / 3))`;
            document.getElementById("drawArrowRight").style.top = `calc(${headerHeight}px + (${navHeight}px / 3))`;
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

  console.log(navWidth); // This will print the total width of all the divs
  console.log(totalNavWidth);

}

window.addEventListener('load', setArrowPosition, true);
window.addEventListener('resize', setArrowPosition, true);
