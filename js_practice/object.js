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

console.log("Accessing Object ------------------");

console.log(jsUser.email);
console.log(jsUser["email"]);

console.log(jsUser.linkedin);
console.log(jsUser["linkedin"]);

console.log(jsUser[mySym]);
console.log(jsUser[mySym2]);

