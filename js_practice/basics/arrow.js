/** +++++This+++++ */

// const user ={
//     name:"Keshu",
//     price:499,
//     Message: function welcomeMessage() {
//         console.log(`${this.name} , welcome`);
//         console.log(this);
//     }
// }

// user.Message()
// console.log(user.name);
// user.name="abc";
// user.Message()
// console.log(user.name);
// console.log(this);


/** ++++ Arrow Function ++++ */

// ++++++++++++IMPLICIT RETURN+++++++++++++++++
// const addTwo = (num1,num2) => (num1+num2)

// console.log(addTwo(2,3));

// const addTwo = () => ({userName:"Keshu"})
// console.log(addTwo());

// ++++++++++++EXPLICIT RETURN+++++++++++++++++
// const addTwo = (num1,num2) =>{
//     return num1 + num2;
// }
// console.log(addTwo(2,3));




/** +++++++ IIFE ++++++++++ */

// ++++++++Named iife+++++++++++++
( function chai(){
    console.log("Named IIFE");
})();

// +++++++++ Unnamed iife ++++++++++++++++
(()=>{
    console.log("Unnamed IIFE");
})();

// ++++++++++++++Passing Parameter To IIFE+++++++++++++++++
((name) => {
    console.log(`Name is ${name}`);
})("Keshu");

(function code(name){
    console.log(`Name is ${name}`);
})("abc")