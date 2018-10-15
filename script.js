const secondHand = docoment.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = dosument.querySelector('.hour-hand');

function setDate(){
    const now =new Date();
    
    const second = now.getSeconds();
    const secondDegrees = ((seconds/60)*360) + 90;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
    
    const mins = now.getMinutes();
    const minsDegrees = ((mins/60)*360)+90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`

    const hour = now.getMinutes();
    const hoursDegrees = ((mins/12)*360)+90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`
}

setInterval(setDate, 1000);