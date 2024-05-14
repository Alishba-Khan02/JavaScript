//Question 01
// var cityName=prompt("Enter your city name");
// if (cityName==="Karachi") {
//     alert("Welcome to city of lights");
// }

//Question 02
var gender=prompt("Enter your gender");
if (gender==="male") {
    alert("Good morning sir");
}
else if (gender==="female"){
    alert("Good morning mam");
}

//Question 03
// var color=prompt("Enter the traffic color");
// if (color==="red") {
//     alert("Must stop");
// }
// else if (color==="yellow") {
//     alert("Ready to move");
// }
// else if (color==="green") {
//     alert("Move now");
// }

//Question 04
// var fuel=prompt("Enter your remaining fuel in litres in car");
// if (fuel<="0.25 litres") {
//     alert("Please refill the fuel in car");
// }

//Question 05
// Part A
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// // Part B
//  var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// // Part C
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// // Part D
//  var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// // Part E
//  if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
// // Part F
// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }

// //Question 06
// var sub1 = +prompt("Enter the marks obtained in  first subject ");

// var sub2 = +prompt("Enter the marks obtained in second subject");

// var sub3 = +prompt("Enter the marks obtained in third subject");

// var totalMarks = 500;

// var obtainedMarks = sub1 + sub2 + sub3;

// var percentage = obtainedMarks / totalMarks * 100;

// var grade;

// var remarks;

// if (percentage >= 80){
//     grade = "A-one";
//     remarks = "Excellent";
// }

// else if (percentage >= 70){
//     grade = "A";
//     remarks = "Good";
// }

// else if (percentage >= 60){
//     grade = "B";
//     remarks = "You need to improve";
// }

// else{ percentage < 60 
//     grade = "Fail";
//     remarks = "Sorry";
// }

// document.write("<h1>" + "MARKSHEET"+ "</h1>");
// document.write("Total marks: " + totalMarks + "<br>");
// document.write("Marks obtained: " + obtainedMarks + "<br>");
// document.write("Percentage: " + percentage + "<br>");
// document.write("Grade: " + grade + "<br>");
// document.write("Remarks: " + remarks + "<br>");

//Question 07
// var secretNum=8;
// var guessNum=+prompt("Guess the number b/w 1-10");
// if (guessNum===secretNum) {
//     alert("Bingo! Correct answer");
// }
// else if (guessNum===++secretNum) {
//     alert("Close enough to the correct answer");
// }
// else{
//     alert("Sorry! You guessed wrong");
// }

//Question 09
// var number= +prompt("Enter a number");
// if (number %3==0) {
//     alert("The number is divisible by 3");
// }
// else{
//     alert("The number is not divisible by 3");
// }


// Question 10
// var num= +prompt("Enter a number");
// if (num % 2==0) {
//     alert("The number is even");
// }
// else{
//     alert("The number is odd");
// }

//Question 11
// var temp= +prompt("Enter the current temperature of your city");
// if (temp>40) {
//     alert("It is too hot outside");
// }
// else if (temp>30) {
//     alert("The weather today is normal");
// }
// else if (temp>20) {
//     alert("Today's weather is cool");
// }
// else if (temp>10) {
//     alert("OMG! today's weather is so Cool");
// }
// else{
//     alert("Invalid temperature");
// }

//Question 12
// var num1= +prompt("Enter first number");
// var num2= +prompt("Enter Second number");
// var operations = prompt("Select  your operation +,-,*,%,/ ");
// if (operations==="+") {
//     alert(num1+num2);
// }
//  else  if (operations==="-") {
//     alert(num1-num2);
// }
//  else if (operations==="*") {
//     alert(num1*num2);
// }
//  else if (operations==="%") {
//     alert(num1%num2);
// }
//  else if (operations==="/") {
//     alert(num1/num2);
// }
// else{
//     alert("Invalid operation");
// }