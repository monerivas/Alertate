var formulario = function(){
	$("#enviar").click(agregarComentario);
};

var agregarComentario = function(e){
    e.preventDefault();
    //Obtención de elementos
    var $postContenedor = $("<article />", { "class": "mi-comentario container" });
    var $postTexto = $("<p />");
    var $denuncia = $("#textarea1").val();
    //Personalización de elementos
    $postTexto.text($denuncia);

    // Agregar al DOM
    $postContenedor.append($postTexto);
    // Agregar a un elemento existente para visualizarlo
    $("#aqui-comentarios").append($postContenedor);

    // Borrar contenido de textarea
    $("#textarea1").val("");
};

$(document).ready(formulario);
