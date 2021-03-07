//abstraction repetition    
function repeat(n,action) {
    for(let i=0;i<n;++i){
        action(i)
    }
}

let labels = []
repeat(5,i => {
    labels.push(`Unit ${i+1}`)
})
console.log(labels);

function greatherThan(n) {
    return m => m > n
}

let greaterThan10 = greatherThan(10)
console.log(greaterThan10(11));

//higher order function
function noisy(f) {
    return (...args)=>{
        console.log("calling with",args);
        let result = f(...args)
        console.log("called with",args,", returned",result);
        return result
    }
}
/**
 * function called below means passed the function noisy with 
 * Math.min and also passed function inside the noisy function
 * with (3,2,1)
 * f(...args) it means that f refers to the Math.min and (...args)
 * and the result is min value of the (...args)
 */
noisy(Math.min)(3,2,1)

function unless(test,then) {
    if(!test) then();
}
repeat(3,n => {
    unless(n%2==1,() => {
        console.log(n," is even");
    })
})

//filtering array
function filter(array, test) {
    let passed = []
    for(let element of array){
        if(test(element)){}
        passed.push(element)
    }
    return passed
}
function map(array,transform) {
    let mapped = []
    for (let element of array){
        mapped.push(transform(element))
    }
    return mapped
}

//reduce function
function reduce(array,combine,start) {
    let current = start
    for(let element of array){
        current = combine(current,element)
    }
    return current
}

console.log(reduce([1,2,3,4],(a,b)=>a+b,0));

let horseShoe = "🐴👟"
console.log(horseShoe);

//exercise
let arrays = [[1, 2, 3], [4, 5], [6]]
console.log(arrays.reduce((flat,current)=> flat.concat(current),[]));

function loop(start,test,update,body){
    for(let i = start;test(i);i=update(i)){
        body(i)
    }
}

loop(4,n => n>0,n=>n-1,console.log)

function loop(start, test, update, body) {
    for (let value = start; test(value); value = update(value)) {
      body(value);
    }
  }
  
loop(3, n => n > 0, n => n - 1, console.log);