let num = 33;

let someObject = Object(num);
// console.log(someObject);
// console.log(typeof someObject);// o/p --> [Number: 33]    object

let str = "3abc";

let someObject2 = Object(str);
// console.log(someObject2);
// console.log(typeof someObject2);// o/p --> [String: '3abc'] object


// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);// str ya num mei jo pehle hota hai o/p usi mei aata hai
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2"); // o/p -->32

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

// console.log(null > 0);
// console.log(null == 0);
//  console.log(null >= 0); >= aur == different way mei perform krte hai . >=n null ko 0 mei convert krta hai

// console.log(undefined === 0);
// console.log(undefined >= 0);
// console.log(undefined < 0);

//  console.log("2" > 1);
//  console.log("02" > 1);


// /**********************   Using Symbol     ****************************************/
// const id = Symbol('123');
// const anotherId = Symbol('123');

// // console.log(id === anotherId);
// const bigNum = 9876543211234567891234534567823456787654323456789087654323456789063456787234567890n;
// // console.log(typeof bigNum);
// const arr = [1,2,3,4,5];
// console.log(typeof arr);

// const str223 = new String("Keshu_Shukla");
// console.log(str223.length);
//     const anotherStr = str223.slice(-10,5);
//     console.log(anotherStr);

//+++++++++++++++Guess The Dice Number++++++++++++++++++++++++++/
// function diceNumber(){
//     const min = 1;
//     const max = 6;
//     console.log((Math.floor(Math.random() * (max - min + 1))+min));
// }

// console.log(diceNumber());
// console.log(diceNumber());
// console.log(diceNumber());



//++++++++++   DATE  ++++++++++++++++++++++++++++++++++++++++++++++

let myDate = new Date();
// console.log(myDate.toDateString());
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());
// console.log(myDate.getTimezoneOffset());


let createdDate = new Date(2023 , 0 , 23 , 15 , 35 ,6);
console.log(createdDate.toLocaleString());