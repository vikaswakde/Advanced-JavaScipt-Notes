//  is created when we "return a function()" from "another function()"
// example

/*
function outer(){
    function inner(){

    }
    // returning "inner() function" from "outer() function"
    return inner
}
*/

// in closure inner function has access to variables in outer function scope, even when outer function has finished execution
// example

/*
function outer(){
    let variableInOuterFunctionScope = 0;
    function inner(){
        variableInOuterFunctionScope++
        console.log(variableInOuterFunctionScope)
    }
    return inner;
}
*/

// here if we call "outer()" twice,
// on first call it will log --> 1
// on second call it will log --> 2

// example

function myAge() {
  let age = 20;
  function ageIncrement() {
    age += 1;
    return "Now my age is " + age;
  }
  function ageDecrementer() {
    age -= 1;
    return "Mom now my age is " + age;
  }
  function ageReset() {
    age = 20;
    return "Shit wake up baby your age is " + age;
  }
  return {
    increment: ageIncrement,
    decrement: ageDecrementer,
    reset: ageReset,
  };
}

let obj = myAge();
console.log(obj.increment());
console.log(obj.decrement());
console.log(obj.reset());

// console.log(obj);
