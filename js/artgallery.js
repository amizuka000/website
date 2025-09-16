//Load this js file for the art.html


// Arrays for images in each tab
const drawings = [
  { src: "img/art/abstractflower.jpg", alt: "Abstract Flower" },
  { src: "img/art/twocats.jpg", alt: "Two Cats" },
  { src: "img/art/crumble.jpg", alt: "Crumble" },
  { src: "img/art/shadows.jpg", alt: "Shadows" },
  { src: "img/art/past.jpg", alt: "Past" },
  { src: "img/art/world.jpg", alt: "World" },
  { src: "img/art/time.jpg", alt: "Time" },
  { src: "img/art/timefoolery.jpg", alt: "Time Foolery" },
  { src: "img/art/roses.jpg", alt: "Roses" },
  { src: "img/art/gwb.jpg", alt: "George Washington Bridge" },
  { src: "img/art/cat.jpg", alt: "Cat" },
  { src: "img/art/river.jpg", alt: "River" },
  { src: "img/art/rose.jpg", alt: "Rose" },
  { src: "img/art/awholeworldinside.jpg", alt: "A Whole World Inside" }
];

const photos = [
  { src: "img/artphotos/redbridge.jpg", alt: "Red bridge" },
  { src: "img/artphotos/colosseum.jpg", alt: "Colosseum" },
   { src: "img/artphotos/lucerne.jpg", alt: "Lucerne" },
   { src: "img/artphotos/venice.jpg", alt: "Venice" },
   { src: "img/artphotos/royalnavalmoon.jpg", alt: "Moon at Royal Naval College" },
   { src: "img/artphotos/icelandcar.jpg", alt: "Iceland Car" },
  { src: "img/artphotos/stairandleaves.jpg", alt: "Stairs with autumn leaves" },
  { src: "img/artphotos/butterflies.jpg", alt: "Butterflies" },
  { src: "img/artphotos/reykjavikaurora.jpg", alt: "Reykjavik Aurora" },
  { src: "img/artphotos/221b.jpg", alt: "221B" },
 // { src: "img/artphotos/ojosui.jpg", alt: "Ojosui Water" },
 { src: "img/artphotos/tokyotower.jpg", alt: "Tokyo Tower" },
 { src: "img/artphotos/stpeter.jpg", alt: "St Peter's Basilica" },
  { src: "img/artphotos/bloodmoon.jpg", alt: "Blood Moon" },
  { src: "img/artphotos/icelandsunrise.jpg", alt: "Iceland Sunrise" },
  { src: "img/artphotos/portugalboat.jpg", alt: "Portugal Boat" },
  { src: "img/artphotos/stonehenge.jpg", alt: "Stonehenge" },
  { src: "img/artphotos/buildingandleaves.jpg", alt: "Building and Leaves" },
  { src: "img/artphotos/reykjavikaurora.jpg", alt: "Reykjavik Aurora" },
  
  
 
  // Add more photos as needed
];

// Function to generate thumbnails inside a container
function generateThumbnails(containerId, images) {
  const container = document.getElementById(containerId);
  container.innerHTML = ''; // Clear any existing content

  const artRow = document.createElement('div');
  artRow.className = 'artrow';

  const imageSrcArray = images.map(img => img.src); // Extract just the image paths

  images.forEach((image, i) => {
    const artColumn = document.createElement('div');
    artColumn.className = 'artcolumn';

    const img = document.createElement('img');
    img.src = image.src;
    img.alt = image.alt;
    img.className = 'arthover-shadow artalt';

    // Pass full image array + index to openModal
    img.onclick = () => {
      openModal(imageSrcArray, i + 1);
    };

    artColumn.appendChild(img);
    artRow.appendChild(artColumn);
  });

  container.appendChild(artRow);
}

// Open a tab and generate thumbnails for it
function openTab(evt, tabName) {
  const tabcontent = document.getElementsByClassName('tabcontent');
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }

  const tablinks = document.getElementsByClassName('tablinks');
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '');
  }

  const currentTab = document.getElementById(tabName);
  currentTab.style.display = 'block';

  if (evt) evt.currentTarget.className += ' active';

  // Generate thumbnails
  if (tabName === 'Drawings') {
    generateThumbnails('Drawings', drawings);
  } else if (tabName === 'Photos') {
    generateThumbnails('Photos', photos);
  }

  // Reset content height
  document.getElementById("contentHeight").style.height = "";
}

// ---------- Modal Logic ---------- //

let currentSlideIndex = 1;
let slideImages = [];

function openModal(imagesArray, index) {
var x = window.matchMedia("(min-width: 500px)"); //media query to prevent modal on phones
 slideImages = imagesArray;
  currentSlideIndex = index;
  renderModalSlides();

if (x.matches) { // If media query matches
  document.getElementById("artmyModal").style.display = "block";
  //previously used to hide scroll button on open modal - didn't work
  //document.getElementById("scrollButton").style.display = "none";
  showSlide(currentSlideIndex);

  document.body.style.overflow = 'hidden';
  } else {
   document.getElementById("artmyModal").style.display = "none";
  }
  
}

function closeModal() {
  document.getElementById("artmyModal").style.display = "none";
  document.body.style.overflow = 'auto';
}

function plusSlides(n) {
  showSlide(currentSlideIndex += n);
}

function showSlide(n) {
  const slides = document.querySelectorAll("#modalSlidesContainer .artmySlides");
  if (n > slides.length) currentSlideIndex = 1;
  if (n < 1) currentSlideIndex = slides.length;

  slides.forEach(slide => slide.style.display = "none");
  slides[currentSlideIndex - 1].style.display = "flex";
}

function renderModalSlides() {
  const container = document.getElementById("modalSlidesContainer");
  container.innerHTML = "";

  slideImages.forEach(src => {
    const slide = document.createElement("div");
    slide.className = "artmySlides";
    slide.style.display = "none";

    const img = document.createElement("img");
    img.src = src;
    slide.appendChild(img);

    container.appendChild(slide);
  });
}

// ---------- Initialize on Page Load ---------- //
window.addEventListener('DOMContentLoaded', function () {
  document.getElementById("defaultOpen").click();
});
