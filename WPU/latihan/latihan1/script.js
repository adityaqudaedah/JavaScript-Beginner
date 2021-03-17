//ambil semua element video
const videos = Array.from(document.querySelectorAll('[data-duration]'))
//pilih yang hanya 'JAVASCRIPT LANJUTAN'
let jsLanjut = videos.filter(video=>video.textContent.includes('JAVASCRIPT LANJUTAN'))
//ambil durasi masing2 video 
.map(item=>item.dataset.duration)
//ubah durasi menjadi float, ubah -> detik
.map(waktu =>{
    const parts = waktu.split(':').map(part=>parseFloat(part))
    
    return (parts[0]*60) + parts[1]
})
//jumlah semua detik
.reduce((acc,curr)=>acc+curr,0)
//ubah formatnya jadi jam:menit:detik
const jam = Math.floor(jsLanjut/3600)
const temp = jsLanjut-(jam*3600)
const menit = Math.floor(temp/60)
const detik = temp - (menit*60)

//simpan di DOM
const pTotalDurasi = document.querySelector('.total-durasi')
pTotalDurasi.textContent = `${jam} jam, ${menit} menit, ${detik} detik`

const totalVideo = videos.filter(video=>video.textContent.includes('JAVASCRIPT LANJUTAN')).length

const pJmlVideo = document.querySelector(".jumlah-video")
pJmlVideo.textContent = totalVideo
console.log(totalVideo)