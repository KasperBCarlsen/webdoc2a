window.onscroll = function() {
    var intro = document.getElementById("IntroVideo");
    var vid = document.getElementById("InterVideo").poster = "img/videoposter.jpg";
 

    if (intro.getBoundingClientRect().bottom < 250 || intro.getBoundingClientRect().top > 225)
    intro.pause();
  else 
    intro.play(); 
}

