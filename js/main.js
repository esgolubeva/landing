//accordion

$(document).ready(function() {
	
	$('.team-item__trigger').on('click', function(e) {
		e.preventDefault();

			var
				$this = $(this),
				container = $this.closest('.team-list'),
				item = $this.closest('.team-item'),
				items = container.find('.team-item'),
				content = item.find('.team-item__content'),
				otherContent = container.find('.team-item__content');


			if (!item.hasClass('team-item_active')) {
				otherContent.slideUp();
				items.removeClass('team-item_active');
				item.addClass('team-item_active');
				content.slideDown();

			} else {

				content.slideUp();
				item.removeClass('team-item_active');
			}
	})

});

//horizontal accordion

$(document).ready(function() {
	
	$('.menu__item-trigger').on('click', function(e) {
		e.preventDefault();

			var
				$this = $(this),
				container = $this.closest('.menu__list'),
				item = $this.closest('.menu__item'),
				items = container.find('.menu__item'),
				activeItem = items.filter('.menu__item_active'),
				content = item.find('.menu__item-content'),
				activeContent = activeItem.find('.menu__item-content'),
				otherContent = container.find('.menu__item-content');;


			if (!item.hasClass('menu__item_active')) {

				activeContent.animate( { width: "0" } , 500);
				items.removeClass('menu__item_active');
				
				content.animate( { width: "550px" } , 500);
				item.addClass('menu__item_active');
				
			} else {
				content.animate( { width: "0" } , 500);
				item.removeClass('menu__item_active');
			}
	});

	$(document).on('click', function(e) {

			var $this = $(e.target);

			if (!$this.closest('.menu__list').length) {
				$('.menu__item-content').animate( { width: "0" } , 500);
				$('.menu__item').removeClass('menu__item_active');
			} 
	});

});


//slider
$(document).ready(function() {

	var moveSlide = function (container, slideNum) {
		var
			items = container.find('.slider__item'),
			activeItem = items.filter('.active'),
			reqItem = items.eq(slideNum),
			reqIndex = reqItem.index(),
			list = container.find('.slider__list');

		if (reqItem.length) {
			list.stop(true, true).animate({
				'left' : -reqIndex * 100 + '%'
			}, 700, function () {
				activeItem.removeClass('active');
				reqItem.addClass('active');
			})
		}

	}

	$('.slider__btn').on('click',function(e) {
		e.preventDefault();

		var
			$this = $(this),
			container = $this.closest('.slider'),
			items = container.find('.slider__item'),
			activeItem = items.filter('.active'),
			nextItem = activeItem.next(),
			prevItem = activeItem.prev();

		if ($this.hasClass('slider__btn-next')){ 
			if (nextItem.length) {
				moveSlide(container, nextItem.index());
			} else {
				moveSlide(container, 0);
			}
		} else { // листаем назад
			if (prevItem.length) {
				moveSlide(container, prevItem.index());
			} else {
				moveSlide(container, items.length - 1); 
			}
		
		}
	});
});

// one page scroll

$(document).ready(function () {

	var sections = $('.section'),
		display = $('.maincontent'),
		inScroll = false; //обозначает находится ли секция в состоянии скролла

	var scrollToSection = function (sectionEq) {
		var position = 0;

		if(!inScroll) {

			inScroll = true;

			position = (sections.eq(sectionEq).index() * -100) + '%';

			sections.eq(sectionEq).addClass('active').siblings().removeClass('active');

			display.css({
				'transform' : 'translate3D(0, '+ position +', 0)'
			});

			setTimeout(function () {
				inScroll = false;

				$('.dots-item').eq(sectionEq).addClass('active').siblings().removeClass('active');
			}, 1300)
		}
	}

	$('.wrapper').on('wheel', function (e){

		var deltaY = e.originalEvent.deltaY,
			activeSection = sections.filter('.active'),
			nextSection = activeSection.next(),
			prevSection = activeSection.prev();

		
		if (deltaY > 0) { // к следующей секции
			if (nextSection.length) {
				scrollToSection(nextSection.index());
			}
		}

		if (deltaY < 0) { // к предыдущей секции
			if (prevSection.length) {
				scrollToSection(prevSection.index());
			}
		}

	});


	$('.dots-item__link, .nav__link').on('click', function(e){ // клик на точки и элементы меню
		e.preventDefault();

		var href = parseInt($(this).attr('href'));

		scrollToSection(href);
	});

	$('.arrow-scroll').on('click', function(e){ // клик на стрелку
		e.preventDefault();

		scrollToSection(1);
	});

	$('.burger-button').on('click', function(e){ // клик на кнопку заказать
		e.preventDefault();

		scrollToSection(6);
	});

	$(document).on('keydown', function (e) { //на клавиши клавиатуры
		var deltaY = e.originalEvent.deltaY,
			activeSection = sections.filter('.active'),
			nextSection = activeSection.next(),
			prevSection = activeSection.prev();

		switch (e.keyCode) {
			case 40 : //стрелка вниз
				if (nextSection.length) {
					scrollToSection(nextSection.index());
				}
				break;

			case 38 : //стрелка вверх
				if (prevSection.length) {
				scrollToSection(prevSection.index());
			}
			break;
		}

	})

});



// input mask 

$(document).ready(function () {

	$('.input-mask').inputmask('+7 (999) 999 99 99');

});


// Подключение yandex карты


ymaps.ready(function () {

	var myMap = new ymaps.Map('map', {
        center: [59.9182,30.3056], // Санкт-Петербург
        zoom: 11,
        controls : []
    }, {
        searchControlProvider: 'yandex#search'
    }),

	myPlacemark1 = new ymaps.Placemark([59.8774,30.2644], {
        hintContent: 'MrBurger',
        balloonContent: 'Это красивая метка'
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/content/map-icon.png',
        iconImageSize: [30, 42],
        iconImageOffset: [-3, -42]
    }),

    myPlacemark2 = new ymaps.Placemark([59.9143,30.3907], {
        hintContent: 'MrBurger',
        balloonContent: 'Это красивая метка'
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/content/map-icon.png',
        iconImageSize: [30, 42],
        iconImageOffset: [-3, -42]
    }),
    
    myPlacemark3 = new ymaps.Placemark([59.9467,30.2472], {
        hintContent: 'MrBurger',
        balloonContent: 'Это красивая метка'
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/content/map-icon.png',
        iconImageSize: [30, 42],
        iconImageOffset: [-3, -42]
    }),

    myPlacemark4 = new ymaps.Placemark([59.9674,30.4209], {
        hintContent: 'MrBurger',
        balloonContent: 'Это красивая метка'
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/content/map-icon.png',
        iconImageSize: [30, 42],
        iconImageOffset: [-3, -42]
    });
	 myMap.geoObjects.add(myPlacemark1).add(myPlacemark2).add(myPlacemark3).add(myPlacemark4);
	 myMap.behaviors.disable('scrollZoom');
});


// fancybox

$('a.modal').on('click', function(e) {
	e.preventDefault();
	$.fancybox($('#popup'));
});

$('#popup__close').on('click', function(e){ 
	e.preventDefault();
	$.fancybox.close();
});


// send form

$(document).on('click', '[type="submit"]', function(event) {
    event.preventDefault();

    var name = $('form input[id="name"]').val();

    sendMail(name);
})

function sendMail(name) {
    $.ajax({
    	type: "POST",
    	url: "/",
    	data: "name="+name,
        success: function(data){
        	console.log(data);
            if (data == "ok") {
                $.fancybox( 'Письмо успешно отправлено! <br><br> <img width="100" src="http://www.viralchart.ru/Images1/Images/Awesome/3.jpg" alt="">' );
            } else {
                alert("Все Плохо");
            }
        }
    })
}
