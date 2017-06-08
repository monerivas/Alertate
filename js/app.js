console.log("js ligado");
// Inicia funcionalidad MENU
function avisoAlerta() {
  var config_alerta = $("#config_alerta").click(function () {
    alert("Las alertas se han configurado exitosamente");
  });
}

function acercaDe() {
  var info = $("#acerca_de").click(function () {
    alert("Versión 0.1.0  ©superNovas 2017");
  });
}
// Termina funcionalidad MENU
function verModal() {
  $(".modal").modal();
}

// Función PRINCIPAL
function funcionPrincipal() {
  verModal();
  avisoAlerta();
  acercaDe();
}
// Termina función PRINCIPAL
/*---INICIO MODAL----*/
$(document).ready(funcionPrincipal);
/*---FIN MODAL----*/
