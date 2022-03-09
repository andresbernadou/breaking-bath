function handleLocalStorage() {
  var Color = localStorage.getItem("color");
  var shape = localStorage.getItem("shape");
  document
    .querySelector(".shapepreview img")
    .setAttribute("src", `images/` + shape + `.svg`);
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
}
handleLocalStorage();
handleLocalStorage2();
