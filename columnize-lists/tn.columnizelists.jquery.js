(function ($) {
	$.fn.columnizeLists = function (options) {

		var opts = $.extend({
			useHeights: false
		}, options);

		return this.each(function () {

			var ul1 = $(this);
			if ((ul1.length <= 0) || (ul1.children().length <= 1)) return;

			// create a new empty list and give it the classes of the original one
			var ul2 = ul1.after('<ul></ul>').next().addClass(ul1.attr('class')),
				count = ul1.children().length;

			// set the target width already so that the height calculation will succeed
			// calculate the maximum width for each of the two lists to appear side-by-side inside the parent element
			var padding = ul1.outerWidth() - ul1.width(), // with padding and border but w/o margin
				margins = parseInt(ul1.css('margin-left')) + parseInt(ul1.css('margin-right')),
				parentWidth = ul1.parent().width(),
				targetWidth = parentWidth / 2 - margins - padding;
			ul1.add(ul2).css({ float: 'left', width: targetWidth });

			if (!opts.useHeights) {
				for (var i = 1; i <= (count / 2); i++) {
					ul2.prepend(ul1.children(':last'));
				}
			}
			else {
				var max = previousHeight1 = ul1.outerHeight(),
					minOfMax = max,
					ctr = 0;

				while (ctr++ < count && max <= minOfMax) {
					// some debugging
					// $('body').append('<p>h1: ' + ul1.outerHeight() + ' h2: ' + ul2.outerHeight() + ' max: ' + max + ' minOfMax: ' + minOfMax + '</p>');

					previousHeight1 = ul1.outerHeight();

					// move last element of first list to beginning of second list
					ul2.prepend(ul1.children(':last'));

					// recalculate
					max = Math.max(ul1.outerHeight(), ul2.outerHeight());
					minOfMax = Math.min(minOfMax, max);

					// if the second list extends beyond the first one, stop
					if (ul2.outerHeight() > ul1.outerHeight())
						break;
				}
				// if the current height is larger than the minimum possible,
				// or the previous split lead to the same height, revert the last step
				if ((max > minOfMax) || (previousHeight1 == minOfMax)) {
					ul1.append(ul2.children(':first'));

					// set height of second list to height of first one to allow several lists below each other
					ul2.height(ul1.outerHeight());
				}
			}
		});
	}

	// funtion shortcut
	$.fn.columnizeListsByHeight = function (options) {
		return $(this).columnizeLists($.extend(options, { useHeights: true }));
	};
})(jQuery);