// To create image using js
//"use strict" can be put at the beginning of a function. Doing that enables strict mode in that function only. But usually people use it for the whole script.


//*************Using canvas elements**************
var element = document.createElement('p');
element.textContent = "To create canvas";
document.body.appendChild(element);

var canvas=document.createElement('canvas')
canvas.width=250;
canvas.height=100;

var ctx=canvas.getContext('2d');
ctx.font='30px Cursive';
ctx.fillText("Hello world!",50,50);

document.body.appendChild(canvas);


//******************Using SVG********************


//**************JavaScript Variables***************

//we create a new <p> tag with a textContent property of and add it at the end of the html body:
var element = document.createElement('p');
element.textContent = "JavaScript Variables";
document.body.appendChild(element); //add the newly created element to the DOM

var num1=5;
num1=6;
document.write(num1); //gives output==6

//We can also declare multiple variables in one line:
var user = 'John', age = 25, message = 'Hello';

//This is a bad practice and would cause an error in strict mode:
"use strict";
num = 5; // error: num is not defined




//************Types of Variables***********************

var randomVariables = [2, "any type works", undefined, null, true, 2.51];
john = {firstname: "John", lastname: "Doe", fullname: "John Doe"};
document.write(john.fullname);

// When the Number.isNaN is called with one argument number, the following steps are taken:
// 1. If Type(number) is not Number, return false.
// 2. If number is NaN, return true.
// 3. Otherwise, return false.

//********************Backticks**************************
//Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them in ${…}, for example:

var name = "John";

// embed a variable
//alert( `Hello, ${name}!` ); // Hello, John!

// embed an expression
//alert( `the result is ${1 + 2}` ); // the result is 3

//***********************typeof**************************
//The typeof operator returns the type of the argument. 
//typeof Math ;// "object"  (1)

//typeof null ;// "object"  (2)

//typeof alert ;// "function"  (3)

var fname = "Ilya";
document.write("<br />");
document.write( `hello ${1}` ); // hello 1
document.write("<br />");
document.write( `hello ${"name"}` ); // hello name
document.write("<br />");
document.write( `hello ${fname}` ); // hello Ilya
document.write("<br />");


//*************************alert,prompt,confirm********************

//The alert method is technically a property of window object, but since all window properties are automatically global variables, we can use alert as a global variable instead of as a property of window -meaning you can directly use alert() instead of window.alert().
alert('Pause!');
console.log('Alert was dismissed');

var age2 = prompt("How old are you?");
console.log(age2); // Prints the value inserted by the user


// if(window.confirm("Are you sure you want to devare this?")) {
// 	devareItem(id);
// }

function ConfirmDevare()
{
  var x = confirm("Are you sure you want to devare?");
  if (x)
      return true;
  else
    return false;
}


//************************Type Conversion*************************

var value1 = true;
document.write(typeof value1); // boolean
document.write("<br />");

value1 = String(value1); // now value is a string "true"
document.write(typeof value1); // string


var str1 = "123";
document.write("<br />");
document.write(typeof str1); // string
var num2 = Number(str1); // becomes a number 123
document.write("<br />");
document.write(typeof num2); // number


document.write("<br />");
document.write( Boolean("hello") ); // true


//****************************Math Operations**************************
document.write( 5 % 2 ); // 1, a remainder of 5 divided by 2
document.write("<br />");
document.write( 4 ** (1/2) ); // 2 (power of 1/2 is the same as a square root)
document.write("<br />");
document.write( '1' + 2 ); // "12"
document.write("<br />");
document.write( 6 - '2' ); // 4, converts '2' to a number
document.write("<br />");
document.write( '6' / '2' ); // 3, converts both operands to numbers
// No effect on numbers
var m = 1;
document.write("<br />");
document.write( +m ); // 1

var n = -2;
document.write("<br />");
document.write( +n ); // -2

// Converts non-numbers
document.write("<br />");
document.write( +true ); // 1
document.write("<br />");
document.write( +"" );   // 0


//***********************Logical Operators**********************

// alert( true || true );   // true
// alert( false || true );  // true
// alert( true || false );  // true
// alert( false || false ); // false

var hour = 9;

document.write("<br />");
if (hour < 10 || hour > 18) {
  document.write( 'The office is closed.' );
}

// alert( true && true );   // true
// alert( false && true );  // false
// alert( true && false );  // false
// alert( false && false ); // false

var hour1 = 12;
var minute1 = 30;

document.write("<br />");
if (hour1 == 12 && minute1 == 30) {
  document.write( 'The time is 12:30' );

}
// alert( !true ); // false
// alert( !0 ); // true
// alert( Boolean("non-empty string") ); // true
// alert( Boolean(null) ); // false

//*********************Conditional Operator*****************

//var accessAllowed = age > 18 ? true : false;
var age3 = prompt('age3?', 18);

var message1 = (age3 < 3) ? 'Hi, baby!' :
  (age3 < 18) ? 'Hello!' :
  (age3 < 100) ? 'Greetings!' :
  'What an unusual age!';

alert( message1 );

var company = prompt('Which company created JavaScript?', '');

(company == 'Netscape') ?
   alert('Right!') : alert('Wrong.');


// *********************Arrays*******************************
var myFriends =['Yashi','Isha','Aman','Ashish'];
console.log(myFriends);
console.log(typeof(myFriends));
console.log(myFriends[2]); //"Aman"

//Update a value
myFriends[3]="Sanya"
console.log(myFriends)

//Add more items
myFriends[4]="Yash"

//Delete a value
var mValue=myFriends.pop()

//splice() 

//1st tells where to start
//2nd tells how many items to be deleted
//3 rd and 4th and so on tells what itmes to be added

myFriends.splice(0,0 ,'Aditya'); // ['Adtiya',Yashi','Isha','Aman','Ashish']


//Delete item at specific position
myFriendssplice(2,1) // ['Aditya', Yashi','Aman','Ashish']

//Concatenation
var mOfficeFriends = ['Madan','Bhavesh','Bharti']

var mAllFriends= myFriends.concat(mOfficeFriends);

//Sorting in Ascending and descending order
//Ascending
mAllFriends.sort()

//Descending
mAllFriends.reverse()


//********************Loops**************************

//while loop
document.write("<br /1>")
var i = 0;
while (i < 3) { // shows 0, then 1, then 2
  document.write( i );
  i++;
}

//do-while loop
document.write("<br />")
var i = 0;
do {
  document.write( i );
  i++;
} while (i < 3);


//for loop
for (var i = 0; i < 3; i++) { // shows 0, then 1, then 2
  document.write(i);
  document.write("<br />")
}


//*****************switch**************************** 
var a = 2 + 2;

switch (a) {
  case 3:
    document.write( 'Too small' );
    break;
  case 4:
    document.write( 'Exactly!' );
    break;
  case 5:
    document.write( 'Too big' );
    break;
  default:
    document.write( "I don't know such values" );
}


//*******************functions***********************
function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return confirm('Do you have permission from your parents?');
  }
}

var age = prompt('How old are you?', 18);

if ( checkAge(age) ) {
  alert( 'Access granted' );
} else {
  alert( 'Access denied' );
}

//function with parameters

//for defualt parameter - function showMessage(from, text="Hello Everyone!")
function showMessage(from, text) {

  from = '*' + from + '*'; // make "from" look nicer

  alert( from + ': ' + text );
}

var from = "Ann";

showMessage(from, "Hello"); // *Ann*: Hello

// the value of "from" is the same, the function modified a local copy
alert( from ); // Ann


//If the function is declared as a separate statement in the main code flow, that’s called a “Function Declaration”.
// If the function is created as a part of an expression, it’s called a “Function Expression”.
let sum = function(a, b) {
  return a + b;
};


//**********************Arrow Functions*****************************
var double = n => n * 2;
// roughly the same as: let double = function(n) { return n * 2 }


document.write("<br />")
document.write( double(3) ); // 6


//************Debugging Chrome
//on youtube js playlist--watch video

