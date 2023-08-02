const mySym = Symbol("Key1");
const mySym2 = Symbol("Key2");

const jsUser = {
    name: "Keshu",
    age: 21,
    [mySym] : "mykey1",
    [mySym2] : "mykey2",
    "linkedin":"linkedinId",
    location: "Noida",
    email: "Keshu@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log("Accessing Object ------------------");

// console.log(jsUser.email);
// console.log(jsUser["email"]);

// console.log(jsUser.linkedin);
// console.log(jsUser["linkedin"]);

// console.log(jsUser[mySym]);
// console.log( typeof jsUser[mySym2]);

// console.log(jsUser);


// ***********JS Freeze *********

jsUser.email = "keshu@abc.com";
// console.log(jsUser["email"]);

// Object.freeze(jsUser);

jsUser.email = "keshu@def.com";

jsUser.greeting = function(){
    console.log(`hello , ${this.name}`);
}


console.log(jsUser.greeting());