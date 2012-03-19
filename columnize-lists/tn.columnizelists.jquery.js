(function ($) {
	$.fn.columnizeLists = function (options) {

		var opts = $.extend({
			useHeights: false
		}, options);

		return this.each(function () {

			var ul1 = $(this);
			if ((ul1.length <= 0) || (ul1.children().length <= 1)) return;

			var ul2 = ul1.after('<ul></ul>').next(),
				count = ul1.children().length;

			if (!opts.useHeights) {
				for (var i = 1; i <= (count / 2); i++) {
					ul2.prepend(ul1.children(':last'));
				}
			}
			else {
				var max = ul1.outerHeight(),
				minOfMax = max,
				ctr = 0;

				while (ctr++ < count && max <= minOfMax) {
					$('body').append('<p>max: ' + max + ' minOfMax: ' + minOfMax + '</p>');
					ul2.prepend(ul1.children(':last'));
					max = Math.max(ul1.outerHeight(), ul2.outerHeight());
					minOfMax = Math.min(minOfMax, max);
					if (ul2.outerHeight() > ul1.outerHeight())
						break;
				}
				if (max > minOfMax) {
					ul1.append(ul1.children(':first'));
				}
			}

			var padding = ul1.outerWidth() - ul1.width(), // with padding and border but w/o margin
				margins = parseInt(ul1.css('margin-left')) + parseInt(ul1.css('margin-right')),
				parentWidth = ul1.parent().width(),
				targetWidth = parentWidth / 2 - margins - padding;
			ul1.add(ul2).css({ float: 'left', width: targetWidth });
		});
	}
	$.fn.columnizeListsByHeight = function (options) { return $(this).columnizeLists($.extend(options, { useHeights: true })); };
})(jQuery);