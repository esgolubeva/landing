//accordion

$(document).ready(function() {
	
	$('.team-item__trigger').on('click', function(e) {
		e.preventDefault();

			var
				$this = $(this),
				container = $this.closest('.team-list'),
				item = $this.closest('.team-item'),
				items = container.find('.team-item');

				console.log($this);
				console.log(container);
				console.log(item);
				console.log(items);

			if(!item.hasClass('team-item_active')) {
				items.removeClass('team-item_active');
				item.addClass('team-item_active');
			} else {
				item.removeClass('team-item_active');
			}
	})

});

