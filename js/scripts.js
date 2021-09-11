$(function () {
	$(".carousel").carousel({ interval: 2000 });
	$("#carouselButton").click(function () {
		if ($("#carouselButton").children("i").hasClass("fa-pause")) {
			$(".carousel").carousel("pause");
			$("#carouselButton").children("i").removeClass("fa-pause");
			$("#carouselButton").children("i").addClass("fa-play");
		} else {
			$(".carousel").carousel("cycle");
			$("#carouselButton").children("i").removeClass("fa-play");
			$("#carouselButton").children("i").addClass("fa-pause");
		}
	});
});

$(function () {
	$("#reserveButton").click(function () {
		if ($("#reserveModal").modal("show")) {
			$("#reserveModal").modal("hide");
		} else {
			$("#reserveModal").modal("show");
		}
	});
});

$(function () {
	$("#loginButton").click(function () {
		if ($("#loginModal").modal("show")) {
			$("#loginModal").modal("hide");
		} else {
			$("#loginModal").modal("show");
		}
	});
});
