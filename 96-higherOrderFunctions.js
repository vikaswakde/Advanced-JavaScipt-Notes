// Functions are values
// lExample:
/*
const triple = function(x) {             // -----> Functions can be assigned to varibles 
    return x * 3
}

const vaffle = triple;                    // -----> passed to other functions!

console.log(vaffle(30));

*/

// What are higher order functions good for ? ----> 'Composition'
// --> take one function and pass it in another function.

// Most Useful and basic higher order function is 'filter()'

// what the heck is filter() function ?

// --> filter() is the function on the array[]
//     ----> that accepts another function() as its argument
//          ----> which it will use to return a new filtered version of the array[]

// Let take example but first without filter

const animals = [
  { name: "Fluffykins", species: "rabbit" },
  { name: "Caro", species: "dog" },
  { name: "Hamilton", species: "dog" },
  { name: "Harold", species: "cat" },
  { name: "Harold", species: "cat" },
  { name: "Jimmy", species: "fish" },
  { name: "Monti", species: "dog" },
];
// let's find dog using for loop

/*
const dogs = [];
for (let i = 0; i < animals.length; i++) {
  if (animals[i].species === "dog") {
    dogs.push(animals[i]);
  }
}

console.log(dogs);
*/
/*

// functions that we send into another functions are called callback functions
//  beacuse host function will call back to them!


// Now let's try finding dogs from the animals array[] ---> usig filter function

// const dogs = animals.filter(function(animal){
//     return animal.species === 'dog'
// })

// const dogs = animals.filter((animal)=> animal.species === 'dog')
const isDog = function(animal){
    return animal.species === 'dog'
}

const dogs = animals.filter(isDog);


console.log('hello we are dogs', dogs)
*/




/*

cnst arr = [
  { name: "Fluffykins", species: "rabbit" },
  { name: "Caro", species: "dog" },
  { name: "Hamilton", species: "dog" },
 i { name: "Harold", species: "cat" },
i  { name: "Harold", species: "cat" },
  { name: "Jimmy", species: "fish" },
  { name: "Monti", species: "dog" },
];

const fn = function(animal){
    return animal.species === 'dog'
}

const filter = function(arr, fn){
    // declerative programming
    return arr.filter(fn)
}
*/










/*
const filter  = function(arr, fn){
  // declartive programming         -----> What should be accomplish
  // return arr.filter(fn)          // <-- solution

  // Imperative Programming ----> How should it be accomplised
  const res = []

  for (const i in arr){
    if (fn(arr[i], Number(i))){
      res.push(arr[i])
    }
  }
  return res;
}


*/




const filter = function(arr, fn){
  const res = []
  for(let i =0; i<arr.length; i++){
    if(fn(arr[i], i)){
      res.push(arr[i])
    }
  }
  return res
}

























