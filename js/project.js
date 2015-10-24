require(['template', 'modules/browser', 'bootstrap'], function (template, browser) {
	// header
	$("#header").html(template('header', browser));
	//footer
	$("#footer").html(template('footer'));

	$("#page").html(template('project', browser));
});