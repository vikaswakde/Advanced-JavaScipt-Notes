// 'user' object {}                                                           'key'
// This/ 'getDetails'  is a method on a object 'user' =  {key : value} ---> 'getDetails'
//     'value'
// : function(){}

/*
const user = {
  name: "vikas",
  age: 20,
  getDetails: function () {
    // <--- this is a method
    console.log(`My name is ${this.name} and my age is ${this.age}`);
  },
};

// this.name --> user.name || this.age ---> user.age
user.getDetails();
*/
// class Example

/*
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  describe() {
    console.log(
      `${this.name} is now a a user on this code editor and his age is ${this.age}`
    );
  }
}

const user1 = new User("vikas", 20);
const user2 = new User("Sahil", 19);

user1.describe();
user2.describe();

*/

// be Careful while using ()=> functions, because they do not have "Binding"

/* 
const user = {
  name: "vikas",
  regularFunction: function () {
    console.log(this.name);
  },
  arrowFunction: () => {
    console.log(this.name);
  },
};
*/
// user.regularFunction();
// user.arrowFunction();



// implicit binding //////////////////////////////////////////
/* 
const person = {
    name: 'vikas',
    sayMyName: function(){
        console.log(`My Name is ${this.name}`)
    }
}

person.sayMyName()

*/


// Explicit Binding ///////////////////////////////////////////////////////
        //example, the ""function(){}"" is seprated from ""object{}"" 
        // need to use call() <-- method

/*
const person = {
    name: 'Vikas'
}

function sayMyName(){
    console.log(`My name is ${this.name}`)
}

// explicitly call person object
sayMyName.call(person)


*/



// new Binding
            // we can invoke a function with "new"  keyword


            /*
function Person(name) {
    this.name = name
}


const firstName = new Person('Vikas');
const middleName = new Person('Bharat');
const lastName = new Person('Wakde');

console.log(firstName.name, middleName.name, lastName.name)

*/


// Default Binding
                    // if we just invoke "sayMyName()"
                        // it will search for this.name || name varible in global scope
                            // globalThis.name = 'vikas'



// Order of precedence
    // New Binding ---> const name = new Person("vikas")  -----> new 
    // Explicit Binding --> sayName.call(Person) ----> call()
    // Implicit Binding ---> person.sayMyName()
    // Default Binding   -----> Finds global varible








