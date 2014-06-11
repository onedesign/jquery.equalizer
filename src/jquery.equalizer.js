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