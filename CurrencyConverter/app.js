const ConverterApi =
  "https://v6.exchangerate-api.com/v6/62edf7c8c741ab076ec3c5c2/latest"; 
const dropDown = document.querySelectorAll('select');
const FromImage = document.querySelector(".fromImage");
const MainButton = document.querySelector(".mainButton");
const DisplayData = document.querySelector("#displayData");
const AmountIn = document.querySelector("#fromAmt");
const fromCurrency = document.querySelector(".FromSelect");
const toCurrency = document.querySelector(".toSelect");

for(let select of dropDown){
    for(code in countryList){
        let newOption = document.createElement('option');
        newOption.innerText = code;
        newOption.value = code;

        select.append(newOption)

        if(select.name === "from" & code === "USD"){
            newOption.selected = true
        }else if(select.name === "to" && code === "INR"){
            newOption.selected = true
        }
    }
    select.addEventListener('change',(value)=>{
        UpdateImage(value.target)
    });

}

// code to change image in boxes
const UpdateImage = async (element)=>{
    let currCode = element.value;
    let contryCode = countryList[currCode];

    let FlagSource = `https://flagsapi.com/${contryCode}/shiny/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = FlagSource;
}

const UpdateExchangeRate = async ()=>{
    let quantity = AmountIn.value;
    if(quantity == '' || quantity < 0){// handld null val case
        quantity = 1;
        AmountIn.value = "1";
    }

    const UrlTofetch = `${ConverterApi}/${fromCurrency.value}`;
    let response = await fetch(UrlTofetch);
    let data = await response.json();

    if(data.result == 'error'){
        alert(`Sorry, the conversion for ${fromCurrency.value} may not be possible at this moment.`);
        location.reload();
    }
    let rate = data.conversion_rates[toCurrency.value];
    

    let finalAmount = quantity * rate;

    DisplayData.innerText = `${quantity} ${fromCurrency.value} = ${finalAmount} ${toCurrency.value}`
}

MainButton.addEventListener('click',(event)=>{
    event.preventDefault(); // stop reloads
    UpdateExchangeRate();
})

window.addEventListener("load", () => {
    UpdateExchangeRate();
  });