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


// REMOVE CHILDREN ELEMENTS FROM PARENT ELEMENT
var container= document.getElementsByClassName('slick-track')[2];
console.log(container.childNodes.length);
for(var i = 0; i < container.childNodes.length; i++) { 
	console.log(i); 
	container.removeChild(container.childNodes[i]);
}

