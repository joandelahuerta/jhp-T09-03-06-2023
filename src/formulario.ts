//Interfaz de formulario
interface ContactFormData {
  nombre: string;
  telefono: string;
  email?: string;
  motivoConsulta?: string;
  horarioLlamada?: string;
  mensaje: string;
}
// Funcion para enviar los elementos introducidos del formulario
function enviarFormulario(event: Event): void {
  event.preventDefault();
  const nombreInput = document.getElementById('nombre') as HTMLInputElement;
  const telefonoInput = document.getElementById('telefono') as HTMLInputElement;
  const emailInput = document.getElementById('email') as HTMLInputElement;
  const motivoConsultaInput = document.getElementById('motivoConsulta') as HTMLInputElement;
  const horarioLlamadaInput = document.getElementById('horarioLlamada') as HTMLInputElement;
  const mensajeInput = document.getElementById('mensaje') as HTMLTextAreaElement;
  const formData: ContactFormData = {
    nombre: nombreInput.value,
    telefono: telefonoInput.value,
    email: emailInput.value,
    motivoConsulta: motivoConsultaInput.value,
    horarioLlamada: horarioLlamadaInput.value,
    mensaje: mensajeInput.value
  };
  // Comprobar requisitos y si no se cumplen enseñar error
  if (!formData.nombre || !formData.telefono || !formData.mensaje) {
    alert('Debes completar los campos requeridos (Nombre, Teléfono y Mensaje).');
    return;
  }
  // Mensaje de enviado con éxito
    alert('¡Formulario de contacto enviado con éxito!');
  // Limpiar los campos
    nombreInput.value = '';
    telefonoInput.value = '';
    emailInput.value = '';
    motivoConsultaInput.value = '';
    horarioLlamadaInput.value = '';
    mensajeInput.value = '';
}