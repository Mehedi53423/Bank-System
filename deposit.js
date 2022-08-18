document.getElementById("depositBtn").addEventListener("click", function () {
  const depositField = document.getElementById("depositInput").value;
  const depositTotal = document.getElementById("totalDeposit");
  depositTotal.innerText = depositField;
});
