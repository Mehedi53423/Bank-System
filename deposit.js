document.getElementById("depositBtn").addEventListener("click", function () {
  const depositField = document.getElementById("depositInput");
  const depositTotal = document.getElementById("totalDeposit");
  const balance = document.getElementById("balance");

  const depositAmount = depositField.value;

  depositTotal.innerText =
    parseFloat(depositTotal.innerText) + parseFloat(depositAmount);

  depositField.value = "";

  balance.innerText = parseFloat(balance.innerText) + parseFloat(depositAmount);
});
