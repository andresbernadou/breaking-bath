function handleLocalStorage() {
  var Color = localStorage.getItem("color");
  var shape = localStorage.getItem("shape");
  var message = localStorage.getItem("Message");
  document
    .querySelector(".shapepreview img")
    .setAttribute("src", `images/` + shape + `.svg`);
  document.querySelector(".messagetext").textContent = message;
}
function handleOnChangeOil(oil) {
  console.log(oil);
  localStorage.setItem("baseoil", oil);
  handleLocalStorage2();
}
function handleOnChangeOil2(oil2) {
  console.log(oil2);
  localStorage.setItem("heartoil", oil2);
  handleLocalStorage2();
}
function handleOnChangeOil3(oil3) {
  console.log(oil3);
  localStorage.setItem("topoil", oil3);
  handleLocalStorage2();
}
function handleLocalStorage2() {
  var heartNote = localStorage.getItem("heartoil");
  var topNote = localStorage.getItem("topoil");
  var baseNote = localStorage.getItem("baseoil");

  document.querySelector(".baseoil").textContent = baseNote;
  document.querySelector(".heartoil").textContent = heartNote;
  document.querySelector(".topoil").textContent = topNote;
  const colorsarray = JSON.parse(localStorage.getItem("colors"));

  let color1 = colorsarray[0].value;
  let color2 = colorsarray[1].value;
  // console.log(color2);
  // console.log(color1);
  let result1 = color1.replace(/ /g, "");
  let result2 = color2.replace(/ /g, "");
  document
    .querySelector(".color1")
    .setAttribute("src", `images/product/` + result1 + `.svg`);
  document
    .querySelector(".color2")
    .setAttribute("src", `images/product/` + result2 + `.svg`);

  //   (function showColor(color) {
  //     console.log(color);
  //   });
}
function handleButtonClick() {
  var shopMessage = "Your item was added to the basket";
  alert(shopMessage);
}
handleLocalStorage();
handleLocalStorage2();
