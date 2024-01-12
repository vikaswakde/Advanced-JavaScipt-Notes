/*
function Person(saying) {
  this.saying = saying;
}

Person.prototype.talk = function () {
  console.log("I say: ", this.saying);
};

let crockforg = new Person("SEMICOLONS!!!!1one1one");

crockforg.talk()
*/

// "new"  ---> 
                //  step 1)---> creates a emtpy object{}
                //  step 2) ---> checks the 'prototype' property
                //  step 3) ---> call the function with the new emtpy object it created in step 1
                //  step 4) return the new object it created
 

// Rebuild 'new' function 

// 4 things "new" does
        // 1) Create a new object
        // 2) Set the prototype
        // 3) Execute constructor with 'this'

// function new(constructor) {
//      let obj = {} 
//      Object.setPrototypeOf(obj, constructor.prototype)
// }