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