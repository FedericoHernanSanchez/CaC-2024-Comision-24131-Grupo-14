// Validación simple para el formulario
function validateForm() {
  const name = document.getElementById("name");
  const location = document.getElementById("location");
  const postalCode = document.getElementById("postalCode");
  const email = document.getElementById("email");
  const reason = document.getElementById("reason");
  const message = document.getElementById("message");

  if (name.value.trim().length < 2 || !/^[a-zA-Z\s]+$/.test(name.value.trim())) {
    alert("Por favor, escribe un nombre válido (solo letras y espacios).");
    name.focus();
    return false;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
    alert("Por favor, escribe un correo electrónico válido");
    email.focus();
    return false;
  }

  if (location.value.trim().length < 2) {
    alert("Por favor, escribe tu localidad");
    location.focus();
    return false;
  }

  if (!/^\d{4}$/.test(postalCode.value.trim())) {
    alert("Por favor, escribe un código postal válido de 4 números");
    postalCode.focus();
    return false;
  }

  if (reason.value.trim() === "") {
    alert("Por favor, selecciona un motivo");
    reason.focus();
    return false;
  }

  if (message.value.trim().length <= 19 || message.value.trim().length > 200) {
    alert("Por favor, escribe un mensaje entre 20 y 200 caracteres.");
    message.focus();
    return false;
  }

  return true;
}
