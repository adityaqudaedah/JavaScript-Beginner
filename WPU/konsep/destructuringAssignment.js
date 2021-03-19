//Destructuring Array
// const items = ['a','b','c']

// const [a,b,c] = items

// skipping items
// const[a,,c] = items

// console.log(a == items[0]? 'true':'false')
// console.log(b == items[1]? 'true':'false')
// console.log(a == items[2]? 'true':'false')

// swapping
// let aku = 'aku'
// let kamu = 'kamu'
// console.log(aku);
// console.log(kamu);
// [aku, kamu] = [kamu,aku]
// console.log(aku)

// return value function
// function coba() {
//     return [1,2]
// }

// const [a,b] = coba()
// console.log(a)
// console.log(b)

//Rest parameters
// const [...values] = [1,2,3]
// values.map((value,index) => console.log(`items ${index+1} : ${value}`))

// Destructuring Object
// const mhs = {
//     nama : 'rahmat',
//     npm : '15118820',
//     kelas : '3KA11'
// }

// const {nama,npm,kelas} = mhs
// console.log(nama)

// Assignment without object declaration
// ({nama, npm,kelas} = {nama:'rahmat',npm:'15118820', kelas:'3ka11'})
// console.log(nama)
// console.log(npm)

// Assign to new variable
// const mhs = {
//     nama : 'rahmat',
//     npm : '15118820',
//     kelas : '3KA11'
// }

// const{nama:n,kelas:k} = mhs
// console.log(n);
// console.log(k);

// const mhs = {
//     nama : 'rahmat',
//     npm : '15118820',
//     kelas : '3KA11',
//     email: 'rahmat@gmail.com'
// }

// const {nama:n,kelas:k,email:e = 'default@gmail.com'} = mhs
// console.log(e);
// console.log(k);

// Rest parameters
// const mhs = {
//     nama : 'rahmat',
//     npm : '15118820',
//     kelas : '3KA11'
// }

// const {...value} = mhs
// console.log(value)
// console.log(value.nama)

// get field on object and given it to function parameters
// const mhs = {
//     nama : 'rahmat',
//     npm : '15118820',
//     kelas : '3KA11'
// }

// function getNama({nama,npm}){
//     return `Nama : ${nama}
//     NPM : ${npm}`
// }

// console.log(getNama(mhs));

// Destructuring function
// function jumlahKali(a,b) {
//     return [a+b,a*b]
// }

// const [jumlah,kali] = jumlahKali(10,10)
// console
// console.log(`Jumlah : ${jumlah} Kali : ${kali}`);


// function kalkulasi(a,b) {
//     return {
//         tambah : a+b,
//         kurang : a-b,
//         kali : a*b,
//         bagi : a/b
//     }
// }
// // sequence don't matter
// const {bagi,kali,kurang,tambah} = kalkulasi(10,10)
// console.log(bagi);

// Destructuring argument
const mhs = {
    nama : 'rahmat',
    kelas : '3ka11',
    nilai : {
        uas: 95,
        uu : 87,
        uts: 42
    }
}

function cetakNilai({nilai:{uas,uts,uu}}) {
    return`NILAI AKHIR :${(uas+uu+uts)/3}`
}
console.log(cetakNilai(mhs));