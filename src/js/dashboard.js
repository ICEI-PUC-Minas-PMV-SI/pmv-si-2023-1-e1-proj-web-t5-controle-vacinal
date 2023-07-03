const loadUserName = () => {
  const loggedUser = JSON.parse(localStorage.getItem('loggedInUser')) || undefined

  if (loggedUser === undefined) {
    window.location.href = "./login.html";
  }

  document.getElementById('user-name').innerText = loggedUser.name
}

const loadUserNameAndRelatives = () => {
  const loggedUser = JSON.parse(localStorage.getItem('loggedInUser')) || undefined

  if (loggedUser === undefined) {
    window.location.href = "./login.html";
  }

  document.getElementById('user-name').innerText = loggedUser.name

  let userSelect = document.getElementById('userSelect');

  let firstOption = document.createElement('option');
  firstOption.value = loggedUser.name;
  firstOption.text = loggedUser.name;

  userSelect.appendChild(firstOption);

  const key = `${loggedUser.email}_relatives`;
  const relatives = JSON.parse(localStorage.getItem(key)) || [];

  for (let user of relatives) {
    let option = document.createElement('option');
    option.value = user.name;
    option.text = user.name;
    userSelect.appendChild(option);
  }
}

const loadUserData = () => {
  const loggedUser = JSON.parse(localStorage.getItem('loggedInUser')) || undefined

  if (loggedUser === undefined) {
    window.location.href = "./login.html";
  }

  document.getElementById('user-name').innerText = loggedUser.name

  const key = `${loggedUser.email}_relatives`;
  const relatives = JSON.parse(localStorage.getItem(key)) || [];

  let tableBody = document.getElementById('tableBody');

  for (let user of relatives) {
    let row = document.createElement('tr');
    row.innerHTML = `
        <td>${user.cpf}</td>
        <td>${user.name}</td>
        <td>${user.sex}</td>
        <td>${user.degree}</td>
      `;

    tableBody.appendChild(row);
  }

  const vacKey = `${loggedUser.email}_vaccines`;
  const vaccines = JSON.parse(localStorage.getItem(vacKey)) || [];

  let vacTable = document.getElementById('vacinasTableBody');

  for (let user of vaccines) {
    let row = document.createElement('tr');
    row.innerHTML = `
        <td>${user.name}</td>
        <td>${user.vaccine}</td>
        <td>${user.where}</td>
        <td>${user.when}</td>
        <td>${user.status}</td>
      `;

    vacTable.appendChild(row);
  }
}

const addRelative = (event) => {
  event.preventDefault();

  const name = event.target.elements.name.value;
  const cpf = event.target.elements.cpf.value;
  const sex = event.target.elements.sex.value;
  const degree = event.target.elements.degree.value;

  if (name.length === 0 || cpf.length === 0 || sex.length === 0 || degree.length === 0) {
    Swal.fire(
      'Falha ao registrar familiar!',
      `Todos os campos são necessários!`,
      'error'
    )
    return;
  }

  const loggedUser = JSON.parse(localStorage.getItem('loggedInUser')) || undefined
  const key = `${loggedUser.email}_relatives`;
  const relatives = JSON.parse(localStorage.getItem(key)) || [];

  const exists = relatives.find(user => user.cpf === cpf);

  if (exists) {
    Swal.fire(
      'Falha ao registrar usuário!',
      `Já existe um usuário com o CPF informado!`,
      'error'
    )
    return;
  }

  relatives.push({
    name: name,
    cpf: cpf,
    sex: sex,
    degree: degree,
  });

  localStorage.setItem(key, JSON.stringify(relatives));

  Swal.fire(
    'Sucesso',
    `Familiar registrado com sucesso!`,
    'success'
  ).then(() => {
    window.location.href = "./dashboard.html";
  })
}

const addVaccine = (event) => {
  event.preventDefault();

  const userSelect = document.getElementById('userSelect');

  const name = userSelect.value;
  const vaccine = event.target.elements.vaccine.value;
  const where = event.target.elements.where.value;
  const when = event.target.elements.when.value;

  if (name.length === 0 || vaccine.length === 0 || where.length === 0 || when.length === 0) {
    Swal.fire(
      'Falha ao registrar solicitação!',
      `Todos os campos são necessários!`,
      'error'
    )
    return;
  }

  const loggedUser = JSON.parse(localStorage.getItem('loggedInUser')) || undefined
  const key = `${loggedUser.email}_vaccines`;
  const vaccines = JSON.parse(localStorage.getItem(key)) || [];

  vaccines.push({
    name: name,
    vaccine: vaccine,
    where: where,
    when: when,
    status: "PENDENTE"
  });

  localStorage.setItem(key, JSON.stringify(vaccines));

  Swal.fire(
    'Sucesso',
    `Solicitação de vacina registrada com sucesso!`,
    'success'
  ).then(() => {
    window.location.href = "./dashboard.html";
  })
}
