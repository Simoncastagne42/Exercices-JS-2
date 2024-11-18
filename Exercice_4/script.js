const raz = document.querySelector("#RAZ");

raz.addEventListener("click", handleClickOnRAZ);

function handleClickOnRAZ() {
  const selectAll = document.querySelectorAll("#lastname, #firstname, #city");
  selectAll.forEach((selectAll) => {
    selectAll.value = "";
  });
}
