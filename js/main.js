$(document).ready(function ($) {
});

$(window).on('load', function () {
	loadFunc();
});

function loadFunc() {
	cardAnim();
}

let cardAnim = () => {
	const card = $('.card');
	const cardTitle = $('.card_title');
	const cardWNumber = $('.card_w_number');
	const cardWImg = $('.card_w_img');
	const cardBg = $('.card_bg');

	let cardOffsetLeft = card.offset().left;
	let cardOffsetTop = card.offset().top;

	const coords = {
		width: cardBg.width(),
		height: cardBg.height(),
		x: 0,
		y: 0,
		walk: 50
	};

	cardBg.mouseover((e) => {
		TweenMax.to(cardBg, .4, {scale: 1.1});
	});

	cardBg.mousemove((e) => {
		coords.x = (e.pageX - cardOffsetLeft) < 0 ? 0 : Math.round(e.pageX - cardOffsetLeft);
		coords.y = (e.pageY - cardOffsetTop) < 0 ? 0 : Math.round(e.pageY - cardOffsetTop);

		let xWalk = Math.round((coords.x / coords.width * coords.walk) - (coords.walk / 2));
		let yWalk = Math.round((coords.y / coords.height * coords.walk) - (coords.walk / 2));

		TweenMax.to(cardWImg, 1, {x: xWalk, y: yWalk});
		TweenMax.to(cardWNumber, 1, {x: xWalk / 2, y: yWalk / 2});
		TweenMax.to(cardTitle, 1, {x: (xWalk /2) * -1, y: (yWalk / 2) * -1});
	});

	cardBg.mouseout((e) => {
		TweenMax.to(cardBg, .6, {scale: 1});
		TweenMax.to([cardWImg, cardWNumber, cardTitle], .6, {x: 0, y: 0});
	});

};