const pressKey = document.querySelector("#lastname");

pressKey.addEventListener("keyup", handlePressKey);

function handlePressKey(event) {
  alert(event.key);
}
