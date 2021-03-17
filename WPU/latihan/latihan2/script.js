// const mhs = {
//     nama:"rahmat",
//     umur: 21,
//     npm : '15118820',
//     email : 'qudaedahaditya@gmail.com'
// }
// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="npm">${mhs.npm}</span>
// </div>`

// const mhs = [
//     {
//         nama:'rahmat',
//         email:'rahmat@gmail.com'
//     },
//     {
//         nama:'aditya',
//         email:'aditya@gmail.com'
//     },
//     {
//         nama:'qudaedah',
//         email:'qudaedah@gmail.com'
//     }
// ]

// const el = `<div class="mhs">

//     ${mhs.map( item =>`<ul>
//         <li>${item.nama}</li>
//         <li>${item.email}</li>
//     </ul>`).join(' ')}

// </div>`

// conditionals (ternary operation)
// const lagu = {
//     penyanyi: 'Isyana Sarasvati',
//     judul: 'Kau adalah',
//     feat: 'Rayi putra'
    
// }

// const el = `<div class="lagu">

//     <ul>
//         <li>${lagu.penyanyi}</li>
//         <li>${lagu.judul} ${lagu.feat ?`(feat. ${lagu.feat})`:''}</li>
//     </ul>

// </div>`

// nested html fragment
const mhs = {
    nama: 'Rahmat Aditya Qudaedah',
    semester: 6,
    matKul : [
        'Bimbingan penulisan ilmiah : 2',
        'Sistem Basis Data : 3',
        'Konsep Data Mining : 2',
        'Desain & Manaj. jaringan Komputer : 3'
    ]
}



const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <h3>Semester : ${mhs.semester}</h3>
    <h4>Mata Kuliah : </h4>
    <span>
        <ol>
            ${mhs.matKul.map(items => {
                const item = items.split(':')
                return `<li>${item[0]}: ${parseInt(item[1])} SKS</li>`
            }).join(' ')}
        </ol>
    </span>
</div>`
//push el to the html document
document.body.innerHTML = el

console.log(el)