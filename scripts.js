$(document).ready(function(){
	$("p").html(function(buscar,reemplaza) {
		return reemplaza.replace('Hola', '<strong>Mi</strong>');
	});
});

//Change background color
function changeColor(){
    if ( $(".slide1").css("display") == "block" ){
        $('.imgwrap').css({'background-color':'red'});
    }else{
        if ( $(".slide2").css("display") == "block" ){
            $('.imgwrap').css({'background-color':'green'});
        }else{
            $('.imgwrap').css({'background-color':'blue'});
        }
    }
}
//Function change background imgwrap
setInterval(changeColor, 5000);
