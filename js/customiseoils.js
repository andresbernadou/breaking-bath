document.querySelector(".base").addEventListener("click", showOil);
document.querySelector(".middle").addEventListener("click", showOil2);
document.querySelector(".top").addEventListener("click", showOil3);
document.querySelector("#rightArrow").addEventListener("click", nextOil);
document.querySelector("#rightArrow3").addEventListener("click", nextOil2);
document.querySelector("#rightArrow4").addEventListener("click", nextOil3);
document.querySelector("#rightArrow6").addEventListener("click", nextOil4);
document.querySelector("#rightArrow7").addEventListener("click", nextOil5);
document.querySelector("#leftArrow2").addEventListener("click", beforeOil);
document.querySelector("#leftArrow4").addEventListener("click", beforeOil2);
document.querySelector("#leftArrow5").addEventListener("click", beforeOil3);
document.querySelector("#leftArrow6").addEventListener("click", beforeOil3);
document.querySelector("#leftArrow8").addEventListener("click", beforeOil4);
function showOil() {
  document.querySelector("#popUps").classList.remove("hidden");
  document.querySelector("#popUps").classList.add("popUps");
  document.querySelector("#popUps2").classList.remove("popUps");
  document.querySelector("#popUps2").classList.add("hidden");
  document.querySelector("#popUps3").classList.remove("popUps");
  document.querySelector("#popUps3").classList.add("hidden");
  document.querySelector("#popUps4").classList.remove("popUps");
  document.querySelector("#popUps4").classList.add("hidden");
  document.querySelector("#popUps5").classList.remove("popUps");
  document.querySelector("#popUps5").classList.add("hidden");
  document.querySelector("#popUps6").classList.add("hidden");
  document.querySelector("#popUps6").classList.remove("popUps");
  document.querySelector("#popUps7").classList.add("hidden");
  document.querySelector("#popUps7").classList.remove("popUps");
  document.querySelector("#popUps8").classList.add("hidden");
  document.querySelector("#popUps8").classList.remove("popUps");
}

function showOil2() {
  document.querySelector("#popUps3").classList.remove("hidden");
  document.querySelector("#popUps3").classList.add("popUps");

  document.querySelector("#popUps").classList.remove("popUps");
  document.querySelector("#popUps").classList.add("hidden");
  document.querySelector("#popUps2").classList.remove("popUps");
  document.querySelector("#popUps2").classList.add("hidden");
  document.querySelector("#popUps4").classList.remove("popUps");
  document.querySelector("#popUps4").classList.add("hidden");
  document.querySelector("#popUps5").classList.remove("popUps");
  document.querySelector("#popUps5").classList.add("hidden");
  document.querySelector("#popUps6").classList.add("hidden");
  document.querySelector("#popUps6").classList.remove("popUps");
  document.querySelector("#popUps7").classList.add("hidden");
  document.querySelector("#popUps7").classList.remove("popUps");
  document.querySelector("#popUps8").classList.add("hidden");
  document.querySelector("#popUps8").classList.remove("popUps");
}

function showOil3() {
  document.querySelector("#popUps6").classList.remove("hidden");
  document.querySelector("#popUps6").classList.add("popUps");
  document.querySelector("#popUps3").classList.add("hidden");
  document.querySelector("#popUps3").classList.remove("popUps");

  document.querySelector("#popUps").classList.remove("popUps");
  document.querySelector("#popUps").classList.add("hidden");
  document.querySelector("#popUps2").classList.remove("popUps");
  document.querySelector("#popUps2").classList.add("hidden");
  document.querySelector("#popUps4").classList.remove("popUps");
  document.querySelector("#popUps4").classList.add("hidden");
  document.querySelector("#popUps5").classList.remove("popUps");
  document.querySelector("#popUps5").classList.add("hidden");
}

function nextOil() {
  document.querySelector("#popUps").classList.add("hidden");
  document.querySelector("#popUps").classList.remove("popUps");
  document.querySelector("#popUps2").classList.remove("hidden");
  document.querySelector("#popUps2").classList.add("popUps");
}

function nextOil2() {
  document.querySelector("#popUps3").classList.add("hidden");
  document.querySelector("#popUps3").classList.remove("popUps");
  document.querySelector("#popUps4").classList.remove("hidden");
  document.querySelector("#popUps4").classList.add("popUps");
}

function nextOil3() {
  document.querySelector("#popUps4").classList.add("hidden");
  document.querySelector("#popUps4").classList.remove("popUps");
  document.querySelector("#popUps5").classList.remove("hidden");
  document.querySelector("#popUps5").classList.add("popUps");
}

function nextOil4() {
  document.querySelector("#popUps6").classList.add("hidden");
  document.querySelector("#popUps6").classList.remove("popUps");
  document.querySelector("#popUps7").classList.remove("hidden");
  document.querySelector("#popUps7").classList.add("popUps");
}

function nextOil5() {
  document.querySelector("#popUps7").classList.add("hidden");
  document.querySelector("#popUps7").classList.remove("popUps");
  document.querySelector("#popUps8").classList.remove("hidden");
  document.querySelector("#popUps8").classList.add("popUps");
}

function beforeOil() {
  document.querySelector("#popUps").classList.remove("hidden");
  document.querySelector("#popUps").classList.add("popUps");
  document.querySelector("#popUps2").classList.add("hidden");
  document.querySelector("#popUps2").classList.remove("popUps");
}

function beforeOil2() {
  document.querySelector("#popUps3").classList.remove("hidden");
  document.querySelector("#popUps3").classList.add("popUps");
  document.querySelector("#popUps4").classList.add("hidden");
  document.querySelector("#popUps4").classList.remove("popUps");
}

function beforeOil3() {
  document.querySelector("#popUps4").classList.remove("hidden");
  document.querySelector("#popUps4").classList.add("popUps");
  document.querySelector("#popUps5").classList.add("hidden");

  document.querySelector("#popUps5").classList.remove("popUps");
}

function beforeOil3() {
  document.querySelector("#popUps6").classList.remove("hidden");
  document.querySelector("#popUps6").classList.add("popUps");
  document.querySelector("#popUps7").classList.add("hidden");

  document.querySelector("#popUps7").classList.remove("popUps");
}

function beforeOil4() {
  document.querySelector("#popUps7").classList.remove("hidden");
  document.querySelector("#popUps7").classList.add("popUps");
  document.querySelector("#popUps8").classList.add("hidden");

  document.querySelector("#popUps8").classList.remove("popUps");
}
