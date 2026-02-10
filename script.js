//PRACTICE QUESTION

//Q.1

// let newBtn = document.createElement("button");
// newBtn.innerText = "click here !";
// newBtn.style.color="white";
// newBtn.style.backgroundColor= "red";
// document.querySelector("body").prepend(newBtn);

//Q.2

// let para = document.querySelector("p");
// para.classList.add("newClass");


// CHAPTER 8 EVENTS 

// let btn1 = document.querySelector("#btn1");
// btn1.onclick = () => {
//    console.log ("btn1 was clicked");
//    let a = 25;
//    a++;
//    console.log(a);
// }
// Now for div 
// let div = document.querySelector("div");
// div.onmouseover = () =>{
//     console.log("you are inside div");

// }
//TOPIC EVENT OJECT
// let btn1 = document.querySelector("#btn1");
// btn1.onclick = () => {
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX clientY);
// };

//TOPIC EVENT LISTENERS
// btn1.addEventListener("click",()=>{  // for adding 
//  console.log("button1 was - handler1");
// });

// btn1.addEventListener("click",()=>{
//  console.log("button1 was clicked - handler2");
// });
// const handler3 = () =>{
 //console.log("button1 was clicked- handler3");
//};

// btn1.addEventListener("click",()=>{
//  console.log("button1 was clicked - handler4");
// });
// btn1.removeEventListener("click" ,handler3); // it is use for removing the handler function 
