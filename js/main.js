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