WINDOW.onorientationchange = function() {
   var portraitOrientation = window.matchMedia("(orientation:portrait)");
   if ( portraitOrientation.matches ) {alert("(orientation:portrait)");
document.getElementById('photoaccueil_1').offsetWidth = 45%;
   } else {alert("(orientation:paysage)");
document.getElementById('photoaccueil_1').offsetWidth = 65 %;	
   }
 }
 
