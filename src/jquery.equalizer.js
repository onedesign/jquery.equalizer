(function( $ ){

  $.fn.equalizer = function(options) {

    var settings = $.extend( {
      heightProperty: 'height'      // gets passed straight through so accepts min-height, max-height or height
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
    if(settings.heightProperty === 'min') {
      this.css({ 'min-height' : maxHeight});
    } else if(settings.heightProperty === 'max') {
      this.css({ 'max-height' : maxHeight});
    } else {
      this.css({ 'height' : maxHeight});
    }

    // Allows this to be chained
    return this;
    
  };

})( jQuery );