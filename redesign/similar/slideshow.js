var slideIndex = 0;
var timer;
carousel();

function carousel() {
    changeSlide();
    timer = setTimeout(carousel, 6000);
}

function slideButtonClick(value) {
    slideIndex = value-1;
    clearTimeout(timer);
    changeSlide();
    timer = setTimeout(carousel, 6000);
}

function changeSlide() {
    var i;
    var x = document.getElementsByClassName("slide_images");

    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
        document.getElementById("slidebutton" +  (i+1)).style.backgroundColor = "transparent";
    }
    slideIndex++;
    if (slideIndex > x.length) {
        slideIndex = 1;
    }

    x[slideIndex-1].style.display = "block";

    var corrButton = document.getElementById("slidebutton" + slideIndex);
    corrButton.style.backgroundColor = "white";
}