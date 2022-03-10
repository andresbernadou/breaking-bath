const url = "https://customiseme-eeda.restdb.io/rest/Customise-Me";
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

    handleProductList(data);
    console.log(data);
  })
  .catch((e) => {
    //woops, something went wrong
    console.error("An error occured:", e.message);
  });

function handleProductList(data) {
  console.log(data);
  //   console.log(shortcut._id);
  data.forEach(showProduct);
}

function showProduct(product) {
  console.log(product);

  //grab template

  const template = document.querySelector("#productTemplate").content;

  //clone it

  const copy = template.cloneNode(true);

  //change content
  let id = product._id;
  copy.querySelector(".productCard h2").textContent = product.Title;
  copy.querySelector(".productCard img").setAttribute("src", product.Media_url);
  copy
    .querySelector(".productCard img")
    .setAttribute("alt", product.Title + "image");
  copy
    .querySelector(".productCard a")
    .setAttribute("href", `singleproduct.html?id=` + id);
  //   copy
  //     .querySelector(" .shortcutCard a")
  //     .setAttribute("href", `shortcut.html?id=` + id);
  //   software.windows_shortcut.forEach((key) => {
  //     copy.querySelector(
  //       ".shortcutWindows"
  //     ).innerHTML += `<span class="key">${key}</span> <p>+</p>`;
  //   });
  //   software.mac_shortcut.forEach((key) => {
  //     copy.querySelector(
  //       ".shortcutMac"
  //     ).innerHTML += `<span class="key">${key}</span> <p>+</p>`;
  //   });

  const parent = document.querySelector("main article");

  parent.appendChild(copy);
}

function handleButtonClick() {
  var shopMessage = "Your item was added to the basket";
  alert(shopMessage);
}
