//for in
// const mhs = ['rahmat','aditya','qudaedah']

// mhs.forEach((m=>console.log(m)))

// for(let mahasiswa of mhs){
//     console.log(mahasiswa)
// }

// for (let [i,m] of mhs.entries()){
//     console.log(`No.${i} ${m}`)
// }

// NodeList
// const listNama = document.querySelectorAll(".nama")
// listNama.forEach(nama => console.log(nama.innerHTML))
// for(nama of listNama){
//     console.log(nama.innerHTML)
// }

// arguments
// function jumlahAngka() {
//     let result = 0;
//     for(items of arguments){
//         result+=items
//     }
//     return result
// }

// console.log(jumlahAngka(1,2,3,4,5)) 


// for in
const mhs = {
    nama : 'rahmat',
    kelas: '3ka11',
    npm : '15118820'
}

for(i in mhs){
    console.log(`${i} : ${mhs[i]}`);
}