const total = document.getElementById("total-val");

const depoBtn = document.getElementById("deposit-btn");
const withdrawBtn = document.getElementById("withdraw-btn");

//
function depositWithdraw(InputVal) {
  const InputField = document.getElementById(InputVal);
  const InputAmount = InputField.value;
  InputField.value = "";
  return InputAmount;
}

function updateVal(fieldval, Amount) {
  const fieldValue = document.getElementById(fieldval);
  const prevoiusAmount = fieldValue.innerText;
  fieldValue.innerText = Number(Amount) + Number(prevoiusAmount);
}

function updateTotal(Amount, isPositive) {
  const total = document.getElementById("total-val");
  const totalVal = total.innerText;
  let totalBalance;
  if (isPositive == true) {
    totalBalance = Number(totalVal) + Number(Amount);
  } else {
    totalBalance = Number(totalVal) - Number(Amount);
  }
  total.innerText = totalBalance;
}


depoBtn.addEventListener("click", () => {
  const depoAmount = depositWithdraw("deposit-input");

  if (depoAmount > 0) {
    updateVal("deposit-val", depoAmount);
    // total
    updateTotal(depoAmount, true);
  }
});


withdrawBtn.addEventListener("click", () => {
  const withdrawAmount = depositWithdraw("withdraw-input");
  const total = document.getElementById("total-val").innerText;
  if (parseFloat(withdrawAmount) > 0 && parseFloat(withdrawAmount) < total) {
    updateVal("withdraw-val", withdrawAmount);
    updateTotal(withdrawAmount, false);
  }
});

//
