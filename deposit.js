document.getElementById("depositBtn").addEventListener("click", function () {
  const depositField = document.getElementById("depositInput");
  const depositTotal = document.getElementById("totalDeposit");
  const balance = document.getElementById("balance");

  const depositAmount = depositField.value;

  console.log(depositAmount);

  if (isNaN(depositAmount)) {
    alert("Please, Enter Amount In Number");
  } else if (depositAmount === "") {
    alert("Please, Enter The Amount");
  } else if (depositAmount < 0) {
    alert("Please, Enter A Positive Number");
  } else {
    depositTotal.innerText =
      parseFloat(depositTotal.innerText) + parseFloat(depositAmount);

    balance.innerText =
      parseFloat(balance.innerText) + parseFloat(depositAmount);
  }

  depositField.value = "";
});
