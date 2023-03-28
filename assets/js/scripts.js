$(document).ready(function(){
	$('#btn-dod-modal').on('click', function (){
		$('.bd-example-modal-lg').modal('show')
		console.log("nuhhuhnu")
	})
	$("#owl-carousel-header").owlCarousel({
		items: 7,
		margin: 0,
		nav: true,
		navText: true,
		loop:true,
		dots: false,
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