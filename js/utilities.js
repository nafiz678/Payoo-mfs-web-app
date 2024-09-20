console.log("utilities function loaded");

// function getInputFieldValueById()
// {
//     const addMoney = document.getElementById("input-add-money").value;
//     return addMoney;
// }



function getInputFieldValueById(id)
{
    const inputVal = document.getElementById(id).value;
    const inputValue = parseFloat(inputVal);
    console.log(typeof inputValue);
    return inputValue;
}

function showSectionById(id)
{
    //Hide all the section
    document.getElementById("add-money-form").classList.add("hidden");
    document.getElementById("cash-out-form").classList.add("hidden");
    document.getElementById("transaction-section").classList.add("hidden");

    //show the section with the specific given id 
    document.getElementById(id).classList.remove("hidden");
}