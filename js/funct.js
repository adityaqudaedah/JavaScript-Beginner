// square function
const square = function (x) {
    return x * x
}
console.log(square(4))

//power function
let pow1 = function (base, exponent) {
    if (exponent == 1) return base;
    return base * pow2(base, exponent - 1)
}
console.log(pow2(2, 5))

//nested function
const humus = function (factor) {
    const ingredient = function (amount, unit, name) {
        let ingredientAmount = amount * factor
        if (ingredientAmount > 1) {
            unit += 1
        }
        console.log('${ingredientAmount} ${unit} ${name}')
    }
    ingredient(1, "can", "chickpeas")
}

//anohter function 
console.log("The future says :", future())
function future() {
    return "You'll never have flying cars"
}

//arrow function
const power = (base, exp) => {
    let result = 1
    for (let i = 0; i < exp; i++) {
        result *= base;
    }
    return result
}
console.log(pow2(2, 3));

// when function only have single argument use this structure
const sqr1 = (x) => {
    return x * x
}

const sqr2 = x => x * x;

console.log("this is sqr1 : ", sqr1(10));
console.log("this is sqr2 : ", sqr2(10));
console.log("this is work too ", sqr1(4, "hello world"));

const horn = () => {
    return "Toot"
}

console.log(horn());

//call stack
function chicken() {
    return egg()
}

function egg() {
    return "i came first"
}

console.log(chicken())

//optional argument
function minus(a, b) {
    if (b == undefined) return -a
    return a - b
}
console.log(minus(1))
console.log(minus(10, 11))

function pow2(base, exp = 2) {
    if (exp == 0) return 1;
    return base * pow2(base, exp - 1)
}
console.log(pow2(2));
console.log(pow2(2, 3));

//wrap value
function wrapValue(n) {
    let local = n
    return () => local
}
let wrap1 = wrapValue(100)
let wrap2 = wrapValue(10)
console.log(wrap1())
console.log(wrap2());

//recursion
function findSolution(target) {
    function find(current, history) {
        if (current == target) return history
        else if (current > target) return null
        else return find(current + 5, "(%s)+5", history) || find(current * 3, "(%s)*3", history)
    }
    return find(1, "1")
}

console.log(findSolution(3));

//growing function
/*
function printFarmInventory(cows, chickens){
    let cowString = String(cows)
    while (cowString.length<3) {
        cowString = "0"+ cowString
    }
    console.log("%s Cows",cowString);
    
    let chickenString = String(chickens)
    while (chickenString.length<3) {
        chickenString = "0"+chickenString
    }
    console.log("%s Chickens\n%s Cows", chickenString,cowString);
}
printFarmInventory(10,10)
*/
function zeroPad(n, labels) {
    let stringNumber = String(n)
    while (stringNumber.length < 3) {
        stringNumber = "0" + stringNumber
    }
    console.log("%s %s", stringNumber, labels);
}

function printFarmInv(cows, chickens, pigs) {
    zeroPad(cows, "Cows")
    zeroPad(chickens, "Chickens")
    zeroPad(pigs, "Pigs")
}

//exercise

//min function
function min(a, b) {
    if (a < b) return a
    else if (b < a) return b
    return undefined
}
console.log(min(200, 1));

//bean counting
function countB(word) {
    const target = "B"
    var result = 0;
    for (let i = 0; i < String(word).length; ++i) {
        if (word[i] == target) result += 1
    }
    return result
}
function countChar(word, target) {
    var result = 0;
    for (let i = 0; i < String(word).length; ++i) {
        if (word[i] == target) result += 1
    }
    return result
}
console.log(countB("BaBa"));
console.log(countChar("Baba", "b"));

//array
let listOfNumbers = [1, 2, 3, 4]
console.log(listOfNumbers[0])

let doh = "Doh"
console.log(doh.toUpperCase());

let sequence = [5, 4, 3, 2]
sequence.push(1)
sequence.pop()
console.log(sequence)

//objects
let day1 = {
    squirrel: false,
    events: ["work", "", "touched tree", "pizza", "running"]
}
console.log(day1.squirrel);
day1.wolf = false

console.log(day1.wolf);

let anObject = { left: 1, right: 2 }
console.log(anObject.left);
console.log(anObject.right);
delete anObject.left
console.log(anObject.left);
console.log("left" in anObject);
console.log("right" in anObject);

console.log(Object.keys({ x: 0, y: 0 }));

let objA = { a: 1, b: 2 }
Object.assign(objA, { b: 3, c: 4 })
console.log(objA);

let journal = [
    {
        events: ["work", "touched tree", "pizza", "running", "television"],
        squirrel: false
    },
    {
        events: ["work", "ice cream", "cauliflower", "lasagna", "brushed teeth"],
        squirrel: false
    },
    {
        events: ["weekend", "cycling", "peanuts", "bear"], squirrel: true
    }
]