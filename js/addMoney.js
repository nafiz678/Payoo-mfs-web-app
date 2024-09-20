console.log("addMoney javascript section added ");


document.getElementById("btn-add-money").addEventListener("click", function(event){
    event.preventDefault();
    // getInputFieldValueById();
    // const addMoney = getInputFieldValueById();
    // console.log(addMoney);

    const addMoney = getInputFieldValueById("input-add-money");
    const pinNumber = getInputFieldValueById("input-pin-number")
    const balance = document.getElementById("account-balance").innerText;
    const balanceNumber = parseFloat(balance);
    console.log(balance);

    //Check weather its a number or string or any other type of value
    if(isNaN(addMoney))
    {
        alert("Invalid Amount");
        return ;
    }


   if(pinNumber == "12345"){
    console.log("Entering if")
    const total = balanceNumber + addMoney;
    document.getElementById("account-balance").innerText = total;

    //add to transaction history
    const p = document.createElement("p");
    p.innerText = `Added : ${addMoney}Tk. New balance : ${total}`;
    console.log(p);


    //Should be a common function
    document.getElementById("transaction-container").appendChild(p);
   }
   else
   {
    alert("successfully failed to add money")
   }
    
    
})