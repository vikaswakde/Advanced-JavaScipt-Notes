// a curryable function is simply a function() that takes every
// (argument) by itself and then returns new function() --> that expects the next
// (argument/dependency) --> until all dependences have been fulfilled,
// and the final value is returned.

// Example
let atmMachine = (insertCard) => (enterPinNumber) => (requestAmount) => {
  return `Here is your cash Rs ${requestAmount} only`;
};

let output = atmMachine(true)(1234)(2000);

console.log(output);
