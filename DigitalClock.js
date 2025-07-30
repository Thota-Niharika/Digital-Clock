let digitalClockContainer=document.getElementById("digital_clock_container");
function toDisplayDigitalClock(){
    let dateObject=new Date();
    let day=dateObject.getDay();//[1]
    let date=dateObject.getDate();
    let month=dateObject.getMonth();//[2]
    let fullYear=dateObject.getFullYear();
    let hours=dateObject.getHours();
    let minutes=dateObject.getMinutes();
    let seconds=dateObject.getSeconds();
    let dayHeading=document.getElementById("day_heading");
    let dateHeading=document.getElementById("date_heading");
    let timeHeading=document.getElementById("time_heading");
    let secondsHeading=document.getElementById("seconds_heading");
    let dayArrays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Firday","Saturday"];
    day=dayArrays[day];//["Monday"]
    let monthArray=["January","February","March","April","May","June","July","August","September","October","November","December"];
    month=monthArray[month];//["March"]
    dayHeading.innerText=day;
    dateHeading.innerText=`${toAddZeros(date)}/${month}/${fullYear}`;
    timeHeading.innerText=`${toAddZeros(hours)}:${toAddZeros(minutes)}`;
    secondsHeading.innerText=toAddZeros(seconds);
}
setInterval(toDisplayDigitalClock,1000);
function toAddZeros(digitalClockValue){
    if(digitalClockValue<=9){
        return `${0}${digitalClockValue}`;
    }
    else{
        return digitalClockValue;
    }
}