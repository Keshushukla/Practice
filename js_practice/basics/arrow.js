/** +++++This+++++ */

const user ={
    name:"Keshu",
    price:499,
    Message: function welcomeMessage() {
        console.log(`${this.name} , welcome`);
        console.log(this);
    }
}

user.Message()
console.log(user.name);
user.name="abc";
user.Message()
console.log(user.name);


