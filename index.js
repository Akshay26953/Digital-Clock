function showDateAndTime(){
// First get current date and time as per local time zone
const now = new Date();
//Get time value in seconds
const sec = now.getSeconds();
document.getElementById("sec").innerHTML= sec;
//Get time value in minutes
const min = now.getMinutes();
document.getElementById("min").innerHTML= min;
//Get time value in hours
const hour = now.getHours();
document.getElementById("hr").innerHTML= hour;
//Display AM/PM as per time
if (hour < 12){
    document.getElementById("ap").innerHTML= "AM";
}else {
    document.getElementById("ap").innerHTML= "PM";
}
//Get date month year
const date = now.getDate();
const month = now.getMonth();
const year = now.getFullYear();
const monthAlpha = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
const zone =(date + " " + monthAlpha[month] + " " + year);
document.getElementById("date").innerHTML=  zone;

//Get day of the week
const day = now.getDay();
const dayAlpha = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
document.getElementById("time").innerHTML=  dayAlpha[day];
}
setInterval(showDateAndTime, 1000);
showDateAndTime()