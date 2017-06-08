var formulario = function(){
	$("#comentarios").submit(agregarTweet);
  $("#textarea1").keyup(validarTexto);

};

var agregarTweet = function(e){
    e.preventDefault();

    //Obtención de elementos
    var $postContenedor = $("<section />", { "id": "aqui-comentarios" });
    var $postTexto = $("<p />");

    //Personalización de elementos
    $postTexto.text($("#textarea1").val());

    // Agregar al DOM
    $postContenedor.append($postTexto);
    // Agregar a un elemento existente para visualizarlo
    $("#aqui-comentarios").append($postContenedor);
    // Borrar contenido de textarea
    $("#textarea1").val("");
    validarTexto();
};

var validarTexto = function(){
    var $caracteres = conteoCaracteres();
    colores(Number($caracteres));
    	if($caracteres < 140 && $caracteres > -1){
    		$("#enviar").removeAttr("disabled");
    	} else {
    		$("#enviar").attr("disabled", true);
    	}
};

$(document).ready(formulario);
