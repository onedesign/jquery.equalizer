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
      heightProperty: 'height',      // gets passed straight through so accepts min-height, max-height or height
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

    console.log(heights);

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

    console.log(newHeight);


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