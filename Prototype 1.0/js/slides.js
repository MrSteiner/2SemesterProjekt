var slideIndex = [1,1,1,1];

function plusSlides(s,n) {
  showSlides(s, slideIndex[s-1] += n);
}

function currentSlide(s,n) {
  showSlides(s, slideIndex[s-1] = n);
}

function showSlides(s,n) {
  var i;
  var slides = document.getElementsByClassName("mySlides"+s);
  var dots = document.getElementsByClassName("dot"+s);
  if (n > slides.length) {slideIndex[s-1] = 1}    
  if (n < 1) {slideIndex[s-1] = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
    
  slides[slideIndex[s-1]-1].style.display = "block";  
  dots[slideIndex[s-1]-1].className += " active";
}