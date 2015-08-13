           
  function doOnOrientationChange()
  {
    switch( WINDOW.orientation) 
    {  
      case -90:
      case 90:
        alert('landscape');
	document.getElementById('photoaccueil_1').offsetWidth = 65 %;
        break; 
      default:
        alert('portrait');
      	document.getElementById('photoaccueil_1').offsetWidth = 45%;
        break; 
    }
  }

 WINDOW.addEventListener('orientationchange', doOnOrientationChange);

  // Initial execution if needed
  //doOnOrientationChange();
