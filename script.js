//Login Page Hide
const enterBtn = document.getElementById("enterButton");
enterBtn.addEventListener("click", function(){
    document.getElementById("login-area").style.display = "none";
    
    //Accounting Section
    const accounting = document.getElementById("accounting");
    accounting.style.display = "block";
});

//Deposit Section
const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function(){
    // const depositNumber = document.getElementById("depositAmount").value;
    // const depositNumberParsing = parseFloat(depositNumber);

    const depositNumberParsing = getInputById("depositAmount");

    // document.getElementById("depositAmount").value = "";
    cleanInputField("depositAmount");

    // const currentDepositContainer = document.getElementById("currentDeposit").innerText;
    // const currentDepositNumberParsing = parseFloat(currentDepositContainer);
    // const totalDeposit = depositNumberParsing + currentDepositNumberParsing;
    // document.getElementById("currentDeposit").innerText = totalDeposit;


    //balance Section(add current deposit to the balance)
    // const newBalance = document.getElementById("balance").innerText;
    // const newBalanceParsing = parseFloat(newBalance);
    // const totalBalance = depositNumberParsing + newBalanceParsing;
    // document.getElementById("balance").innerText = totalBalance;
    updateSpanText("currentDeposit", depositNumberParsing);
    updateSpanText("balance", depositNumberParsing);
});

//function for deposit and balance
function updateSpanText(id, depositNumberParsing){
    const currentAmount = document.getElementById(id).innerText;
    const currentNumber = parseFloat(currentAmount);
    const total = depositNumberParsing + currentNumber;
    document.getElementById(id).innerText = total;
}
//funtion for cleaning input field
function cleanInputField (id){
    document.getElementById(id).value = "";
}
//function for event handler
function getInputById(id){
    const number = document.getElementById(id).value;
    const currentNumber = parseFloat(number);
    return currentNumber;
}


//withdraw Section
const withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click", function(){
    // const withdrawNumber = document.getElementById("withdrawAmount").value;
    // const withdrawNumberparsing = parseFloat(withdrawNumber);

    const withdrawNumberparsing = getInputById("withdrawAmount");


    // document.getElementById("withdrawAmount").value = "";
    cleanInputField("withdrawAmount");

    // const currentWithdrawContainer = document.getElementById("currentWithdraw").innerText;
    // const currentWithdrawNumberParsing = parseFloat(currentWithdrawContainer);
    // const totalWithdraw = withdrawNumberparsing + currentWithdrawNumberParsing;
    // document.getElementById("currentWithdraw").innerText = totalWithdraw;

    updateSpanText("currentWithdraw", withdrawNumberparsing);

    //subtraction from balance(totalbalance - totalwithdraw)
    updateSpanText("balance", -1 * withdrawNumberparsing);
    
    // const newBalance = document.getElementById("balance").innerText;
    // const newBalanceParsing = parseFloat(newBalance);
    // document.getElementById("balance").innerText = -1 * withdrawNumberparsing + newBalanceParsing;
});