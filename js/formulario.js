"use strict";
// Funcion para enviar los elementos introducidos del formulario
function enviarFormulario(event) {
    event.preventDefault();
    const nombreInput = document.getElementById('nombre');
    const telefonoInput = document.getElementById('telefono');
    const emailInput = document.getElementById('email');
    const motivoConsultaInput = document.getElementById('motivoConsulta');
    const horarioLlamadaInput = document.getElementById('horarioLlamada');
    const mensajeInput = document.getElementById('mensaje');
    const formData = {
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
