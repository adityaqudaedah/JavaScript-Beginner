//abstraction repetition    
function repeat(n,action) {
    for(let i=0;i<n;++i){
        action(i)
    }
}

let labels = []
repeat(5,i => {
    labels.push(i)
})
console.log(labels);