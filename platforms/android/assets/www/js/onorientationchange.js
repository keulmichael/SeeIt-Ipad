  function listenerTailleEcran(requeteMedia) {
	var orientationPortrait = document.getElementById('orientationPortrait');
	if (requeteMedia.matches) {  
	document.getElementById('containerAccueil').style.height = '500px';
	document.getElementById('icone-seeit.png').style.width = '450px';	
      	document.getElementById('photoaccueil_1').style.width = '70%';
      	document.getElementById('photoaccueil_2').style.width = '70%';
      	document.getElementById('photoaccueil_3').style.width = '70%';
      	document.getElementById('pubaccueil_1').style.width = '70%';
      	document.getElementById('pubaccueil_2').style.width = '70%';
	} else {  
	document.getElementById('containerAccueil').style.height = '400px';
	document.getElementById('icone-seeit.png').style.width = '350px';
	document.getElementById('photoaccueil_1').style.width = '45%';
	document.getElementById('photoaccueil_2').style.width = '45%';
	document.getElementById('photoaccueil_3').style.width = '45%';
	document.getElementById('pubaccueil_1').style.width = '45%';
	document.getElementById('pubaccueil_2').style.width = '45%';
	}
	
	
//	var theimg = document.getElementById("imageid");  
	
//	alert("Image Make: " + EXIF.getTag(theimg, "Make"));

}  
	
document.addEventListener('DOMContentLoaded', function(){
	var requeteMedia = window.matchMedia("(orientation : portrait)");
	requeteMedia.addListener(listenerTailleEcran);
	
	listenerTailleEcran(requeteMedia);
}, false);
