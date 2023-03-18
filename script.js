const formulario = document.querySelector('form');
const botonEnviar = document.querySelector('#enviar');
formulario.addEventListener('submit', enviarFormulario);
function enviarFormulario(evento) {
  evento.preventDefault();

  const nombre = document.querySelector('#nombre').value;
  const email = document.querySelector('#email').value;
  const mensaje = document.querySelector('#mensaje').value;
}

function cambiarTexto() {
  document.getElementById("miParrafo").innerHTML = "Espero estemos en contacto pronto.";
}
