           
  function doOnOrientationChange()
  {
    alert( WINDOW.orientation) ;

  }

 WINDOW.addEventListener('orientationchange', doOnOrientationChange);

  // Initial execution if needed
  doOnOrientationChange();
