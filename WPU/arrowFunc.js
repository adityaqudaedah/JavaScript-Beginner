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
// const tampilNama = nama => {
//     return `Hallo ${nama} `
// }
// console.log(tampilNama("Adit"))

// no.4
// const sayHello = () => `Hello world!`
// console.log(sayHello())

//Map

// let mhs = ['Rahmat', 'aditya','qudaedah']

// let jumlahHuruf = mhs.map(nama => nama.length)
// console.log(jumlahHuruf)

// let jmlHuruf = mhs.map(nama=>({
//     nama : nama,
//     jumlahHuruf : nama.length
// }))
// console.table(jmlHuruf);


// this concept on arrow function
// const Mahasiswa = function(){
//     this.nama = "Rahmat"
//     this.umur = 21

//     this.sayHello = function(){
//         console.log(`Hallo nama saya ${this.nama}, umur saya ${this.umur}`);
//     }
// }

// const rahmat = new Mahasiswa()

// const mhs = {
    // nama: "rahmat",
    // umur: 21,
    // if we call this function it will return undefined at this.nama and this.umur, because arrow function not impelement "this"
    // sayHello: ()=> `Halo nama saya ${this.nama}, umur ${this.umur}`
// }


// const Mhs = function(){
//     this.nama = 'rahmat'
//     this.umur = 21
//     //if we defined argument in setInterval without arrow function it will returned window
//     setInterval(()=>console.log(`${this.umur++}`),1000)
// }
// const rahmat = new Mhs()


const box = document.querySelector('.box')

box.addEventListener('click',function(){
    
    let satu = 'size'
    let dua = 'caption'

    if(this.classList.contains(satu)){
        let temp = satu
        satu = dua
        dua = temp
    }
    this.classList.toggle(satu)
    
    setTimeout(() => {
        this.classList.toggle(dua)
    }, 600);

})
