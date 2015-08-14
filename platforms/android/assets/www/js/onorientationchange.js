  function listenerTailleEcran(requeteMedia) {
	var orientationPortrait = document.getElementById('orientationPortrait');
	if (requeteMedia.matches) {  
        alert('portrait');
      	document.getElementById('photoaccueil_1').offsetWidth = 45%;
	} else {  
        alert('landscape');
	document.getElementById('photoaccueil_1').offsetWidth = 65 %;  
	}
}  
	
document.addEventListener('DOMContentLoaded', function(){
	var requeteMedia = window.matchMedia("(orientation : portrait)");
	requeteMedia.addListener(listenerTailleEcran);
	
	listenerTailleEcran(requeteMedia);
}, false);
