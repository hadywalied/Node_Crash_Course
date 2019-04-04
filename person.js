class person {
    constructor(name,age){
        this.age = age ;
        this.name = name
    }

    greeting() {
        console.log(`my name is ${this.name} and i am ${this.age}`)
    }


}

module.exports = person; 