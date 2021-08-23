
// handle buttons variable
const minuteField=document.getElementById('minute-field');
const secondField=document.getElementById('second-field')
const tenField=document.getElementById('ten-field')
const startBtn=document.getElementById('start-btn');
const stopBtn=document.getElementById('stop-btn');
const resetBtn=document.getElementById('reset-btn');
let ten="00";
let second="00";
let minute="00";
let intervel;

function startNow(){
    ten++;
    if(ten<=9){
        tenField.innerText= "0" + ten;
    }
    else{
        tenField.innerText=ten;
    }
    if(ten==100){
        ten=0;
        tenField.innerText= "0" + ten;
        second++;
        if(second<=9){
            secondField.innerText= "0" + second;
        }
        else{
            secondField.innerText=second;
        }
    }
    if(second == 60){
        second=0;
        secondField.innerText="0"+second;
        minute++;
        if(minute<=9){
            minuteField.innerText="0"+minute;
        }
        else{
            minuteField.innerText=minute;
        }
    }
}

function startCommand(){
    clearInterval(intervel);
    intervel=setInterval(startNow,10)
}
function stopCommand(){
    clearInterval(intervel);
}
function resetCommand(){
    clearInterval(intervel);
    ten=0;
    second=0;
    minute=0;
    minuteField.innerText='00';
    tenField.innerText="00";
    secondField.innerText="00";
}


startBtn.addEventListener("click",startCommand)
stopBtn.addEventListener("click",stopCommand)
resetBtn.addEventListener("click",resetCommand)
