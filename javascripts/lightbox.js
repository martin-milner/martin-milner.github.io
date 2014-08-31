$(document).ready(function() {
  
  /*$('.gallery').each(function() { // the containers for all your galleries
    $(this).magnificPopup({
      delegate: 'a.mfp-fade', // the selector for gallery item
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-fade',
        removalDelay: 100,
        gallery: {
          enabled:true
        },
        image: {
          verticalFit: true,
          maxWidth: 500,
        }
    });
    });
   
  $('.gallery').each(function() {
    $(this).magnificPopup({
      delegate: 'a.popup-youtube',
      type: 'iframe',
      mainClass: '.popup-youtube',
      gallery: {
        enabled: true,
      }
    });
  });
*/

$('.gallery.image').magnificPopup({
    delegate: 'a.mfp-fade',
    type: 'image',
    mainClass: 'mfp-fade',
    gallery: { enabled:true },
    image: {
      verticalFit: true,
    }
  });
  
  $('.gallery.video').magnificPopup({
    delegate: 'a.popup-youtube', 
    type: 'iframe',
    mainClass: 'mfp-fade',
    gallery: { 
      enabled:true,
    },
    image: {
      verticalFit: true,
    }
  });
  
  
  
  
  
  /*$('.image-popup-vertical-fit').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    mainClass: 'mfp-img-mobile',
    image: {
      verticalFit: true,
    }
    gallery: {
      enabled:true
    }

    });*/

  $('.image-popup-fit-width').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    image: {
      verticalFit: false
    }
  });

  $('.image-popup-no-margins').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

});

/*
$(document).ready(function() {
  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    
    fixedContentPos: false
  });
  }); */