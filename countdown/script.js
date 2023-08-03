let daybox = document.getElementById("day-box");
let hrbox = document.getElementById("hr-box");
let minbox = document.getElementById("min-box");
let secbox = document.getElementById("sec-box");

console.log(daybox,hrbox,minbox,secbox);

let endDate = new Date(2023,9,5,16,40);

// output value in milliseconds

let endTime = endDate.getTime();

function countdown(){
    let todayDate = new Date();

    let todayTime = todayDate.getTime();

    let remainingTime = endTime - todayTime;

    let oneMin = 60 * 1000
    let oneHour = 60 * oneMin
    let oneDay = 24 * oneHour
    // function to format the number if it is single digit 

    let addZeroes = num => num < 10 ? `0${num}` : num;

    if (endTime < todayTime){
        clearInterval(i);
        document.querySelector(".countdown").
        innerHTML = `<h1> Countdowm has expired !</h1>`;
    }
    else{

        let daysLeft = Math.floor(remainingTime/oneDay);
        let hrLeft = Math.floor((remainingTime % oneDay)/oneHour);
        let minLeft = Math.floor((remainingTime % oneHour)/ oneMin);
        let secLeft = Math.floor((remainingTime % oneMin) / 1000);

        // displaying values
        daybox.textContent = addZeroes(daysLeft);
        hrbox.textContent = addZeroes(hrLeft);
        minbox.textContent = addZeroes(minLeft);
        secbox.textContent = addZeroes(secLeft);
        console.log(daysLeft);
    }
}

let i = setInterval(countdown, 1000);
countdown();