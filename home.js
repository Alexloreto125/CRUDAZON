// ! solo in modifica
//const hideColumn = function (context) {
//   let rightColToDelete = context.closest(".col-md-4");
//   rightColToDelete.remove();

{
  /* <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                    onclick="hideColumn(this)"
                    >
                    Hide
                    </button> */
}
// };
const fillImageInModal = function (context) {
  let imgIntoModal = document.querySelector(".modal img");
  imgIntoModal.src =
    context.parentElement.parentElement.parentElement.parentElement.querySelector(
      "img"
    ).src;
};

const generateCards = function (arrayOfBlackpink) {
  arrayOfBlackpink.forEach((cards) => {
    const newCol = document.createElement("div");
    newCol.classList.add("col", "col-12", "col-md-4", "col-lg-3");
    newCol.innerHTML = `
<div class="card h-100" 
<img src="{cards.imageUrl}" alt="img" >

<div class="card-body d-flex flex-column">
<h5 class="card-title">${cards.name}</h5>
                <p class="card-text flex-grow-1">${cards.description}</p>
                <p class="card-text">${cards.price} €</p>
                <div class="btn-group">
                    <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        onclick="fillImageInModal(this)"
                    >
                        View
                    </button>
                    
                </div>
                <a href="#" class="btn btn-primary"><i class="bi bi-cart-check me-2"></i>€</a>
                  <a href="./details.html?concertId=" class="btn btn-success mt-2"><i class="bi bi-caret-right"></i></i>
                   VAI AI DETTAGLI 
                  </a>
              </div>
          </div>`;
    const eventsRow = document.getElementById("evento-row");
    eventsRow.appendChild(newCol);
  });
};
const getMyShop = function () {
  const myUrl = "https://striveschool-api.herokuapp.com/api/product/";
  fetch(myUrl, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFhMmYxMzE4N2U1YzAwMTgxNGM1ZjMiLCJpYXQiOjE3MDU2NTE5ODcsImV4cCI6MTcwNjg2MTU4N30.q8BzLweUzNsfTojrffFpvHRc23qNDhu0VsrfOHRCits",
    },
  })
    .then((response) => {
      console.log(response);
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Errore chiamata");
      }
    })
    .then((myObject) => {
      console.log("myObject", myObject);
      generateCards(myObject);
    })
    .catch((err) => {
      console.log(err);
    });
};

getMyShop();
