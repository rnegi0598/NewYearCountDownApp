// let currentDate=new Date();
// let newYear=`1 Jan ${currentDate.getFullYear()}`;

const daysEl=document.getElementById("days");
const hoursEl=document.getElementById("hours");
const minEl=document.getElementById("min");
const secEl=document.getElementById("sec");

// modifying heading year to target new year
const headerYear=document.getElementById("n-year");
headerYear.innerHTML=`${new Date().getFullYear()+1}`;


const barEl=document.querySelectorAll(".bar");

function countdown(){
    let currentDate=new Date();
    let newYear=`1 Jan ${currentDate.getFullYear()+1}`;
    let newYearDate=new Date(newYear);

    let totalSeconds=newYearDate-currentDate; //in milliseconds
    totalSeconds/=1000; //in seconds

   //finding days hours min and sec
    let days=totalSeconds/60/60/24;
    days=Math.floor(days);
    let hours=totalSeconds/60/60%24;
    hours=Math.floor(hours);
    let min=totalSeconds/60%60;
    min=Math.floor(min);
    let sec=totalSeconds%60;
    sec=Math.floor(sec);

    //percentages calculate
    let daysPercent=Math.floor(days*100/365);
    daysPercent=toWord(daysPercent);
    let hoursPercent=Math.floor(hours*100/24);
    hoursPercent=toWord(hoursPercent);
    let minPercent=Math.floor(min*100/60);
    minPercent=toWord(minPercent);
    let secPercent=Math.floor(sec*100/60);
    secPercent=toWord(secPercent);
    
    

    // height bar set acc to percentages
    //remove all the classes of all the bar except 'bar class'
    for(let i=0;i<barEl.length;i++){
        barEl[i].className="";
        barEl[i].classList.add('bar');
    }
    //set bar acc to percentages
    barEl[0].classList.add(daysPercent);
    barEl[1].classList.add(hoursPercent);
    barEl[2].classList.add(minPercent);
    barEl[3].classList.add(secPercent);


    




    //appending 0 before single digit if any
    days=formatDate(days);
    hours=formatDate(hours);
    min=formatDate(min);
    sec=formatDate(sec);

   

    //modifying element to live countdown
    daysEl.innerHTML=days;
    hoursEl.innerHTML=hours;
    minEl.innerHTML=min;
    secEl.innerHTML=sec;





}


function formatDate(num){
    if(num<10){
        num=`0${num}`;
    }
    return num;
}
//convert percentages in numbers to strings. ( makes it easier to modify height-bar)
function toWord(num){
    if(num<=10)
        return "ten";
    else if(num<=20)
        return "twenty";
    else if(num<=30){
        return "thirty";
    }
    else if(num<=40){
        return "fourty";
    }
    else if(num<=50){
        return "fifty";
    }
    else if(num<=60){
        return "sixty";
    }
    else if(num<=70){
        return "seventy";
    }
    else if(num<=80){
        return "eighty";
    }
    else if(num<=90){
        return "ninety";
    }
    else
        return "hundred";
}



// countdown();
setInterval(countdown,1000);


