document.getElementById("withdrawBtn").addEventListener("click", function () {
  const withdrawField = document.getElementById("withdrawInput");
  const withdrawTotal = document.getElementById("totalWithdraw");
  const balance = document.getElementById("balance");

  const withdrawAmount = withdrawField.value;

  if (isNaN(withdrawAmount)) {
    alert("Please, Enter Amount In Number");
  } else if (withdrawAmount === "") {
    alert("Please, Enter The Amount");
  } else if (withdrawAmount < 0) {
    alert("Please, Enter A Positive Number");
  } else if (withdrawAmount > parseFloat(balance.innerText)) {
    alert("You Don't Have That Much Taka");
  } else {
    withdrawTotal.innerText =
      parseFloat(withdrawTotal.innerText) + parseFloat(withdrawAmount);

    balance.innerText =
      parseFloat(balance.innerText) - parseFloat(withdrawAmount);
  }

  withdrawField.value = "";
});
