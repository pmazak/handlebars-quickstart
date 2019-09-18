$(document).ready(function() {
	var htmlTemplate = $("#template").html();
	var htmlRendered = Handlebars.compile(htmlTemplate);
	$("#template").html(htmlRendered(data));
});