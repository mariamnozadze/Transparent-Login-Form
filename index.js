const passField = document.querySelector(".pass-key");
const showBtn = document.querySelector(".show");

showBtn.addEventListener("click", function () {
  if (passField.type === "password") {
    passField.type = "text";
    showBtn.textContent = "HIDE";
    showBtn.style.color = "#19918bf5";
  } else {
    passField.type = "password";
    showBtn.textContent = "SHOW";
    showBtn.style.color = "#222";
  }
});
