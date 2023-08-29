
const form = document.getElementById("form");


const postdata = async (formData) => {
    const body = {
        archivo: formData.get('archivo')
      };
        
      let data = await fetch(
        `http://localhost:4000/api/img/user/6fdcf95d-2b61-4882-95a3-24f6c6925c87`,
        {
          method: "POST",
          body: JSON.stringify(body),
          headers: {
            "Content-Type": "form-data",
          },
        }
      );
}


form.addEventListener("click", (event) => {
  event.preventDefault();
  // aapuntar al mismo formulario
  const formData = new FormData(event.currentTarget);
  postdata(formData)
});
