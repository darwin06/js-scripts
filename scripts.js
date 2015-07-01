//Reemplazar textos dentro de un tag
$(document).ready(function(){
	$("p").html(function(buscar,reemplaza) {
		return reemplaza.replace('Hola', '<strong>Mi</strong>');
	});
});

//Array
var words = $('.location_28 div[itemprop="streetAddress"').text().split(" "); console.log(words);

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
