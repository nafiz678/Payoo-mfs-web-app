//show the cash out form
document.getElementById("btn-show-cash-out").addEventListener("click", function(){

    //show cash out button clicked
    document.getElementById("cash-out-form").classList.remove("hidden")
    
    //Hide the add money section
    document.getElementById("add-money-form").classList.add("hidden")

})

document.getElementById("btn-show-add-money").addEventListener("click" , function(){
    document.getElementById("cash-out-form").classList.add("hidden");
    document.getElementById("add-money-form").classList.remove("hidden")

})