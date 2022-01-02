console.log(document.domain)
console.log(document.URL)
console.log(document.title)

//to change title
document.title = 123

console.log(document.doctype)     //<!DOCTYPE html>
console.log(document.head)        //<head> --------</head>
console.log(document.body)        //<body>--------</body>
console.log(document.all)		  //all tags
console.log(document.all[10])	  //first 10 tags
document.all[10].textContent = "Hello";   //returns tag which consist of "Hello"


console.log(document.forms)
console.log(document.images)



//JAVASCRIPT ELEMENTS


//for example if some tag have id 'fname'
//<p id="fname">Paragraph</p>

//GETELEMENTBYID
var headerTitle=document.getElementById('header-title');
console.log(headerTitle);
headerTitle.textContent = "Hello";

//innertext means ,for ex if there is some span tag present inside headerTitle then that span text will get changed to goodbye 
headerTitle.innerText = "GoodBye";


//It doesnot change anything and puts a <h3> tag inside headerTitle element 
headerTitle.innerHTML='<h3>Hello</h3>'


//**************Style changes***********************88
headerTitle.style.borderBottom = "solid 3px #000";

//getElementByClass
var items=document.getElementsByClassName('list-group-item');
console.log(items);

//We can access individual elements
console.log(itmes[1]);

//If want to change text
itmes[1].textContent="Hello 2";

//If we want to change style
items[1].style.fontWeight='bold';
items[1].style.backgroundColor='yellow';

//to apply background color to all items
 for(var i=0;i<items.length;i++){
 	items[i].style.backgroundColor='#f4f4f4';
 }

// this is wrong -->items.style.backgroundColor="#f4f4f4";

//**************getElementByTagName*********************
var li=document.getElementByTagName('li');
console.log(li);
concole.log(li[1]);
li[1].textContent='Hello 2';
li[1].style.fontWeight='bold';
li[1].style.backgroundColor='yellow';


//********************QuerySelector***********************

//We can grab a list item , class or any css selector
var header=document.querySelector('#main-header');
header.style.borderBottom='solid 4px #ccc';

var input=document.querySelector('input');
input.value='Hello World';

var submit=document.querySelector('input[type="submit"]');
submit.value="SEND";

var item=document.querySelector('.list-group-item');
item.style.color='red';

var lastItem = document.querySelector('list-group-item:last-child');

var secondItem = document.querySelector('list-group-item:nth-child(2)');


//**********************Query selector all**********************88
var titles=document.querySelectorAll('.title');
console.log(titles);

var odd=document.querySelectorAll('li:nth-child(odd)');
var even=document.querySelectorAll('li:nth-child(even)');


//isse odd rows me dusra color daal skte aur even rows me dusra
for(var i=0;i<odd.length;i++){
	odd[i].style.backgroundColor='f4f4f4';
	even[i].style.backgroundColor='#ccc';


}


//
