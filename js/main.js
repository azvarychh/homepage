$(window).scroll(function () {
	$(".bio-new").each(function () {
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow + 650) {
			$(this).addClass("animate__fadeInLeft");
		}
	});
});

$(function () {
	$(window).scroll(function () {
		$(".yt").each(function () {
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow + 650) {
				$(this).addClass("animate__fadeInRight");
			}
		});
	});
});
