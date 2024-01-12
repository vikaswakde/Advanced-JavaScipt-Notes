// Protoype is a property that points to an object{}
// new defined function can be made avaible on every instance of function.
// --> share properties and methods accross instances

// example

/*
function Person(fName, lName) {
    this.firstName =fName;
    this.lastName = lName; 
}


    ---> function that is used with 'new' keyword is called 'constructor function'
const person1 = new Person('Sanjay', 'Kumar');
const person2 = new Person('Sanjana', 'Kumari');
                                                                // funciton
// now here if we make use of Proptotype property, we can make 'Person()'  avaible to every instance of new function defined ex: here we use 'getFullName()' function

Person.prototype.getFullName = function(){
    return this.firstName + ' ' + this.lastName;
}


// now we can log any person using 'getFullName()' function 

console.log(person1.getFullName())
console.log(person2.getFullName())

*/

// Inheritence in javascript using prototypes

// Assigning the prototype

/* 
function talk(){
    console.log(this.sound)
}

let animal = {
    talk: talk,
}

let cat = {
    sound : 'meow!'
}

let dog = {
    sound: 'woof!'
}

Object.setPrototypeOf(cat, animal)
Object.setPrototypeOf(dog, animal)

cat.talk()
dog.talk()

*/

///// Prototype Chaining
/*

function talk(){
    console.log(this.sound)
}

let animal = {
    talk
}

let dog = {
    sound: 'woof!'
}

Object.setPrototypeOf(dog, animal)
dog.talk()


// chaining 
let prarieDog = {
    howl: function() {
        console.log(this.sound.toUpperCase())
    }
}

Object.setPrototypeOf(prarieDog, dog)
prarieDog.howl()

*/

// Prototype
/*

function Person(fName, lName) {
  (this.firstName = fName), (this.lastName = lName);
}

const person1 = new Person("Ajay", "Kumar");  // <--- constructor function 
const person2 = new Person("Sonali", "Pilai");

Person.prototype.getFullName = function () {
  return this.firstName + " " + this.lastName;
};

console.log(person1.getFullName(), person2.getFullName());
*/

//
// Prototypal Inheritence

function Person (fName, lName){
  this.firstName = fName,
  this.lastName = lName
}

Person.prototype.getFullName = function(){
  return this.firstName + ' ' + this.lastName
}

function SuperHero(fName, lName){
  Person.call(this, fName, lName)
}

SuperHero.prototype = Object.create(Person.prototype)


SuperHero.prototype.fightCrime = function(){
  console.log("Fighting Crime")
}

const batman = new SuperHero('Bruce', 'Wayne')

SuperHero.prototype.constructor = SuperHero;

console.log(batman.getFullName())