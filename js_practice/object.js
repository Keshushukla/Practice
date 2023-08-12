// const mySym = Symbol("Key1");
// const mySym2 = Symbol("Key2");

// const jsUser = {
//     name: "Keshu",
//     age: 21,
//     [mySym] : "mykey1",
//     [mySym2] : "mykey2",
//     "linkedin":"linkedinId",
//     location: "Noida",
//     email: "Keshu@google.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday", "Saturday"]
// }

// // console.log("Accessing Object ------------------");

// // console.log(jsUser.email);
// // console.log(jsUser["email"]);

// // console.log(jsUser.linkedin);
// // console.log(jsUser["linkedin"]);

// // console.log(jsUser[mySym]);
// // console.log( typeof jsUser[mySym2]);

// // console.log(jsUser);


// // ***********JS Freeze *********

// jsUser.email = "keshu@abc.com";
// // console.log(jsUser["email"]);

// // Object.freeze(jsUser);

// jsUser.email = "keshu@def.com";

// jsUser.greeting = function(){
//     console.log(`hello , ${this.name}`);
// }


// // console.log(jsUser.greeting());



/**  +++++++++++++++++  CONSTRUCTOR  +++++++++++++++++  */

const tinderUser = new Object()

tinderUser.id = "123abc";
tinderUser.name = "sam"
tinderUser.isLoggedIn = "False";

// console.log(tinderUser);

/* ++++ Object inside Object  ++++ */

const regularUser = {
    id : '12ab',
    fullname: {
        firstName : "keshu",
        lastName : "Shukla",
    }
}
// console.log(regularUser);
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.firstName);

/** ++++++ Combining objects +++++ */

// const obj1 = {
//     1:'a',
//     2:'b'
// }

// const obj2 = {3:'c', 4:'d',}

// console.log(obj1);
// console.log(obj2);

// const obj3 = {...obj1, ...obj2};
// console.log(obj3);

// const obj4 = Object.assign({},obj1,obj2);
// console.log(obj4);

// const obj5 = Object.assign(obj1,obj2);
// console.log(obj5);
// console.log(obj1);
// console.log(obj1 === obj5);

/** Array Of Objects */

const users = [
    {
        id: '1',
        name:'a'
    },
    {
        id:'2',
        name:'b'
    },
    {
        id:'3',
        name:'c'
    }
]

// console.log(users[1].name);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));

/** ENTRIES PROPERTY */

// console.log(Object.entries(tinderUser));

/** Check whether value is present or not */

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// console.log(tinderUser.hasOwnProperty('isLogged'));

/** ++++++ Object Deconstructor +++++++ */

const course = {
    userName:"keshu",
    courseName:"js",
    price:"9999"
}

console.log(course.courseName);

const {courseName} = course;
console.log(courseName);

const {userName: name} = course;
console.log(name);