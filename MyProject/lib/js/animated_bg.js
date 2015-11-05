;(function($, window, document, undefined) {

	$.fn.animatedBG = function(options){
		var defaults = {
				colorSet: ['#F08080', '#DB7093', '#FFA07A', '#DDA0DD', 
				'#800080', '#7B68EE','#3CB371', '#008B8B','#5F9EA0','#191970', '#800000'],
				speed: 300
			},
			settings = $.extend({}, defaults, options);

		return this.each(function(){
			var $this = $(this);

			$this.each(function(){
				var $el = $(this),
					colors = settings.colorSet;
				
				function shiftColor() {
					var color = colors.shift();
					colors.push(color);
					return color;
				}

				// initial color
				var initColor = shiftColor();
				$el.css('backgroundColor', initColor);
				setInterval(function(){
					var color = shiftColor();
					$el.animate({backgroundColor: color}, 3000);
				}, settings.speed);
			});
		});
	};

	// Initialize
	$(function(){
		$('.animated_bg').animatedBG();
	});

}(jQuery, window, document));