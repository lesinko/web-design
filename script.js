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