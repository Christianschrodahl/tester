function activeGall(evt, folderName) {
  var i, popup, gallery;
  popup = document.getElementsByClassName("popup");
  for (i = 0; i < popup.length; i++) {
    popup[i].style.display = "none";
  }
  gallery = document.getElementsByClassName("module");
  for (i = 0; i < gallery.length; i++) {
    gallery[i].className = gallery[i].className.replace(" activeTab", "");
  }
  document.getElementById(folderName).style.display = "block";
  evt.currentTarget.className += " activeTab";	
	
}
var popup = document.querySelectorAll(".popup");
function closeBtn(){
	for(var i = 0; i < popup.length; i++){
		popup[i].style.display = "none";
		}
	};


//slide gall


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var firstFlight = document.getElementsByClassName("firstFlight");
  var flight39A = document.getElementsByClassName("f39A");
  var hardW = document.getElementsByClassName("hardW");
  var y2016 = document.getElementsByClassName("y2016");
  var y2015 = document.getElementsByClassName("y2015");
  var y2014 = document.getElementsByClassName("y2014");
  var captionText = document.getElementById("caption");
  if (n > firstFlight.length) {slideIndex = 1
	}else if (n > flight39A.length){
	slideIndex = 1
	}else if (n > hardW.length){
		slideIndex = 1
	}else if (n > y2016.length){
		slideIndex = 1
	}else if (n > y2015.length){
		slideIndex = 1
	}else if (n > y2014.length){
		slideIndex = 1
	}
	
	
  if (n < 1) {slideIndex = firstFlight.length
	}else if(n < 1){
		slideIndex = flight39A.length
	}else if(n < 1){
		slideIndex = hardW.length
	}else if(n < 1){
		slideIndex = y2016.length
		}else if(n < 1){
		slideIndex = y2015.length
		}else if(n < 1){
		slideIndex = y2014.length
		}
    for (i = 0; i < firstFlight.length; i++) {
      firstFlight[i].style.display = "none";
  }
	for (i = 0; i < flight39A.length; i++) {
      flight39A[i].style.display = "none";
  }
	for (i = 0; i < hardW.length; i++) {
      hardW[i].style.display = "none";
  }
	for (i = 0; i < y2016.length; i++) {
      y2016[i].style.display = "none";
  }
	for (i = 0; i < y2015.length; i++) {
      y2015[i].style.display = "none";
  }
	for (i = 0; i < y2014.length; i++) {
      y2014[i].style.display = "none";
  }
  	firstFlight[slideIndex-1].style.display = "block";
	flight39A[slideIndex-1].style.display = "block";
	hardW[slideIndex-1].style.display = "block";
	y2016[slideIndex-1].style.display = "block";
	y2015[slideIndex-1].style.display = "block";
	y2014[slideIndex-1].style.display = "block";
}

