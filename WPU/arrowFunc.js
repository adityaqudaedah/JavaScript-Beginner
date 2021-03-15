//instances of arrow Function
// no.1
// const tampilNama = (nama) => {
//     console.log(`Hallo ${nama}, semoga harimu menyenangkan!`);    
// }
// tampilNama("adit")

// no.2
// const tampilNama = (nama,waktu) => {
//     return `Hallo ${nama}, selamat ${waktu}`
// }
// console.log(tampilNama("Adit","Siang"))

// no.3
const tampilNama = nama => {
    return `Hallo ${nama} `
}
console.log(tampilNama("Adit"))

// no.4
const sayHello = () => `Hello world!`
console.log(sayHello())

//Map

let mhs = ['Rahmat', 'aditya','qudaedah']

// let jumlahHuruf = mhs.map(nama => nama.length)
// console.log(jumlahHuruf)

let jmlHuruf = mhs.map(nama=>({
    nama : nama,
    jumlahHuruf : nama.length
}))
console.table(jmlHuruf);