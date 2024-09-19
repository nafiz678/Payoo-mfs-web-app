document.getElementById("btn-cash-out").addEventListener("click", function(event){
    event.preventDefault();

    //Getting the values of input
    const cashOut = document.getElementById("input-cash-out").value;
    const cashOutNumber = parseFloat(cashOut);
    const pinNumber = document.getElementById("input-cash-out-pin").value;

    console.log(cashOut, pinNumber);
    
    //wrong way to verify number
    if(pinNumber ==="12345")
    {
        alert("Cash Out successful")
        const balance = document.getElementById("account-balance").innerText;
        const balanceNumber = parseFloat(balance);
        const remainingBalance = balanceNumber - cashOutNumber;
        document.getElementById("account-balance").innerText = remainingBalance;

    }
    else{
        alert("Invalid Amount or Pin")
    }
})