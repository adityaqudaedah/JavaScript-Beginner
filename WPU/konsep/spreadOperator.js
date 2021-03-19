// const mhs = ['rahmat','aditya','qudaedah']
// const mhs1 = ['qudaedah','aditya','rahmat']

// const gabung = [...mhs1,'atika',...mhs]

// console.log(gabung)
// console.log(...mhs[1])

// const listMhs = document.querySelectorAll('.nama')

// const mhs = [...listMhs].map(nama => nama.innerHTML)
// console.log(mhs.map());


const nama = document.querySelector('.header')
const huruf = [...nama.textContent].map(items =>`<span>${items}</span>`).join('')
console.log(huruf);

nama.innerHTML = huruf