function checkMobileNumber() {
  var mobile = document.getElementById("mobile number");

  var message = document.getElementById("mobile numberError");

  var goodColor = "#0C6834";
  var badColor = "#FF9B37";

  if (mobile.value.length != 10) {
    mobile.style.backgroundColor = badColor;
    message.style.color = badColor;
    message.innerHTML = "Mobile number should be of 10 digits";
  } else {
    mobile.style.backgroundColor = goodColor;
    message.style.color = goodColor;
    message.innerHTML = "Valid Mobile Number";
  }
}

function checkAccountNumber() {
  var account = document.getElementById("account number");

  var message = document.getElementById("account numberError");

  var goodColor = "#0C6834";
  var badColor = "#FF9B37";

  if (account.value.length != 12) {
    account.style.backgroundColor = badColor;
    message.style.color = badColor;
    message.innerHTML = "Account number should be of 12 digits";
  } else {
    account.style.backgroundColor = goodColor;
    message.style.color = goodColor;
    message.innerHTML = "Valid Account Number";
  }
}

function checkConfirmAccountNumber() {
  var account = document.getElementById("account number");
  var confirmAccount = document.getElementById("confirm account number");

  var message = document.getElementById("confirm account numberError");

  var goodColor = "#0C6834";
  var badColor = "#FF9B37";

  if (account.value != confirmAccount.value) {
    confirmAccount.style.backgroundColor = badColor;
    message.style.color = badColor;
    message.innerHTML = "Account number does not match";
  } else {
    confirmAccount.style.backgroundColor = goodColor;
    message.style.color = goodColor;
    message.innerHTML = "Account number matched";
  }
}

function checkAll() {
  if (
    document.getElementById("mobile number").value == "" ||
    document.getElementById("account number").value == "" ||
    document.getElementById("confirm account number").value == ""
  ) {
    alert("Please fill all the fields");
  } else {
    alert("Your account has been created successfully");
  }
}

function deleteAll() {
  document.getElementById("mobile number").value = "";
  document.getElementById("account number").value = "";
  document.getElementById("confirm account number").value = "";
}
