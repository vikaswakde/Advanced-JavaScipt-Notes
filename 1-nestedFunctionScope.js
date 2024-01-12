// Nested Function Scope

let name = 'vikas'

function outer(){
    let middleName = 'bharat'
    function inner(){
        let lastName = 'wakde'                          
        console.log(name, middleName, lastName)  // <--- starts here; // checks lastname 
    }                                             // if present get it otherwise moves up
    inner()
}
outer()

