const calcBtn = document.querySelectorAll('.ButtonArea button');
const displayPanel = document.querySelector('.display p');

let CurrentInput = "";
let Oprator = "";
let PreviousInput = "";
let FinalAnswer = "";

calcBtn.forEach((button) =>{
    button.addEventListener('click',ButtonFunction);
});

function ButtonFunction(e){
    // displayPanel.innerHTML = e.target.textContent;
    // console.log(`${e.target.textContent}`)

    //main code
    const btnValue = e.target.textContent;
    

    if(!isNaN(btnValue) || btnValue == '.'){
        CurrentInput += btnValue;
    }else if(btnValue == '='){
        DoCalculation();
    }else{
        HandelOpration(btnValue);
        PreviousInput = CurrentInput;
        CurrentInput = "";
    }
    // displayPanel.innerHTML = CurrentInput;  
    UpdateDesplay();
}

function HandelOpration(btnValue){
    Oprator = btnValue;
}


function DoCalculation(){
    let number1 = parseFloat(PreviousInput);
    let number2 = parseFloat(CurrentInput);

    switch(Oprator){
        case '+' : CurrentInput = number1 + number2;
        break;
        case '-' : CurrentInput = number1 - number2;
        break;
        case '*' : CurrentInput = number1 * number2;
        break;
        case '/' : CurrentInput = number1 / number2;
        break;
    }
    CurrentInput = CurrentInput.toFixed(2)
    UpdateDesplay();
    
    console.log(`Previous Input = ${number1} and Current Input = ${number2} and oprator is ${Oprator}`);
}

function UpdateDesplay(){
    displayPanel.innerHTML = CurrentInput || "0";
}

function Clear(){
    CurrentInput = "";
    Oprator = "";
    PreviousInput = "";
    UpdateDesplay();
}
UpdateDesplay(); // for initial zero only


