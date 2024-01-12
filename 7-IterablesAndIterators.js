// For..of loop
// String

// const str = "Vikas";

// for (const char of str) {
//   console.log(char);
// }

// /// Array

// const arr = ['v','i','k','a','s'];

// for(const item of arr){
//     console.log(item);
// }

// data structure that impliemet iterable by default are called iterables,
// examples include,
// 'strings' , [arrays], map(), and set() --> built-in iterables!!
// and new construct "For..of" was introduced, to iterate over 'iterables' --> '',[],map(),set()

// // example

// const str  = 'vikas';

// for (const char of str){
//     console.log(char)
// }

// What exactly is an "iterable"

// --> An object{} which impliments 'iterable protocol' is called iterable.

// but wth is 'iterable protocol'?

// let's start from basics'

let obj = {
  [Symbol.iterator]: function () {
    let step = 0;
    const iterator = {
      //// ---> as method at the key --> next : --->
      next: function () {
        ///// ---> this method will return an object{} which conatins 2 properties
        step++;
        if (step === 1) {
          return { value: "Hello", done: false };
        } else if (step === 2) {
          return { value: "World", done: false };
        }
        return { value: undefined, done: true };
      },
    };
    return iterator;
  },
};

for (const word of obj) {
  console.log(word);
}
