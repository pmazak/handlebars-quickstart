$(document).ready(function() {
	var htmlTemplate = $("#template").html();
	var compiledTemplate = Handlebars.compile($("#template").html());
	var htmlRendered = compiledTemplate(data);
	$("#template").html(htmlRendered);
});