const form = document.querySelector("#userForm");
const btnInicio = document.querySelector('#inicio');

async function postData(formData) {
  const body = {
    company: {
        name_company: formData.get("name_company"),
      nit: formData.get("nit"),
      password: formData.get("password"),
      address: formData.get("address"),
      phone: formData.get("phone"),
      email: formData.get("email"),
    }
  };
  let data = await fetch(`http://localhost:4000/api/company/create/`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });
  let obj = await data.json();
  console.log(obj);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  // aapuntar al mismo formulario
  const formData = new FormData(event.currentTarget);
  postData(formData);
  location.href = 'perfilCompany.html';
  localStorage.setItem("idCompany", msg);
});

btnInicio.addEventListener('click', ()=> {
  location.href = 'index.html'
})
