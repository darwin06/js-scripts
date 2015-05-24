$(document).ready(function(){
	$("p").html(function(reemplaza) {
		return reemplaza.replace('Hola', '<strong>Mi</strong>');
	});
});