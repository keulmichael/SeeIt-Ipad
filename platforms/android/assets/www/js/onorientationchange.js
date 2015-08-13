WINDOW.onorientationchange = function() {
   var portraitOrientation = window.matchMedia("(orientation:portrait)");
   if ( portraitOrientation.matches ) {
document.getElementById('photoaccueil_1').offsetWidth = 45%;
   } else {
document.getElementById('photoaccueil_1').offsetWidth = 65 %;	
   }
 }
