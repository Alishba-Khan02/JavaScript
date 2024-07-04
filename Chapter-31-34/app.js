//Question-01 

// var date=new Date();
// document.write(date)

//Question-02
// var date=new Date();
// var month=date.getMonth();

// mlist = [ "January", "Febmliruary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
// document.write('Current Month :'+mlist[month])

//Question-03
// var date=new Date();
// var day=date.getDay();
// var days =['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
// document.write('Today is '+days[day])

//Question-04
// var date=new Date();
// var day=date.getDay();
// var days =['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
// if(day==='Saturday'||day==='Saturday'){
//     alert("It's Fun day ")
// }
// else{
//     alert('Todayis not fun day ')
// }


//Question-05
// var datenow=new Date();
// var date=datenow.getDate();
// if(date<16){
//     document.write('First fifteen days of the month')
// }
// else{
//     document.write('last days of the month')
// }

//Question-06
// var dateNow=new Date();
// var millisec=dateNow.getTime();
// document.write('Current Date :'+dateNow+'<br>')
// document.write('ELasped milliseconds since January 1,1970 :'+millisec+'<br>')
// document.write("Elapsed minutes since January 1, 1970: " + (millisec/(999*60)) + "<br>");

//Question-07
// var dateNow=new Date();
// var hours=dateNow.getHours();
// if(hours>12){
//     alert("It's AM")
// }
// else{
//     alert("It's PM")
// }


// Question-08
// var todayDate= new Date();
// var laterDate=new Date('31 Dec 2020');
// document.write(laterDate)

//Question-09
// var dateToday= new Date();
// var todayMilli=dateToday.getTime();
// var lastRamadan=new Date('June 18, 2015');
// var milliRamdan=lastRamadan.getTime();
// var diffMilliSec=todayMilli-milliRamdan;
// var days =Math.floor(diffMilliSec/(1000*60*60*24));
// document.write(days+' days have passed since Ist Ramadan,2015')

//Question-10
// var dateNow=new Date();
// var todayMilli=dateNow.getTime();
// var year2015=new Date('1 Jan,2015');
// var milli2015=year2015.getTime();
// var diffMilliSec=todayMilli-year2015
// var seconds=Math.floor(diffMilliSec/(1000));
// document.write('On reference date :'+dateNow+'<br>'+' ,'+seconds+' seconds had passed since beginning of 2015')


//Question-11
// var today = new Date();
// var hoursAgo=today.getHours();
// hoursAgo=hoursAgo-1;
// document.write("current date: " + today + "<br>");
// today.setHours(hoursAgo);
// document.write("1 hour ago, it was " + today);

//Question-12
// var today = new Date();
// var yearsAgo = today.getFullYear();
// yearsAgo = yearsAgo-100;
// document.write("current date: " + today + "<br>");
// today.setFullYear(yearsAgo);
// document.write("100 years back, it was " + today);

// Question-13
// var age=+prompt('Enter your age');
// var today= new Date();
// var yearNow=today.getFullYear();
// var birthYear=yearNow-age;
// document.write('Your age is '+age+'<br>'+' Your birth year is '+birthYear)



// Question-14
var customerName='Alishba Khan';
var today=new Date();
var month=today.getMonth();
mlist = [ "January", "Febmliruary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
var noUnits=410;
var chargePerunit=16;
var netAmount=noUnits*chargePerunit;
var lastCharge=350;
var afterDueDate=netAmount+lastCharge;
document.write('<h1>'+'K-Electric Bill'+'</h1>')
document.write('Customer Name :'+customerName+'<br>');
document.write('Month :'+mlist[month]+'<br>');
document.write('Number of units :'+noUnits+'<br>');
document.write('Charges per unit :'+chargePerunit+'<br>');
document.write('<br>')
document.write('Net Amount Payabale (Within Due Date) :'+netAmount+'<br>');
document.write('Late payment surcharge :'+lastCharge+'<br>');
document.write('Gross payment Payable(after Due Date) :'+afterDueDate+'<br>');
