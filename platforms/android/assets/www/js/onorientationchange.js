  function listenerTailleEcran(requeteMedia) {
	var orientationPortrait = document.getElementById('orientationPortrait');
	if (requeteMedia.matches) {  
	document.getElementById('containerAccueil').style.width = '500px';
      	document.getElementById('photoaccueil_1').style.width = '100%';
      	document.getElementById('photoaccueil_2').style.width = '100%';
      	document.getElementById('photoaccueil_3').style.width = '100%';
      	document.getElementById('pubaccueil_1').style.width = '100%';
      	document.getElementById('pubaccueil_2').style.width = '100%';
	} else {  
	document.getElementById('containerAccueil').style.width = '300px';
	document.getElementById('photoaccueil_1').style.width = '45%';
	document.getElementById('photoaccueil_2').style.width = '45%';
	document.getElementById('photoaccueil_3').style.width = '45%';
	document.getElementById('pubaccueil_1').style.width = '45%';
	document.getElementById('pubaccueil_2').style.width = '45%';
	}
}  
	
document.addEventListener('DOMContentLoaded', function(){
	var requeteMedia = window.matchMedia("(orientation : portrait)");
	requeteMedia.addListener(listenerTailleEcran);
	
	listenerTailleEcran(requeteMedia);
}, false);
