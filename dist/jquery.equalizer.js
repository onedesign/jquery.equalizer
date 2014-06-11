/*
 *  jQuery Equlizer - v1.0
 *  A tiny plugin for making elements the same size.
 *  https://github.com/onedesign/jquery.equalizer
 *
 *  Made by One Design Company
 *  Under MIT License
 */
(function( $ ){

  $.fn.equalizer = function(options) {

    var settings = $.extend( {
    }, options );

    var maxHeight = 0;

    this.each(function() {
      
      var $this = $(this);
      var elHeight;

      elHeight = $this.outerHeight();

      if(elHeight > maxHeight){
        maxHeight = elHeight;
      }

    });

    // Returning
    return this.outerHeight(maxHeight);
    
    
  };

})( jQuery );