//For handling less bugs.
"use strict";

//Datatypes and arithmetic operator.
let a= 36;
let b= "Hello world";
let c= 2;
console.log(a);
console.log(b);
console.log(a+c);

//Functions.
function greet(){
    console.log("Good morning");
}
greet();

//Objects
let obj1={
    r:3,
    j:9,
    func: function func(number) {
        console.log("The number is "+number);
    }
}
console.log(obj1);
console.log(obj1.func(60));

//Events.
document.addEventListener("click",function click(){
    alert('You clicked me'); //(Prompt and Confirm can also be used.)
    console.log("clicked");
})

//Loops.
let arr=[3,6,9];
arr.forEach(element => {
    console.log(element);
});

//arrow function
let func={
    a:this,
    myfunc: (number)=>{
        console.log("The number is "+number+this);
    }
}
func.myfunc(5);
console.log(func.a);

//Callbacks
setTimeout(() => {
    console.log("I am setTimeout");
}, 2000);

setInterval(() => {
    console.log("I am setInterval");
}, 2000);