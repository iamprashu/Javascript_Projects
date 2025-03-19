let minDisplay = document.querySelector('#Min')
let hrDisplay = document.querySelector('#Hour');
let midDots = document.querySelector('#dots');
let secDisplay = document.querySelector('#Seconds');
let ampmDisplay = document.querySelector('#ampm');
let monthDisplay = document.querySelector('#Month');
let dayDisplay = document.querySelector('#Day');
let daynameDisplay = document.querySelector('#DayName');
let yearDisplay = document.querySelector('#Year');

const monthsList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const weekList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// for color switching
let Background = document.querySelector('.mainBG');
let ClockBox = document.querySelector('.clockBg');
let Button1 = document.querySelector('.Dark');
let Button2 = document.querySelector('.Light');
let Hour = document.querySelector('#Hour');
let CompleteDate = document.querySelector('.CompleteDate');
let AmPmIDS = document.querySelector('#ampm');

function SwitchToLight(){
    Background.classList.remove('bg-black');
    Background.classList.add('bg-[#98DDCA]')

    ClockBox.classList.remove('bg-[#3D0000]');
    ClockBox.classList.add('bg-[#00B8A9]');

    Hour.classList.remove('text-[#FF0000]');
    Hour.classList.add('text-[#040D12]');
    AmPmIDS.classList.remove('text-[#FF2E63]');
    AmPmIDS.classList.add('text-[#142850]');
    CompleteDate.classList.add('text-[#FF2E63]')
    secDisplay.classList.remove('text-[#14FFEC]');
    secDisplay.classList.add('text-black');

}
function SwitchToDark() {
    Background.classList.remove('bg-[#98DDCA]');
    Background.classList.add('bg-black');

    ClockBox.classList.remove('bg-[#00B8A9]');
    ClockBox.classList.add('bg-[#3D0000]');

    Hour.classList.remove('text-[#040D12]');
    Hour.classList.add('text-[#FF0000]');

    AmPmIDS.classList.remove('text-[#142850]');
    AmPmIDS.classList.add('text-[#FF2E63]');

    CompleteDate.classList.remove('text-[#FF2E63]');

    secDisplay.classList.add('text-[#14FFEC]');
    secDisplay.classList.remove('text-black');
}



function Clock(){
    const Today = new Date();
    // console.log(Today.getHours())
    SetTime(Today);
    
}

function SetTime(time){
    let Hours = time.getHours();
    let Minutes = time.getMinutes();
    let Seconds = time.getSeconds();
    let AmPm = (Hours < 12) ? 'AM' : 'PM';
    let DayName = weekList[time.getDay()];
    DayName = DayName.slice(0,3)
    let Month = monthsList[time.getMonth()];
    let DayNo = time.getDate();
    let Year = time.getFullYear();

    // a chill logic to make the dots blink
    if (parseInt(Seconds) & 1) {
        midDots.classList.add('text-[#FF2DF1]'); 
    } else {
        midDots.classList.remove('text-[#FF2DF1]'); 
    }

    

    if(Hours<10){
        Hours = '0'+ Hours;
    }
    if(Minutes<10){
        Minutes = '0'+ Minutes;
    }
    if(Seconds<10){
        Seconds = '0' + Seconds;
    }

    hrDisplay.innerHTML = Hours;
    minDisplay.innerHTML = Minutes;
    secDisplay.innerHTML = Seconds;
    ampmDisplay.innerHTML = AmPm;
    monthDisplay.innerHTML = Month;
    daynameDisplay.innerHTML = DayName;
    dayDisplay.innerHTML = DayNo;
    yearDisplay.innerHTML = Year;

   
    
}

setInterval(Clock,1000);
Clock(); // this is to set initial value