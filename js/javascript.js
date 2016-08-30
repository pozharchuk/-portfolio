$(function() {
	$('#toTop').click(function() {
		$('body,html').animate({scrollTop:0},400);
	});
});

$( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 1995,
      max: 2016,
      values: [ 2003, 2015 ],
      stop: function(event, ui){
        jQuery("#slider-range .first").text(jQuery("#slider-range").slider("values",0));
        jQuery("#slider-range .second").text(jQuery("#slider-range").slider("values",1));
    	},
      slide: function(event, ui){
        jQuery("#slider-range .first").text(jQuery("#slider-range").slider("values",0));
        jQuery("#slider-range .second").text(jQuery("#slider-range").slider("values",1));
    	}
    });
    $('#slider-range span:nth-child(2)').append('<span class="first">' + $( "#slider-range" ).slider( "values", 0 ) + '</span>');
    $('#slider-range span:nth-child(3)').append('<span class="second">' + $( "#slider-range" ).slider( "values", 1 ) + '</span>');
});

$('#widget').draggable()


