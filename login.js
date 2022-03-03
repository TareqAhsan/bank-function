const btn = document.getElementById("submit-button");
const userName = document.getElementById("userName");
const password = document.getElementById("password");

//
btn?.addEventListener("click", (e) => {
  e.preventDefault();
  if (userName.value === "bank" && password.value === String(1234)) {
    window.location.href = "bank.html";
  }else{
      window.alert('password or user name didnot match')
  }
});
