const form = document.querySelector("#userForm");
const btnRegisterUser = document.querySelector('#registerUser')
const btnRegisterCompany = document.querySelector('#registerCompany')
const btnIngresar = document.querySelector('#ingresar')


async function postData(formData) {
  const body = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  let data = await fetch(`http://localhost:4000/api/auth/login`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });
  let { login, msg } = await data.json();
  // 
  if (login) {
    location.href = "perfil.html";
    localStorage.setItem("id", msg);
}
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  // aapuntar al mismo formulario
  const formData = new FormData(event.currentTarget);
  postData(formData);
});


btnRegisterUser.addEventListener('click', ()=> {
  location.href='registro.html'
});

btnRegisterCompany.addEventListener('click', ()=> {
  location.href='registroCompany.html'
});



