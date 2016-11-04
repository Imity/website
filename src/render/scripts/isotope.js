var $container = $('#isotope-items');

$(window).load(function(){
  $container.isotope({
	itemSelector : '.item',
	animationOptions: {
	 duration: 750,
	 easing: 'linear',
	 queue: false
	}
  });
});

/* Filter function */
$('#filters').on( 'click', 'a', function() {
  var filterValue = $(this).attr('data-filter');
  $container.isotope({ filter: filterValue });
});

$(window).load(function(){
	$("#filters a").click(function() {
	    $('a').removeClass('active');
	    $(this).addClass("active");
	});
});