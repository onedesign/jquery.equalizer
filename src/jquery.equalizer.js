(function( $ ){

  $.fn.equalizer = function(options) {

    var settings = $.extend( {
      heightProperty: 'default',      // gets passed straight through so accepts min, max or default
      key: 'tallest'                 // passing in smallest will resize to the smallest rather than the largest
    }, options );

    var newHeight;
    var heights = [];

    this.each(function() {
      
      var $this = $(this);
      var elHeight;

      elHeight = $this.outerHeight();
      heights.push(elHeight);
    });

    if(settings.key === 'shortest') {
      newHeight = Math.min.apply(Math, heights);
    } else if(settings.key === 'average') {
      var sum = 0;
      for(var i = 0; i < heights.length; i++) {
        sum += heights[i];
      }
      newHeight = sum/heights.length;
    } else {
      newHeight = Math.max.apply(Math, heights);
    }

    // Returning
    if(settings.heightProperty === 'min') {
      this.css({ 'min-height' : newHeight});
    } else if(settings.heightProperty === 'max') {
      this.css({ 'max-height' : newHeight});
    } else {
      this.css({ 'height' : newHeight});
    }

    // Allows this to be chained
    return this;
    
  };

})( jQuery );