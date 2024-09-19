//add money to the account

/**
 * S-1: Add event handler
 * prevent page reload after page submit
 * S-2: Get money to be added to the account balance
 * S-3: Get the pin number 
 * S-4: Verify the pin number
 */
document.getElementById("btn-add-money").addEventListener("click", function(event){
    event.preventDefault();

    //S-2: Get money to be added to the account balance
    const addMoneyInput = document.getElementById("input-add-money").value;
    //S-3: Get the pin number 
    const pinNumberInput = document.getElementById("input-pin-number").value;
    console.log(addMoneyInput, pinNumberInput);

    //S-4: Verify the pin number
    //wrong way to validate pin number
    if(pinNumberInput === "12345")
    {
        console.log("adding money");
        //Step-5 :get the balance money
        const balance = document.getElementById("account-balance").innerText;
        // balance = balance + addMoneyInput;

        //convert balance string to number
        const addMoneyNumber = parseFloat(addMoneyInput);
        const balanceNumber = parseFloat(balance);
        const newBalance = addMoneyNumber + balanceNumber;
        console.log(newBalance);
        
        //Step 6 : Update the balance in the UI/DOM
        document.getElementById("account-balance").innerText = newBalance;
    }
    else {
        
        alert("successfully failed")
    }
})