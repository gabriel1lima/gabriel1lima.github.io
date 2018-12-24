'use strict';


$(window).on('load', function () {

	$(".loader").fadeOut();
	$("#preloder").delay(400).fadeOut("slow");

	if ($('.portfolios-area').length > 0) {
		var containerEl = document.querySelector('.portfolios-area');
		var mixer = mixitup(containerEl);
	}

});


(function ($) {

	$('.nav-switch').on('click', function (event) {
		$('.main-menu').slideToggle(400);
		event.preventDefault();
	});


	$('.set-bg').each(function () {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});


	var port_fi = $('.portfolios-area .first-item'),
		port_si = $('.portfolios-area .second-item'),
		port_intro_h = $('.portfolio-intro').innerHeight();

	if ($(window).width() > 991) {
		port_fi.appendTo('.portfolio-intro');
		port_si.find('.portfolio-item').height(port_intro_h + 601);
	}

	$('.portfolio-item.pi-style2').each(function () {
		var pi_width = $(this).width();
		$(this).height(pi_width + 50);
	});


	$('.panel-link').on('click', function (e) {
		$('.panel-link').parent('.panel-header').removeClass('active');
		var $this = $(this).parent('.panel-header');
		if (!$this.hasClass('active')) {
			$this.addClass('active');
		}
		e.preventDefault();
	});


	if ($().circleProgress) {


		$("#progress1").circleProgress({
			value: 0.75,
			size: 146,
			thickness: 3,
			fill: "#979797",
			emptyFill: "rgba(0, 0, 0, 0)"
		});

		$("#progress2").circleProgress({
			value: 0.83,
			size: 146,
			thickness: 3,
			fill: "#979797",
			emptyFill: "rgba(0, 0, 0, 0)"
		});

		$("#progress3").circleProgress({
			value: 0.25,
			size: 146,
			thickness: 3,
			fill: "#979797",
			emptyFill: "rgba(0, 0, 0, 0)"
		});

		$("#progress4").circleProgress({
			value: 0.95,
			size: 146,
			thickness: 3,
			fill: "#979797",
			emptyFill: "rgba(0, 0, 0, 0)"
		});
	}

})(jQuery);

function clickImg(img) {
	var modal = document.getElementById('myModal');

	var modalImg = document.getElementById("img01");
	var captionText = document.getElementById("caption");

	modal.style.display = "block";
	if (img.clientHeight > img.clientWidth) {
		modalImg.setAttribute("class", "modal-content2")
	} else {
		modalImg.setAttribute("class", "modal-content1")
	}
	modalImg.src = img.src;
	captionText.innerHTML = img.alt;

	var span = document.getElementsByClassName("close")[0];

	span.onclick = function () {
		modal.style.display = "none";
	}
}

var badge = document.createElement("span")
badge.setAttribute("class", "badge badge-secondary ml-1")
badge.setAttribute("id", "badge")

$(window).on('load', function () {
	badge.innerHTML = document.getElementsByClassName("mix").length
	document.getElementsByClassName("mixitup-control-active")[0].appendChild(badge)
});

$(".control").on('click', function contFilter() {
	if (document.getElementById("badge")){
		document.getElementById("badge").outerHTML = ""
	}

	var aux = this.getAttribute("data-filter")
	
	if (aux == "all"){
		badge.innerHTML = document.getElementsByClassName("mix").length

		this.appendChild(badge)
	} else {
		aux = aux.substring(1, aux.length);		
		badge.innerHTML = document.getElementsByClassName(aux).length
	
		this.appendChild(badge)
	}
});