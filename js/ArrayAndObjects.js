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
        events: ["weekend", "cycling", "peanuts", "beer"], squirrel: true
    }
]




let myJournal = []
//creating function that makes easier to add data to the journal
function addEntry(events, squirrel) {
    myJournal.push = ({ events, squirrel })
}
//adding data to the array of journal
addEntry(["work", "touched tree", "pizza", "running", "television"], false)
addEntry(["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed teeth"], false)
addEntry(["weekend", "cycling", "break", "peanuts", "peanuts"], true)
console.log(myJournal);

let obj = { value: 10 }
let obj1 = obj
console.log(obj1 == obj);
let obj0 = { value: 10 }
console.log(obj0 == obj1);

obj.value = 20 //this is make the contents at the obj1 changed, caused by the changes of properties of obj

console.log(obj, obj1);


const score = { home: 0, visitors: 0 }
score.home = 1// this is allowed
console.log(score);
// score = {home :0,visitors:1}//but this one isn't allowed


//phi function

/**
 * n11 : squirrel true, pizza true
 * n00 : squirrel false, pizza false
 * n01: squirrel false, pizza true
 * n10: squirrel true, pizza false
 * 
 * n1. : squirrel true
 * n0. : squirrel false
 * n.1 : pizza true
 * nx. : pizza false
 * 
 *The formula => phi = (n11xn00) - (n10xn01)/sqrt(n1. x n0. x n.1 x n.0)
 */

function phi(table) {
    return (table[3] * table[0] - table[2] * table[1]) /
        Math.sqrt((table[2] + table[3]) *
            (table[0] + table[1]) *
            (table[1] + table[3]) *
            (table[0] + table[2]))
}
function tableFor(event,journal) {
    let table = [0,0,0,0]
    for (let i=0;i<journal.length;++i){
        let entry = journal[i]
        let index = 0
        if (entry.events.includes(event)) index+=1
        if (entry.squirrel) index+=2
        table[index]+=1
    }
    return table
}
//console.log(tableFor("work",journal));
//let table = tableFor("work",journal)
//console.log(phi(table));

function journalEvents(journal) {
    let events = []
    for(let entry of journal){
        for (let event of entry.events){
            if(!events.includes(event)) events.push(event)
        }
    }
    return events
}

for(let event of journalEvents(journal)){
    console.log(event, ": ",phi(tableFor(event,journal)));
}

for (let event of journalEvents(journal)){
    let correlation = phi(tableFor(event,journal))
    if (correlation>0.1||correlation<-0.1) console.log(event +": ",correlation );
}

//unshift and shift
let todoList = []
//add task to the list
function remember(task) {
    todoList.push(task)
}
//get task 
function getTask(task) {
    return todoList.shift(task)
}
//remember task which urgently 
function rememberUrgently(task) {
    todoList.unshift(task)
}

remember("sleep")
rememberUrgently("coding")
console.log(todoList);
