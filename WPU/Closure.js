// function init() {
     
//     // let nama = "adit"
//     // let umur = 11
//     return function (nama, umur) {
//         console.log(nama)
//         console.log(umur)
//     }
//     // tampilNama()
//     // console.log(tampilNama)
//     // console.dir(tampilNama())
// }

// let panggilNama = init()
// panggilNama("adit",11)

// function ucapkanSalam(waktu){
//     return (nama)=> `Halo ${nama} selamat, ${waktu}`
// }

//  let sayHallo = ucapkanSalam("Siang")

//  console.log(sayHallo("adit"))


// let add = i => ++counter

//treat as private method
let add = (function (){
    let counter = 0
    return i=> ++counter
}
)()
// counter = 10

console.log(add())
console.log(add())