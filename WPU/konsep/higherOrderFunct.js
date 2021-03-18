const angka = [-1,2,4,-2,3,5,-3,4,6,-4]


// filter
// const newAngka = angka.filter(angka => angka>0)
// console.log(newAngka)

// map
// const newAngka = angka.map(angka=>angka*2)
// console.log(newAngka)

//reduce
// const newAngka = angka.reduce((accumulator,currentValue)=>
// accumulator+currentValue)
// console.log(newAngka);

// method chaining
const newAngka = angka.filter(angka => angka>=4)
.map(angka=> angka/2)
.reduce((acc,curr)=>acc+curr)

console.log(Math.floor(newAngka))
