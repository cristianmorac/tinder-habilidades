const form = document.querySelector("#userForm");

const container = document.querySelector('.card');

async function postData(formData) {
    const body = {
      name: formData.get("skill"),
    };
    console.log(body);
    let data = await fetch(`http://localhost:4000/api/skill/`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let [dataUser] = await data.json();
    for (let user of dataUser.users) {
      let card = document.createElement('div')
      card.className = 'container-card'
      card.innerHTML += `
        <div class="shape">
        <div class="image">
        </div>
    </div>
    <h3>${user.full_name}</h3>
    <h4 class="title">${formData.get("skill")}</h4>
    <p>
        ${user.phone}
        <br>
        ${user.email}
        <br>
        ${user.address}
    </p>
    <div class="icons">
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-pinterest"></i>
        <i class="fa-brands fa-twitter"></i>
    </div> 
        `
    container.appendChild(card)
    }
  }


form.addEventListener("submit", (event) => {
    event.preventDefault();
    // aapuntar al mismo formulario
    const formData = new FormData(event.currentTarget);
    postData(formData);
    container.innerHTML = ''
  });