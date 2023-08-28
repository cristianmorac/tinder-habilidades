const form = document.querySelector("#userForm");
const btnRegisterUser = document.querySelector("#registerUser");
const btnRegisterCompany = document.querySelector("#registerCompany");
const btnIngresar = document.querySelector("#ingresar");

async function postData(formData) {
  const body = {
    email: formData.get("email"),
    password: formData.get("password"),
    usuario: formData.get("usuario"),
  };
  let data = await fetch(`http://localhost:4000/api/auth/login`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });
  let { login, msg, usuario } = await data.json();
  if (login) {
    if (usuario === "user") {
      location.href = "/public/html/perfil.html";
      localStorage.setItem("id", msg);
    } else {
      location.href = "/public/html/perfilCompany.html";
      localStorage.setItem("id", msg);
    }
  }
}
form.addEventListener("submit", (event) => {
  event.preventDefault();
  // aapuntar al mismo formulario
  const formData = new FormData(event.currentTarget);
  postData(formData);
});


