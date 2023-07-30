// let arr = [1,2,3,4,5];
// console.log(arr);

// const myArr = new Array(0,1,2,3,4,5);
// console.log(myArr);

// console.log("SLICE ----------");

// const arrn1 = myArr.slice(1,3);
// console.log(arrn1);
// console.log(myArr);

// console.log("SPLICE ---------");

// const arrn2 = myArr.splice(1,3);
// console.log(arrn2);
// console.log(myArr);

// console.log("Flat -------------");

// const anotherArray = [1,2,3,[4,5],5,[6,[7,8,9]]];
// const usableArray = anotherArray.flat(3);

// console.log(usableArray);


console.log("Spread ----------------");

const mHeroes = ["IronMan" , "Hulk" , "Hawkeye"];
const dHeroes = ["SuperMan" , "Flash" , "BatMan"];
const iHeroes = ["ShaktiMan" , "Krish"];

const allHeroes = [...mHeroes , ...dHeroes , ...iHeroes];
console.log(allHeroes);
