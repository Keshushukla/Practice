let arr = [1,2,3,4,5];
console.log(arr);

const myArr = new Array(0,1,2,3,4,5);
console.log(myArr);

console.log("SLICE ----------");

const arrn1 = myArr.slice(1,3);
console.log(arrn1);
console.log(myArr);

console.log("SPLICE ---------");

const arrn2 = myArr.splice(1,3);
console.log(arrn2);
console.log(myArr);