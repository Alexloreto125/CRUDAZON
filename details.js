const myUrl = "https://striveschool-api.herokuapp.com/api/product/";
const API_KEY =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFhMmYxMzE4N2U1YzAwMTgxNGM1ZjMiLCJpYXQiOjE3MDU2NTE5ODcsImV4cCI6MTcwNjg2MTU4N30.q8BzLweUzNsfTojrffFpvHRc23qNDhu0VsrfOHRCits";

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("productID");

const fillDetailsPage = function (details) {
  let colContent = `
        <img src=${details.large} style="width: 100%"/>
        <div class="container" >
                <div class="row mt-2 justify-content-start ">
                <div class="col" >
                 <h1> Name of product:  ${details.name} </h1>
                 <h1> Description of Product: ${details.description} </h1>
                 <h1> Brand:  ${details.brand} </h1>
                 <h1> Price ${details.price} €</h1>
                 <a href="./home.html"  class="btn btn-primary mt-2" >INDIETRO</a>
                 <a href="./backoffice.html" class="btn btn-success mt-2" >MODIFICA</a>
                 </div>
                 <div class="mt-2">
                  
                <div class="row d-flex mt-5">
                <h5>*unrelevant* Creation: ${details.createdAt} </h5>
                <h5>*unrelevant* Update: ${details.updatedAt} </h5>
                 <h5>*unrelevant* UserID: ${details.userId} </h5>
                <h5>*unrelevant* V: ${details.__v} </h5>
                <h5>*unrelevant* _ID: ${details._id} </h5>
  </div>;
  </div>`;

  let colToFill = document.querySelector(".col-12.col-md-8");
  colToFill.innerHTML = colContent;
};

const getSingleImage = function () {
  let photoIdFromAddressBar = new URLSearchParams(window.location.search).get(
    "productId"
  );
  fetch(myUrl + photoIdFromAddressBar, {
    headers: {
      authorization: API_KEY,
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Error getting single image details");
      }
    })
    .then((singleImageDetails) => {
      console.log("SINGLE IMAGE DETAILS", singleImageDetails);
      fillDetailsPage(singleImageDetails);
    })
    .catch((err) => {
      console.log(err);
    });
};

window.onload = function () {
  getSingleImage();
};
