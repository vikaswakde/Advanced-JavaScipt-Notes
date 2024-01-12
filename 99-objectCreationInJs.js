// Basic object
/*
let cat = {
  sound: "meow",
  talk: function () {
    console.log(this.sound);
  },
};

/*
// cat.talk(); --> meow
let talkFunction = cat.talk  // <-- here you are assigning "method: ()=>{}" to an 'variable'
                            // bcoz, JS is also a functional Programming Language/
*/

/*
let talkFunction = function () {
  console.log(this.sound);
};

// function.bind() <---bind forces "this." keword to use (anything here)
let boundFunction = talkFunction.bind(cat);

// boundFunction() // --->  wtf this is giving "undefined"

// example 2

let button = document.getElementById("myNiceButton");

button.addEventListener(
    'click',
    cat.talk.bind(cat)
)

*/
/*

///// bind ----> explicit way to define what we actually mean when we use 'this'
/// like in below example for 'this' ----> in talk() we explicitly said we want 
////// we want 'this' to be ----> 'boromir'
//////// therefore we used, -----> this.bind(boromir)
        //////            ----> which means --> this.sound from 'boromir'

function talk(){
    console.log(this.sound)
}
// talk()  --> undefined

let boromir = {
    sound: 'One does not simply walk into mordor!'
}

// console.log(boromir.sound) ---> the above sentence

let talkBoundToBoromir = talk.bind(boromir)   // ---> we bounded the talk() with boromir{} using 'bind'


// talkBoundToBoromir()  ---> also the above sentence

*/
/*
//Example 3

let talk = function(){
    console.log(this.sound)
}

// talk() ----> returns undefined

let boromir = {
// refernce to the function <--- as a property
// here we placed 'talk' function as a value property to 'blabber' key property
    blabber: talk,
    sound: 'One does not simply walk into mordor',
}

// boromir.blabber()   ----> returns the above sentence ??? how????  
//                      ----> here we are calling 'property' on an object
                    //       --> calling key property 'blabber': on object 'boromir'

// Here JavaScript infered that blabber: should be on boromir
                //  this should be "boromir"
                //  therefore this.sound ---> "this.boromir"

// talk is just getting refernced, it does not change 
// if we call vanilla talk()----> it will give us 'undefined' 


// now what if we define a new varible 'speak' and assign assing it with boromir.blabber 
// and then call 'speak' will it give us 'undefined' or 'the sentence" ???
// let's see

// let speak = boromir.blabber

// speak() ---> this gives us 'undefined' because speak refers to talk() function 

//  if we want 'speak' be have the sentence returne, we have to make use of 'bind'

// because, bind make a carbon copy of the function--> and "this"
                                                // ---> has it's value bound to specific value 
boromir.blabber = talk.bind(boromir)

// now if you run speak ; it will have this. assined as boromir ---> beause we excpilicty bound that using "bind"  
let speak = boromir.blabber


// speak()  ----> this now returns the 'sentence' 

*/


// challenge for me 
// i think i am i am 100% sure it answer is 'undefined' 
// let's see if i am correct?


let talk = function(){
    console.log(this.sound)
}

let boromir = {
    blabber: talk,
    sound: 'One does not simply walk into mordor!'
}

let gollum = {
    jabber: boromir.blabber,
    sound: 'My preciousss...'
}

// so the question was what will happend now if we call ? 

gollum.jabber()     // ---> since i have coded this far i am now not 100% sure if it will be 'undefind'
                            //  i think 7% chance it will return sentence, 
                            //  because i think that we are just calling it, not definig it?????
                            // who knows let' check 





// 😲 it was nither of the both, i was totally wrong, it was the sentece '''My preciouss......''' 

// ok.... i should have not been in that hurry to come to conclusion, 
//  could have given notice to sound in gollum too.....
// anyways, let's move on....
