document.getElementById("withdrawBtn").addEventListener("click", function () {
  const withdrawField = document.getElementById("withdrawInput");
  const withdrawTotal = document.getElementById("totalWithdraw");
  const balance = document.getElementById("balance");

  const withdrawAmount = withdrawField.value;

  withdrawTotal.innerText =
    parseFloat(withdrawTotal.innerText) + parseFloat(withdrawAmount);

  withdrawField.value = "";

  balance.innerText =
    parseFloat(balance.innerText) - parseFloat(withdrawAmount);
});
