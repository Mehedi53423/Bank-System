document.getElementById("sub-btn").addEventListener("click", function () {
  const emailField = document.getElementById("email").value;
  const passField = document.getElementById("pass").value;

  if (emailField === "mehedi53423@gmail.com" && passField === "12345") {
    window.location.href = "bank.html";
  } else {
    console.log("invalid User");
  }
});
