(function ($) {
	$.fn.foldCorner = function (options) {
		var settings = $.extend({
			size: 40,
			background: '#fff'
		}, options);
		return this.each(function () {
			var fold_corner = '<div class="fold-corner" style="width: ' 
					+ settings.size * 2 + 'px; height: ' + settings.size 
					+ 'px; position: absolute; right: 0; bottom: 0">' 
					+ '<div class="fold-corner-left" style="float: left; ' 
					+ 'opacity: .6; width: 0; height: 0; ' 
					+ 'border-style: solid; border-width: 0 0 ' 
					+  settings.size + 'px ' + settings.size + 'px; ' 
					+ 'border-color: transparent transparent #999"></div>' 
					+ '<div class="fold-corner-right" style="float: left; ' 
					+ 'width: 0; height: 0; border-style: solid; ' 
					+ 'border-width: 0 0 ' + settings.size + 'px ' 
					+  settings.size + 'px; ' 
					+ 'border-color: transparent transparent ' 
					+  settings.background + ' rgba(255, 255, 255, .6)">' 
					+ '</div></div>';
			return $(this).append(fold_corner).css('position', 'relative');
		});
	};
})(jQuery);