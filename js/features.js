//show the cash out form
// document.getElementById("btn-show-cash-out").addEventListener("click", function(){

//     //show cash out button clicked
//     document.getElementById("cash-out-form").classList.remove("hidden")
    
//     //Hide the add money section
//     document.getElementById("add-money-form").classList.add("hidden")

// })

// document.getElementById("btn-show-add-money").addEventListener("click" , function(){
//     document.getElementById("cash-out-form").classList.add("hidden");
//     document.getElementById("add-money-form").classList.remove("hidden")

// })



document.getElementById("btn-show-add-money").addEventListener("click", function(){
    showSectionById("add-money-form");
})


document.getElementById("btn-show-cash-out").addEventListener("click", function(){
    showSectionById("cash-out-form");
})


document.getElementById("transaction").addEventListener("click", function(){
    showSectionById("transaction-section");
})