//add money to the account

/**
 * S-1: Add event handler
 * prevent page reload after page submit
 * S-2: Get money to be added to the account balance
 * S-3: Get the pin number 
 */
document.getElementById("btn-add-money").addEventListener("click", function(event){
    event.preventDefault();
    console.log("added event");

    //S-2: Get money to be added to the account balance
    const addMoneyInput = document.getElementById("input-add-money").value;
    //S-3: Get the pin number 
    const pinNumberInput = document.getElementById("input-pin-number").value;
    console.log(addMoneyInput, pinNumberInput);
})