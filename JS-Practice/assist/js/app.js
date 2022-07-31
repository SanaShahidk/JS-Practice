// // function closure
// var i = 10;
// function show(){
//     var j = 20;
//     document.write(j + "<br>")
//     document.write(i + "<br>")
// }
// show();

// function outerfunction(){
//     var j = "J is a local variable of outer function";
//     document.write(j + "<br>")
//     function innerfunction(){
//         var k = "k is inner variable of Inner function";
//         document.write(k + "<br>")
//     } 
//     innerfunction();
//     document.write(j + "<br>")
// }
// outerfunction()
// const item = document.querySelector("#item")
// const toDoBox = document.querySelector("#to-do-box")

// item.addEventListener(
//     "keyup",
//     function(event) {
//         if (event.key == "Enter") {
//             addToDo(this.value)
//             this.value = ""
//         }
//     }
// )

// const addToDo = (item) => {
//     const listItem = document.createElement("li");
//     listItem.innerHTML = `
//          ${item}
//         <i class="fas fa-times"></i>
//     `;

//     listItem.addEventListener(
//         "click",
//         function() {
//             this.classList.toggle("done");
//         }
//     )
//     listItem.querySelector("i").addEventListener(
//         "click",
//         function() {
//             listItem.remove()
//         }
//     )
//     toDoBox.appendChild(listItem)
// }



// const toDoBox = document.querySelector("#btn")


// document.getElementById("btn").onclick=function(){
//     window.alert("sana")
// }

// function

// function sum (a,b){
//     return a+b;

// }
// document.write(sum(2,3))

// /arrow function
// let sumA = (a,b) => {
//     return a+b;
// }
// document.write(sumA(2,3))

// one line function

// let double = (a) => 2*a;
//     document.write(double(20));

    // let sumA = (A,B) => {
    //     return 2*a
    //     return a+b
    // }
    // document.write(sumA(2,3))


    // function random () {
    //     return Math.rendom();
    // }
    //    document.write(random(1));

    // let return = () => Math.random();
    // document.write(random(1))

       
// addeventlestern

// document.addEventListener('click',function() {
//         console.log("clicked");
// });


// ?one line function

// document.addEventListener('click',() => console.log("clicked"));

//object destruction 

// const contact={
//     name:'sana',
//     fathername:'shahid',
//     age:18,
// }
// let{name,fathername,age,}=contact
// console.log(name)
// console.log(fathername)
// console.log(age)




// closoure example outer function


// function init(){
//     var name = "sanashahid";
//     var fathername = "shahid"
//     var class = "web"
//     function display(){ 
//         document.write(name +"<br>");
//         document.write(fathername + "<br>");
//         document.write(class)
//     } 
//     display();
// }
// init();



// closour example inner function

// function show() {  
//     var j = "j is a local variable of outer function";
//     function innerfunc(){
//         var k = "k is a loacl variable of inner function";
//         document.write(k + "<br>");
//         document.write(j + "<br>")
//     }
//     innerfunc();
//     document.write(k + "<br>");
//     document.write(j + "<br>");
    
// }
// show();




import {add} from "./exapnce";

// import {add} from "./library"

// import {add} from "./utility"


const x = 5;
const y = 6;
console.log(add(x,y));









