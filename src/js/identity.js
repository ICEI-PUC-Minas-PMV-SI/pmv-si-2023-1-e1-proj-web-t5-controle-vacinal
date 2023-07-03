const register = (event) => {
  event.preventDefault();

  const name = event.target.elements.name.value;
  const cpf = event.target.elements.cpf.value;
  const sex = event.target.elements.sex.value;
  const email = event.target.elements.email.value;
  const password = event.target.elements.password.value;

  if (name.length === 0 || cpf.length === 0 || sex.length === 0 || email.length === 0 || password.length === 0) {
    Swal.fire(
      'Falha ao registrar usuário!',
      `Todos os campos são necessários!`,
      'error'
    )
    return;
  }

  const users = JSON.parse(localStorage.getItem('users')) || [];

  const exists = users.find(user => user.email === email);

  if (exists) {
    Swal.fire(
      'Falha ao registrar usuário!',
      `Já existe um usuário com o email informado!`,
      'error'
    )
    return;
  }

  const newUser = {
    name: name,
    cpf: cpf,
    sex: sex,
    email: email,
    password: password
  }

  users.push(newUser);

  localStorage.setItem('users', JSON.stringify(users));
  localStorage.setItem('loggedInUser', JSON.stringify(newUser));

  Swal.fire(
    'Sucesso',
    `Usuário registrado com sucesso!`,
    'success'
  ).then(() => {
    window.location.href = "./dashboard.html";
  })
}

const login = (event) => {
  event.preventDefault();

  const email = event.target.elements.email.value;
  const password = event.target.elements.password.value;

  const users = JSON.parse(localStorage.getItem('users')) || [];
  const user = users.find(user => user.email === email && user.password === password);

  if (user) {
    localStorage.setItem('loggedInUser', JSON.stringify(user));
    window.location.href = "./dashboard.html";
  } else {
    Swal.fire(
      'Falha de autenticação',
      `O email ou senha estão errados!`,
      'error'
    )
  }
}

const logout = () => {
  localStorage.removeItem('loggedInUser');
  window.location.href = "./index.html";
}
