// encapsulation
let rabbit = {}
Rabbit.speak = function (line) {
    console.log(`The rabbit says '${line}'`)
}
Rabbit.speak("hello mother fucker")

function speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`)
}
let hungryRabbit = { type: "hungry", speak }
let whiteRabbit = { type: "white", speak }

whiteRabbit.speak("I am the one")
hungryRabbit.speak("i could use carrot right now")

speak.call(whiteRabbit, "Hello mother fucker wold")


function normalize() {
    console.log(this.coords.map(n => n / this.length))
}

normalize.call({ coords: [0, 2, 3], length: 5 })

console.log(Object.prototype)
console.log(Object.getPrototypeOf(Object.prototype))

let protoRabbit = {
    speak(line) {
        console.log(`The ${this.type}, rabbit says '${line}'`)
    }
}
let killerRabbit = Object.create(protoRabbit)
killerRabbit.type = "Killer"
killerRabbit.speak("SKREEE")

console.log(Function.prototype)

function makeRabbit(type) {
    let rabbit = Object.create(protoRabbit)
    rabbit.type = type
    return rabbit
}

//function bellow treated as a contructor
function Rabbit(type) {
    this.type = type
}
Rabbit.prototype.speak = function (word) {
    console.log(`The ${this.type} rabbit says '${word}'`)
}

let weirdRabbit = new Rabbit("Weird")
weirdRabbit.speak("Y'all bitches")

Rabbit.prototype.toString = function () {
    return `a ${this.type} rabbit`
}
console.log(String(weirdRabbit));

function Car(type) {
    this.type = type
}
let BMW = new Car("BMW")
Car.prototype.spec = function(){ console.log(`Car Type: ${this.type}`)
}
Car.prototype.horn = sound => console.log(` Sound : ${sound}`)

BMW.spec()
BMW.horn("Beep")


//class notation
class Hero{
    constructor(name,type, health) {
        this.name = name
        this.type = type
        this.health = health
    }

    //methods
    info(){
        console.log(`
        Hero names : ${this.name}
        Hero type : ${this. type}
        Helath : ${this.health}`)

    }
}

let balmond = new Hero("Balmond","Tank",100)
balmond.info()

//overriding derived properties
Hero.prototype.strength = 100
console.log(balmond.strength)
//overriding
balmond.strength = 120

console.log(balmond.strength)
console.log(Hero.prototype.strength);

console.log(Object.prototype.toString.call([1,2]))

//class as expression and statement
let object = new class{
    getWord(){
        return "hello"
    }
}

console.log(object.getWord())

//Map
let ages = {
    Boris : 32,
    Liang : 22,
    Julia : 12
}

console.log(`Julia is ${ages["Julia"]}`)
console.log(`is Jack's age known? `, "Jack" in ages)

let age = new Map()
age.set("Boris",11)
age.set("Julia",22)
age.set("Liang",33)
console.log(`Julia is ${age.get("Julia")}`);
console.log(age.has("toString"))
console.log("Is Jack's age known?", age.has("Jack"))

console.log({x: 0}.hasOwnProperty("x"))
console.log({x: 0}.hasOwnProperty("toString"))