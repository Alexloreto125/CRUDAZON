const form = document.getElementById("shop-form");
const myUrl = "https://striveschool-api.herokuapp.com/api/product/";

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const nameInput = document.getElementById("name").value;
  const descriptionInput = document.getElementById("description").value;
  const brandInput = document.getElementById("brand").value;
  const imageInput = document.getElementById("image-input").value;
  const priceInput = parseFloat(document.getElementById("price").value);

  const nuovoProdotto = {
    name: nameInput,
    description: descriptionInput,
    brand: brandInput,
    imageUrl: imageInput,
    price: priceInput,
    userId: "ID dell'utente",
  };

  console.log("dati dal form ", nuovoProdotto);
  createProduct(nuovoProdotto);
});

function createProduct(data) {
  fetch("https://striveschool-api.herokuapp.com/api/product/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFhMmYxMzE4N2U1YzAwMTgxNGM1ZjMiLCJpYXQiOjE3MDU2NTE5ODcsImV4cCI6MTcwNjg2MTU4N30.q8BzLweUzNsfTojrffFpvHRc23qNDhu0VsrfOHRCits",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Errore durante la creazione del prodotto");
      }
    })
    .then((data) => {
      console.log("Prodotto creato con successo:", data);
    })
    .catch((error) => {
      console.error("Errore durante la creazione del prodotto:", error);
    });
}
