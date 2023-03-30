$(document).ready(function(){
	$(":input").inputmask();

	$('#btn-dod-modal').on('click', function (){
		$('.bd-example-modal-lg').modal('show')
	})
	$("#owl-carousel-header").owlCarousel({
		items: 7,
		margin: 0,
		nav: true,
		navText: true,
		loop:true,
		dots: false,
		autoplay: false,
		responsive:{
			0:{
				items:2
			},
			600:{
				items:3
			},
			1000:{
				items:6
			}
		}
	});


	let owlFooter = $("#owl-carousel-footer").owlCarousel({
		items: 3,
		margin: 20,
		nav: true,
		//navText: true,
		loop:true,
		dots: false,
		mouseDrag: false,
		touchDrag: false,
		pullDrag: false,
		autoplay: false,
		responsive:{
			0:{
				items:3
			},
			600:{
				items:3
			},
			1000:{
				items:3
			}
		},
		onInitialized: function (){
			let i = 1
			$('#owl-carousel-footer .owl-item.active').each(function (e){
				if(i === 2){
					$(this).addClass('slide-center')
				}
				i++
			})
		},
		onChanged: function (){
		},
	});

	$('.nav-next').on('click', function(){
		owlFooter.trigger('next.owl.carousel');
		$('#owl-carousel-footer .owl-item').removeClass('slide-center')
		changeActiveSlider()
	})
	$('.nav-prev').on('click', function(){
		owlFooter.trigger('prev.owl.carousel');
		changeActiveSlider()
	})

	$('.selectpicker').selectpicker()

	const  owlSchedule = $("#owl-carousel-schedule").owlCarousel({
		items: 10,
		nav: true,
		// navText: ['<', '>'],
		loop:true,
		dots: false,
		autoplay: false,
		responsive:{
			0:{
				items:2
			},
			600:{
				items:3
			},
			1000:{
				items: 10
			}
		}
	});

	$('.next').on('click', function(){
		owlSchedule.trigger('next.owl.carousel');
	})
	$('.prev').on('click', function(){
		owlSchedule.trigger('prev.owl.carousel');
	})


	const owlFeedback = $("#owl-carousel-feedback").owlCarousel({
		item: 1,
		nav: false,
		dots: false,
		loop:true,
		autoplay: true,
		autoplayTimeout:8000,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items: 1
			}
		}
	})

	const owlFeedbackMobile = $("#owl-carousel-feedback-mobile").owlCarousel({
		item: 1,
		nav: false,
		dots: false,
		loop:true,
		autoplay: true,
		autoplayTimeout:8000,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items: 1
			}
		}
	})


	owlFeedback.trigger('play.owl.autoplay',[8000])
	owlFeedbackMobile.trigger('play.owl.autoplay',[8000])

	let movie = document.getElementById("movie");
	$('.btn-play').on('click', function (){
		playPause()
		$(this).hide()
	})

	$('#btnSendForm').on('click', function (e){
		if($('#requestForm').validate({ lang: 'ru'})){
			if($('[name="patronymic"]').val() !== '' || $('[name="without_patronymic"]').prop('checked')){
				$('#requestForm').submit()
			}
		}
	})

	function playPause() {
		if (movie.paused)
			movie.play();
		else
			movie.pause();
	}
});

function changeActiveSlider(){
	$('#owl-carousel-footer .owl-item').removeClass('slide-center')
	let i = 1
	$('#owl-carousel-footer .owl-item.active').each(function (e){
		if(i === 2){
			$(this).addClass('slide-center')
		}
		i++
	})
}