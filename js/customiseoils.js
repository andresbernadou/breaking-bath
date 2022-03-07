document.querySelector(".base").addEventListener("click", showOil);
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
document.querySelector(".middle").addEventListener("click", showOil2);
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
document.querySelector(".top").addEventListener("click", showOil3);
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
document.querySelector("#rightArrow").addEventListener("click", nextOil);
function nextOil() {
  document.querySelector("#popUps").classList.add("hidden");
  document.querySelector("#popUps").classList.remove("popUps");
  document.querySelector("#popUps2").classList.remove("hidden");
  document.querySelector("#popUps2").classList.add("popUps");
}
document.querySelector("#rightArrow3").addEventListener("click", nextOil2);
function nextOil2() {
  document.querySelector("#popUps3").classList.add("hidden");
  document.querySelector("#popUps3").classList.remove("popUps");
  document.querySelector("#popUps4").classList.remove("hidden");
  document.querySelector("#popUps4").classList.add("popUps");

  document.querySelector("#rightArrow4").addEventListener("click", nextOil3);
  function nextOil3() {
    document.querySelector("#popUps4").classList.add("hidden");
    document.querySelector("#popUps4").classList.remove("popUps");
    document.querySelector("#popUps5").classList.remove("hidden");
    document.querySelector("#popUps5").classList.add("popUps");
  }
  document.querySelector("#rightArrow6").addEventListener("click", nextOil4);
  function nextOil4() {
    document.querySelector("#popUps6").classList.add("hidden");
    document.querySelector("#popUps6").classList.remove("popUps");
    document.querySelector("#popUps7").classList.remove("hidden");
    document.querySelector("#popUps7").classList.add("popUps");
  }
  document.querySelector("#rightArrow7").addEventListener("click", nextOil5);
  function nextOil5() {
    document.querySelector("#popUps7").classList.add("hidden");
    document.querySelector("#popUps7").classList.remove("popUps");
    document.querySelector("#popUps8").classList.remove("hidden");
    document.querySelector("#popUps8").classList.add("popUps");
  }
}

document.querySelector("#leftArrow2").addEventListener("click", beforeOil);
function beforeOil() {
  document.querySelector("#popUps").classList.remove("hidden");
  document.querySelector("#popUps").classList.add("popUps");
  document.querySelector("#popUps2").classList.add("hidden");
  document.querySelector("#popUps2").classList.remove("popUps");
}
document.querySelector("#leftArrow4").addEventListener("click", beforeOil2);
function beforeOil2() {
  document.querySelector("#popUps3").classList.remove("hidden");
  document.querySelector("#popUps3").classList.add("popUps");
  document.querySelector("#popUps4").classList.add("hidden");
  document.querySelector("#popUps4").classList.remove("popUps");
}
document.querySelector("#leftArrow5").addEventListener("click", beforeOil3);
function beforeOil3() {
  document.querySelector("#popUps4").classList.remove("hidden");
  document.querySelector("#popUps4").classList.add("popUps");
  document.querySelector("#popUps5").classList.add("hidden");

  document.querySelector("#popUps5").classList.remove("popUps");
}
document.querySelector("#leftArrow7").addEventListener("click", beforeOil3);
function beforeOil3() {
  document.querySelector("#popUps6").classList.remove("hidden");
  document.querySelector("#popUps6").classList.add("popUps");
  document.querySelector("#popUps7").classList.add("hidden");

  document.querySelector("#popUps7").classList.remove("popUps");
}
document.querySelector("#leftArrow8").addEventListener("click", beforeOil4);
function beforeOil4() {
  document.querySelector("#popUps7").classList.remove("hidden");
  document.querySelector("#popUps7").classList.add("popUps");
  document.querySelector("#popUps8").classList.add("hidden");

  document.querySelector("#popUps8").classList.remove("popUps");
}
