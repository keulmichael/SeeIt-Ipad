  function listenerTailleEcran(requeteMedia) {
	var orientationPortrait = document.getElementById('orientationPortrait');
	if (requeteMedia.matches) {  
      	document.getElementById('photoaccueil_1').offsetWidth = '45%';
	} else {  
	document.getElementById('photoaccueil_1').offsetWidth = '65%';  
	}
}  
	
document.addEventListener('DOMContentLoaded', function(){
	var requeteMedia = window.matchMedia("(orientation : portrait)");
	requeteMedia.addListener(listenerTailleEcran);
	
	listenerTailleEcran(requeteMedia);
}, false);
