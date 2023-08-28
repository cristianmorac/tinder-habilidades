const form = document.querySelector("#userForm");
const btnInicio = document.querySelector('#inicio');

async function postData(formData) {
  const body = {
    user: {
      full_name: formData.get("full_name"),
      password: formData.get("password"),
      address: formData.get("address"),
      phone: formData.get("phone"),
      email: formData.get("email"),
    },
    skills: {
      Skill1: {
        name: formData.get("skill1"),
      },
      Skill2: {
        name: formData.get("skill2"),
      },
      Skill3: {
        name: formData.get("skill3"),
      },
    },
  };
  let data = await fetch(`http://localhost:4000/api/user/create/`, {
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
  location.href = 'perfil.html'
  localStorage.setItem("idUser", msg);
});

btnInicio.addEventListener('click', ()=> {
  location.href = 'index.html'
})



