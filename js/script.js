$(function(){

	var span = $('span');
	$(span).each(function(index, element){

		if (index % 2 == 0) {

			$(element).css('color', 'red');
		};

		// mozna tez prosciej, zamiast ifa : $("span:even").css('color', 'red');
	});

	var  pgraphs = $('p');

	pgraphs.each(function(index, element){

		var button = '<button class="btn" data-tmp="'+ index +'"> Click me! </button>';
		$(element).append(button);
	});

	$('button').css({
		'display': 'block',
		'margin-top': '8px',
		'padding': '5px'}).click(function(){

			alert($(this).attr('data-tmp'));
		});
});