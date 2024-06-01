// Question-01
// var arr=[];

//Question-02
// var arr = [
//      [0,1,2,3]
//     ,[1,0,1,2]
//     ,[2,1,0,1]];

// for(var i=0;i<3;i++){
//     for(var j =0;j<4;j++){
//         document.write(arr[i][j]+' ')
//     }
//     document.write('<br>')
// }

//Question-03
// for(var i=1;i<=10;i++){
//     document.write(i+'<br>')
// }

//Question-04
// var tableNo=prompt('Enter a table to show its multiplication table');
// var tableLength=prompt('Enter the length multiplication table');
//  document.write('Multiplication table of '+tableNo+'<br>'+' Length '+tableLength+'<br>'+'<br>')
// for(var i=1;i<=tableLength;i++){
//     document.write(tableNo+' X'+i+' ='+tableNo*i+'<br>')
// }

//Question-05
// var fruits=['apple', 'banana', 'mango', 'orange', 'strawberry'];
// for(var i=0;i<fruits.length;i++){
//     document.write(fruits[i]+'<br>')
// }
// document.write('<br>')
// for(var j=0;j<fruits.length;j++){
//     document.write('Element at index '+j + ' is '+fruits[j]+'<br>');}

//Question-06
//part a
// document.write('<h3>'+'Counting'+'</h3>')
// document.write('<br>');
// for(var i=1;i<=15;i++){
//     document.write(i+'<br>')};

// part b

// document.write('<h3>'+'Reverse Counting'+'</h3>');
// document.write('<br>');
// for(var i=10;i>=1;i--){
//     document.write(i+'<br>')
// }

// part c

// document.write('<h3>'+'Even'+'</h3>')
// document.write('<br>');
// for(var i=0;i<=20;i++){
//     document.write(i++ +'<br>')};

// part d
// document.write('<h3>'+'Odd'+'</h3>')
// document.write('<br>');
// for(var i=1;i<=19;i=i+2){
//     document.write(i+'<br>')};

// part e

// document.write('<h3>'+'Series'+'</h3>')
// document.write('<br>');
// for(var i=2;i<=20;i=i+2){
//     document.write(i+'k'+'<br>')
// }

// Question-07
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array.
// After searching, prompt the user whether the given item is found in the list or not. Example:

// var A = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
// var userInput = prompt('Enter the item name');
// userInput = userInput.toLowerCase();
// var check = false;
// for (var i = 0; i < A.length; i++) {
//     if (userInput === A[i]) {
//         document.write(A[i] + ' is available at index ' + i + ' in our bakery')
//         check = true;

//     }
// }

// if (check === false) {
//     document.write('We are sorry .' + userInput + ' is not available in our bakery')

// }

// Question-08
// A = [24, 53, 78, 91, 12].

// var arr=[24,53,78,91,12];
// var largest=arr[0];
// console.log(arr[0])
// for(var i=0;i<arr.length;i++){
//      if(arr[i]>largest)
//      {largest=arr[i]}
// }
// document.write('Array items : '+arr+'<br>');
// document.write('The largest number is '+largest)

//Question-09
// A = [24, 53, 78, 91, 12]

// var arr=[24,53,78,91,12];
// var smallestNo=arr[0];
// for(var i=0;i<arr.length;i++){
//     if(arr[i]<smallestNo){
//         smallestNo=arr[i]
//     }
// }
// document.write('Array items : '+arr+'<br>');
// document.write('The smallest number is '+smallestNo)

// Question-10
// for(var i=5;i<=100;i=i+5){
//     document.write(i+',')
// }


