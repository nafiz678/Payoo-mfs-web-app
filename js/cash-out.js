document.getElementById("btn-cash-out").addEventListener("click", function(event){
    event.preventDefault();

    //Getting the values of input
    const cashOut = document.getElementById("input-cash-out").value;
    const cashOutNumber = parseFloat(cashOut);
    const pinNumber = document.getElementById("input-cash-out-pin").value;

    console.log(cashOut, pinNumber);

    //Checking weather its a number or a string or any other type of value
    if(isNaN(cashOut))
    {
        alert("Invalid Amount")
        return ;
    }

    
    
    //wrong way to verify number
    if(pinNumber ==="12345")
    {
        
        const balance = document.getElementById("account-balance").innerText;
        const balanceNumber = parseFloat(balance);
        if(cashOut > balanceNumber)
        {
            alert("You don't have enough balance to cash out");
            return;
        }
        
        const remainingBalance = balanceNumber - cashOutNumber;
        alert("Cash Out successful");
        document.getElementById("account-balance").innerText = remainingBalance;



        //Add to transaction history
        const div = document.createElement("div");
        div.classList.add("bg-yellow-500");
        div.classList.add("rounded-xl", "p-8");
        div.innerHTML = `
            <h4 class="text-2xl font-bold">Cash Out</h4>
            <p>${cashOut} Withdraw. New balance ${remainingBalance} </p>
        `

        document.getElementById("transaction-container").appendChild(div);
    }
    else{
        alert("Invalid Amount or Pin")
    }
})