const handleSugestion = (event) => {
  event.preventDefault();

  const name = event.target.elements.name.value;
  const phoneNumber = event.target.elements.phoneNumber.value;
  const email = event.target.elements.email.value;
  const message = event.target.elements.message.value;

  if (name.length === 0 || phoneNumber.length === 0 || email.length === 0 || message.length === 0) {
    Swal.fire(
      'Falha ao enviar sugestão',
      `Todos os campos são necessários!`,
      'error'
    )
  } else {
    Swal.fire(
      'Sugestão enviada!',
      `Obrigado pela sugestão ${name}`,
      'success'
    )

    event.target.elements.name.value = '';
    event.target.elements.phoneNumber.value = '';
    event.target.elements.email.value = '';
    event.target.elements.message.value = '';
  }
}
