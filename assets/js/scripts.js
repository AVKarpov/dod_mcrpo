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

// document.addEventListener("DOMContentLoaded", (function(){
//
// 	const state = {};
// 	const carouselList = document.querySelector('.carousel__list');
// 	const carouselItems = document.querySelectorAll('.carousel__item');
// 	const elems = Array.from(carouselItems);
//
// 	carouselList.addEventListener('click', function (event) {
// 		var newActive = event.target;
// 		var isItem = newActive.closest('.carousel__item');
//
// 		if (!isItem || newActive.classList.contains('carousel__item_active')) {
// 			return;
// 		}
//
// 		update(newActive);
// 	});
//
// 	const update = function(newActive) {
// 		const newActivePos = newActive.dataset.pos;
//
// 		const current = elems.find((elem) => elem.dataset.pos == 0);
// 		const prev = elems.find((elem) => elem.dataset.pos == -1);
// 		const next = elems.find((elem) => elem.dataset.pos == 1);
// 		const first = elems.find((elem) => elem.dataset.pos == -2);
// 		const last = elems.find((elem) => elem.dataset.pos == 2);
//
// 		current.classList.remove('carousel__item_active');
//
// 		[current, prev, next, first, last].forEach(item => {
// 			var itemPos = item.dataset.pos;
//
// 			item.dataset.pos = getPos(itemPos, newActivePos)
// 		});
// 	};
//
// 	const getPos = function (current, active) {
// 		const diff = current - active;
//
// 		if (Math.abs(current - active) > 2) {
// 			return -current
// 		}
//
// 		return diff;
// 	}
//
// }))
