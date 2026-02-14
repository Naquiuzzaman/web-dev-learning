//----------------------------------
// Callback, Promises, & Async-await
//----------------------------------

//Example of Asynchoronous JavaScript using setTimeout

console.log("one");
console.log("two");

setTimeout(
    () => {
        console.log("Hello How Are You");
    },4000
)

console.log("three");
console.log("four");

//-------------------
//Example of Callback 
//-------------------

function sum (a,b){
    console.log(a+b);
}
function Calculator (a,b,callback){
    callback(a,b);
}
console.log(Calculator(5,6,sum));