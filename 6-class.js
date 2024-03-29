class Person {
    constructor(fName, lName) {
        this.firstName = fName
        this.lastName = lName
    }

    sayMyName(){
        return this.firstName + ' ' + this.lastName
    }
}

const classP1 = new Person("Bruce", "Wayne")
console.log(classP1.sayMyName())


class SuperHero extends Person {
    constructor(fName, lName){
        super(fName, lName)  // <---- super's calls the constructor of main func
        this.isSuperHero = true
    }

    fightCrime () {
        console.log("Fighting Crime!")
    }
}

