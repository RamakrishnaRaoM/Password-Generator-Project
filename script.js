// script.js
function generate() {
  let dictionary = "";
  if (document.getElementById("lowercaseCb").checked) {
    dictionary += "qwertyuiopasdfghjklzxcvbnm";
  }
  if (document.getElementById("uppercaseCb").checked) {
    dictionary += "QWERTYUIOPASDFGHJKLZXCVBNM";
  }
  if (document.getElementById("digitsCb").checked) {
    dictionary += "1234567890";
  }
  if (document.getElementById("specialsCb").checked) {
    dictionary += "!@#$%^&*()_+-={}[];<>:";
  }
  const length = document.querySelector('input[type="number"]').value;

  if (length < 1 || dictionary.length === 0) {
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const pos = Math.floor(Math.random() * dictionary.length);
    password += dictionary[pos];
  }

  document.querySelector('input[type="text"]').value = password;
}

document.querySelector(".inp").addEventListener("input", (e) => {
  document.querySelector(".inp").innerHTML = e.target.value;
  generate();
});

document.querySelector(".genarate").addEventListener("click", generate);
const clipboardEl = document.getElementById("clipboard");

clipboard.addEventListener("click", () => {
  navigator.clipboard.writeText(
    document.querySelector('input[type="text"]').value
  );
});
