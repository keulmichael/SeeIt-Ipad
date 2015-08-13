           
  function doOnOrientationChange()
  {
    switch( WINDOW.orientation) 
    {  
      case -90:
	              alert('landscape');

        break; 
      case 90:
        alert('landscape');

        break; 
            case 0:
        alert('portrait');

        break; 
      default:
        alert('portrait');

        break; 
    }
  }

 WINDOW.addEventListener('orientationchange', doOnOrientationChange);

  // Initial execution if needed
  doOnOrientationChange();
