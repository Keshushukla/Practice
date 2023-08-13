// function logInUserName(userName){
// if(!userName){
//     console.log("Please enter a name");
// }
// else{
//     console.log(`${userName} just logged in`);
// }
// }
    

// logInUserName()


/** +++++REST OPERATOR++++ */

// function calcPrice(num1 , num2 , ...num3){
//     console.log(num1);
//     console.log(num2);
//     console.log(num3);
// }

// calcPrice(100, 200, 300, 400, 500, 600, 700, 800);

/** ++++Passing Object to Function++++ */

// const user = {
//     name :"Keshu",
//     price :"99"
// }

// function handleObject(anyObject) {
//     console.log(`User Name is ${anyObject.name} and price is ${anyObject.price}`);
// }

// // handleObject(user)
// handleObject({
//     name :"Keshu",
//     price :"99"
// })


/** +++++ Passing array To Function +++++ */

const arr = [1, 2, 3, 4, 5]

function handleArray(getArr) {
    console.log(getArr[1]);
}

// handleArray(arr)
handleArray([1, 2, 3, 4, 5])