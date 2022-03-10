function onlyOneCheckBox() {
  var checkboxgroup = document
    .getElementById("checkboxgroup")
    .getElementsByTagName("input");

  //Note #2 Change max limit here as necessary
  var limit = 2;

  for (var i = 0; i < checkboxgroup.length; i++) {
    checkboxgroup[i].onclick = function () {
      var checkedcount = 0;
      for (var i = 0; i < checkboxgroup.length; i++) {
        checkedcount += checkboxgroup[i].checked ? 1 : 0;
      }
      if (checkedcount > limit) {
        console.log("You can select maximum of " + limit + " checkbox.");
        alert("You can select maximum of " + limit + " checkbox.");
        this.checked = false;
      }
    };
  }
}
onlyOneCheckBox();

function handleShowAllCheckboxes() {
  const favorites = JSON.parse(localStorage.getItem("favorites"));
  alert(JSON.stringify(favorites));
}

function handleMultipleCheckboxes() {
  // Selecciono todos los checkbox por class="check"
  const allCheckboxes = document.querySelectorAll(".pickcolor");
  const selectedCheckboxes = [];
  allCheckboxes.forEach((singleCheckbox) => {
    if (singleCheckbox.checked) {
      const importantCheckboxInfo = {
        value: singleCheckbox.value,
      };
      selectedCheckboxes.push(importantCheckboxInfo);
    }
  });

  // A este punto selectedCheckboxes contiene solo los que estan  checked
  // Me los guardo en formato JSON en local storage
  localStorage.setItem("colors", JSON.stringify(selectedCheckboxes));
}
