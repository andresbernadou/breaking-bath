const urlParams = new URLSearchParams(window.location.search);
// const query = urlParams.get("q");
const id = urlParams.get("id");
const url = "https://customiseme-eeda.restdb.io/rest/Customise-Me/" + id;
// api-key :

const options = {
  headers: { "x-apikey": "6229e379dced170e8c83a0e6" },
};
fetch(url, options)
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    //we have the data

    handleProduct(data);
    console.log(data);
  })
  .catch((e) => {
    //woops, something went wrong
    console.error("An error occured:", e.message);
  });
function handleProduct(product) {
  console.log(product);
  document.querySelector("h2").textContent = product.Title;
  document.querySelector(".ingredients").textContent = product.Ingredients;
  document.querySelector(".weight").textContent = "weight: " + product.Weight;
  document.querySelector(".availabity").textContent =
    "Availabity: " + product.Availability;
  document
    .querySelector(".productimage")
    .setAttribute("src", product.Media_url);
}
function handleButtonClick() {
  var shopMessage = "Your item was added to the basket";
  alert(shopMessage);
}
