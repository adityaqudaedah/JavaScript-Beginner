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

let obj = {value:10}
let obj1 = obj
console.log(obj1==obj);
let obj0 = {value : 10}
console.log(obj0==obj1);

obj.value = 20 //this is make the contents at the obj1 changed, caused by the changes of properties of obj

console.log(obj,obj1);


const score = {home : 0, visitors:0}
score.home = 1// this is allowed
console.log(score);
score = {home :0,visitors:1}//but this one isn't allowed