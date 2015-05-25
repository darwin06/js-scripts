$(document).ready(function(){
	$("p").html(function(buscar,reemplaza) {
		return reemplaza.replace('Hola', '<strong>Mi</strong>');
	});
});
