require(['template', 'bootstrap'], function (template) {
	// header
	$("#header").html(template('header'));
	//footer
	$("#footer").html(template('footer'));

	$("#page").html(template('project'));
});