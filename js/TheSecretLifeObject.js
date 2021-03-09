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


function Car(type) {
    this.type = type
}
let BMW = new Car("BMW")
Car.prototype.spec = function(){ console.log(`Car Type: ${this.type}`)
}
Car.prototype.horn = sound => console.log(` Sound : ${sound}`)

BMW.spec()
BMW.horn("Beep")