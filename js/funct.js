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
console.log("this is work too ",sqr1(4,"hello world"));

const horn = () => {
    return "Toot"
}

console.log(horn());

//call stack
function chicken(){
    return egg()
}

function egg(){
    return "i came first"
}

console.log(chicken())

//optional argument
function minus (a,b){
    if (b==undefined) return -a
    return a-b
}
console.log(minus(1))
console.log(minus(10,11))

function pow2(base, exp =2){
    if (exp==0)return 1;
    return base * pow2(base,exp-1)
}
console.log(pow2(2));
console.log(pow2(2,3));

function wrapValue(n){
    let local = n
    return () => local 
}
let wrap1 = wrapValue(100)
let wrap2 = wrapValue(10)
console.log(wrap1())
console.log(wrap2());