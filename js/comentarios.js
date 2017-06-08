

// $(document).ready(function() {
//    Materialize.updateTextFields();
//  });

// (function () {
// 	var contador = 0;
//
// 	var cargarPagina = function () {
// 		// Envío de To - Do
// 		$("#to-do-form").submit(agregarToDo);
// 		$("#message").keyup(validarContenido);
// 	};
//
// 	var agregarToDo = function (e) {
// 		e.preventDefault();
// 		// Obtenemos datos
// 		var $contenedor = $("#posts");
// 		var $mensajeContenedor = $("#message");
// 		var $botonAgregar = $("#add-button");
// 		var mensaje = $mensajeContenedor.val();
//
// 		var $postContenedor = $("<article />", { "class": "jumbotron" });
// 		var $postCheck = $("<input type='checkbox' />");
// 		var $postTexto = $("<label />");
//
// 		var identificador = "marcador-" + contador;
//
// 		$postCheck.id = identificador;
// 		$postTexto.attr("for", identificador);
// 		$postTexto.text(mensaje);
//
// 		$postCheck.click(eliminarToDo);
//
// 		$postContenedor.append($postCheck);
// 		$postContenedor.append($postTexto);
//
// 		$contenedor.prepend($postContenedor);
//
// 		$mensajeContenedor.val("");
// 		$botonAgregar.attr("disabled", true);
//
// 		contador++;
// 	};
//
// 	// Cuando carga la página
// 	$(document).ready(cargarPagina);
// })();
