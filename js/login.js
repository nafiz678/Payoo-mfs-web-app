




//Error : form submit reloading the page

//Step 1 : set event handler
// document.getElementById("button-login").addEventListener("click", function(event){
//     //Step 2 : prevent default behavior (reloading the page)
//     event.preventDefault(); //<-- Vhejailla -->
    
//     //Step 3 : get the phone number 
//     const phoneNumber = document.getElementById("phone-number").value;
//     const pinNumber = document.getElementById("pin-number").value;
//     console.log(phoneNumber,pinNumber);
    
//     //Step 5 : validate the phone number and pin number
//     //This is temporary . You should not try this very often
//     if(phoneNumber === "5" && pinNumber === "1234")
//     {
//         console.log("You're logged in.")
//         // step 5 : allow user to use the website
//     }
//     else{
//             alert("Wrong phone number or pin");
//     }
// })

document.getElementById("button-login").addEventListener("click", function (event) {
    event.preventDefault();
    console.log("button clicked");

    const phoneNumber = document.getElementById("phone-number").value;
    const pinNumber = document.getElementById("pin-number").value;
    console.log(phoneNumber, pinNumber);

    if(phoneNumber === "01632820920" && pinNumber === "12345")
    {
        alert("You're logged in");
    }
    else{
        alert("Invalid number or pin");
    }
})