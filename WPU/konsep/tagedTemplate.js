// const nama = 'rahmat'
// const umur = 100

// function coba(strings,...values) {
//     //...values means infinite parameters 
//     let result = ''
//      strings.forEach((string, i)=>{
//         result += `${string} ${values[i] || ''}`
//     })
//     return result
// }
// //taged templates separate by template literals for ex: ${nama}
// const str = coba `Halo nama saya, ${nama} umur saya ${umur} tahun`


// console.log(str)

// highlight
const nama = 'rahmat'
const umur = 100

function coba(strings,...values) {
    return strings.reduce((acc,curr,index)=>`${acc} ${curr} <span class="hl">${values[index]||''}</span>`,'')
}
//taged templates separate by template literals for ex: ${nama}
const str = coba `Halo nama saya, ${nama} umur saya ${umur} tahun`


document.body.innerHTML = str
