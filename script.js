// DOM Manipulation using JavaScript //
// All roperties attached to the document object
console.dir(document) ;
console.log(document.all) ;
// Specific properties in your document
console.log(document.{any property})
//select property by index
console.log(document.all[8]) ;

//Method selection for DOM
//GETELEMENTBYID
console.log(document.getElementById(button))
var button=document.getElementById(button)
button.textContent
button.innerText
button.innerHTML
//GETELEMENTSBYCLASSNAME
var button=document.getElementsByClassName('button')
console.log(button) ;
//individual elements
console.log(button[2])
//To change styles,name of elements
button[2].textContent = 'java';
button[2].style.fontWeight = 'bold';
// use 'for' loop to loop through an html collection
for(var i = 0 i < button.length; i++){
    button[i].style.backgroundColor = red ;
}
//GETELEMENTSBYTAGNAME
var button=document.getElementsByTagName('p')
console.log(p) ;
//individual elements
console.log(p[2])
//To change styles,name of elements
p[2].textContent = 'java';
p[2].style.fontWeight = 'bold';
// use 'for' loop to loop through an html collection
for(var i = 0 i < p.length; i++){
    p[i].style.backgroundColor = red ;
}
//QUERYSELECTOR
var header = document.querySelector('*class name');
header.style.fontWeight = 'bold' ;
var (*input button) = document.querySelector('input[type="input button"]');
(input button).value='OK'
//QUERYSELECTORALL
var titles = document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent = 'Good day';
//var odd = document.querySelectorAll('li:nth-child(odd)');
//var even = document.querySelectorAll('li:nth-child(even)');

//for(var i = 0; i < odd.length; i++){
//odd[i].style.color = 'red';
//even[i]style.color = 'red';
}

//Tranversing the DOM
var buttonList = document.querySelector('#buttons');
//parentNode
console.log(buttonList.parentNode);
buttonList.parentNode.style.color = 'red';
console.log(buttonList.parentNode.parentNode.parentNode);

//parentElement
console.log(buttonList.parentElement);
buttonList.parentElement.style.color = 'red';
console.log(buttonList.parentElement.parentElement.parentElement);
//childNodes
//console.log(buttonList.childNodes);
console.log(buttonList.children);
console.log(buttonList.children[1]);
buttonList.children[1].style.color = 'red';
//firstElementChild
console.log(buttonList.firstElementChild);
buttonList.firstElementChild.textContent = 'hello';
//lastElementChild
console.log(buttonList.lastElementChild);
buttonList.lastElementChild.textContent = 'hello';
//nextSibling
//console.log(buttonList.nextSibling);
//nextElementSibling
console.log(buttonList.nextElementSibling);
//previousElementSibling
console.log(buttonList.previousElementSibling);

//createElement

//create a span
var newSpan = document.createElement('span');
//Add class
newSpan.className= 'dev';
//Add ID
newSpan.id = 'dev2';
//Add attribute
newSpan.setAttribute('title', 'good day');
//create text node
var newSpanText = document.createTextNode('Hello');
//Add text to span
newSpan.appendChild('newSpanText');

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newSpan);

newSpan.style.color = 'red';

container.insertBefore(newSpan, h1);

