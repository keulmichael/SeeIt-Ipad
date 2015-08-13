
 // Find matches
var mql = window.matchMedia("(orientation: portrait)");

// If there are matches, we're in portrait
if(mql.matches) {  
	// Portrait orientation
	alert("(orientation:portrait)");
	document.getElementById('photoaccueil_1').offsetWidth = 45%;
} else {  
	// Landscape orientation
	alert("(orientation:paysage)");
	document.getElementById('photoaccueil_1').offsetWidth = 65 %;
}

// Add a media query change listener
mql.addListener(function(m) {
	if(m.matches) {
		// Changed to portrait
	alert("(orientation:portrait)");
	document.getElementById('photoaccueil_1').offsetWidth = 45%;
	}
	else {
		// Changed to landscape
	alert("(orientation:paysage)");
	document.getElementById('photoaccueil_1').offsetWidth = 65 %;
	}
});
