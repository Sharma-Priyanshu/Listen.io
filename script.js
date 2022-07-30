console.log("working")


let audioElement = new Audio('mp3/1.mp3');
let songIndex = 0;
let masterPlay = document.getElementById("masterPlay");
let ProgressBar = document.getElementById("progressBar");
let songItem = Array.from(document.getElementsByClassName("songItem"));
let playBtn = Array.from(document.getElementsByClassName("playBtn"));
let search = document.getElementById('search');
let gif = document.getElementById('gif');
let singerList = document.getElementById("singerList");




let songs = [
    { songName: "Halki Si Barsaat", filepath: "mp3/1.mp3", coverpath: "cover/halkiSiBaarish.jpg", timestamp: "3:32 " },
    { songName: "Har Har Shambhu", filepath: "mp3/2.mp3", coverpath: "cover/shambhu.jpg", timestamp: "5:54 " },
    { songName: "Kesariya", filepath: "mp3/3.m3", coverpath: "cover/kesariya.jpg", timestamp: "4:28 " },
    { songName: "Dhoka", filepath: "mp3/4.mp3", coverpath: "cover/Dhoka.jpg", timestamp: "4:05 " },
    { songName: "Teri Galiyan", filepath: "mp3/5.mp3", coverpath: "cover/galiyan.jpg", timestamp: "5:50 " },
    { songName: "Raatan Lambiyan", filepath: "mp3/6.mp3", coverpath: "cover/raatanLambiya.jpg", timestamp: "3:50 " },
    { songName: "Nain Ta Heere", filepath: "mp3/7.mp3", coverpath: "cover/nainHeere.jpg", timestamp: "2:51 " },
    { songName: "Tera Yaar Hoon Main", filepath: "mp3/8.mp3", coverpath: "cover/teraYaarHuMain.jpg", timestamp: "4:24 " },
    { songName: "Galti Se Mistake", filepath: "mp3/9.mp3", coverpath: "cover/mistake.jpg", timestamp: "3:23 " },
    { songName: "Desh Mere", filepath: "mp3/10.mp3", coverpath: "cover/deshmere.jpg", timestamp: "3:08 " },
    { songName: "Tu Hi Yaar Mera", filepath: "mp3/11.mp3", coverpath: "cover/tuHiYaarMera.jpg", timestamp: "3:22 " },
    { songName: "Tera Fitoor", filepath: "mp3/12.mp3", coverpath: "cover/fitoor.jpg", timestamp: "5:10 " },
    { songName: "Uska Hi Bana", filepath: "mp3/13.mp3", coverpath: "cover/uskaHiBana.jpg", timestamp: "5:28 " },
    { songName: "Tum Saath Ho", filepath: "mp3/14.mp3", coverpath: "cover/agarTumSaath.jpg", timestamp: "5:41 " },
    { songName: "Lambiyaan Si Judaiyaan", filepath: "mp3/15.mp3", coverpath: "cover/lambiyaan.jpg", timestamp: "3:58 " },
    { songName: "Hamdard", filepath: "mp3/16.mp3", coverpath: "cover/humdard.jpg", timestamp: "4:20 " },
    { songName: "Hawayein", filepath: "mp3/17.mp3", coverpath: "cover/hawayein.jpg", timestamp: "4:49 " },
    { songName: "Khairiyat", filepath: "mp3/18.mp3", coverpath: "cover/khairiyat.jpg", timestamp: "4:30 " },
    { songName: "Phir Mohabbat", filepath: "mp3/19.mp3", coverpath: "cover/mohabbat.jpg", timestamp: "5:30 " },
    { songName: "Rait Zara Su", filepath: "mp3/20.mp3", coverpath: "cover/raitZaraSi.jpg", timestamp: "4:50 " },
    { songName: "Thodi Jagah", filepath: "mp3/21.mp3", coverpath: "cover/thodijagah.jpg", timestamp: "3:38 " },
    { songName: "Tujhe Kitna Chahne lage", filepath: "mp3/22.mp3", coverpath: "cover/mistake.jpg", timestamp: "4:44 " },
    { songName: "Akh Lad Jaave", filepath: "mp3/23.mp3", coverpath: "cover/jubin/akhLadJaave.jpg", timestamp: "3:32 " },
    { songName: "Barsaat KI Dhun", filepath: "mp3/24.mp3", coverpath: "cover/jubin/barsaatKiDhun.jpg", timestamp: "5:54 " },
    { songName: "Bedardi Se Pyaar", filepath: "mp3/25.mp3", coverpath: "cover/jubin/bedardiSePyaar.jpg", timestamp: "4:28 " },
    { songName: "Bewafa Tera Masoom Chehra", filepath: "mp3/26.mp3", coverpath: "cover/jubin/bewafaTeraMasoom.jpg", timestamp: "4:05 " },
    { songName: "Bewafa Tera Muskarana", filepath: "mp3/27.mp3", coverpath: "cover/jubin/muskurana.jpg", timestamp: "5:50 " },
    { songName: "Bimar Dil", filepath: "mp3/28.mp3", coverpath: "cover/jubin/bimarDil.jpg", timestamp: "3:50 " },
    { songName: "Dil Galti Kar Baitha Hai", filepath: "mp3/29.mp3", coverpath: "cover/jubin/dilGaltiKarBaitha.jpg", timestamp: "2:51 " },
    { songName: "Dil Jaaniye", filepath: "mp3/30.mp3", coverpath: "cover/jubin/dilJaaniye.jpg", timestamp: "4:24 " },
    { songName: "Kaash Tu Mila Hota", filepath: "mp3/31.mp3", coverpath: "cover/jubin/kaashTuMilaHota.jpg", timestamp: "3:23 " },
    { songName: "Khushi Jab Bhi Teri", filepath: "mp3/32.mp3", coverpath: "cover/jubin/kushiJabBhi.jpg", timestamp: "3:08 " },
    { songName: "Kinna Sona", filepath: "mp3/33.mp3", coverpath: "cover/jubin/kinaSona.jpg", timestamp: "3:22 " },
    { songName: "Lut Gaye", filepath: "mp3/34.mp3", coverpath: "cover/jubin/lutGaye.jpg", timestamp: "5:10 " },
    { songName: "Meri Aashiqui", filepath: "mp3/35.mp3", coverpath: "cover/jubin/meriAshique.jpg", timestamp: "5:28 " },
    { songName: "Meri Maa Ke Barabar", filepath: "mp3/36.mp3", coverpath: "cover/jubin/meriMaaKeBarabar.jpg", timestamp: "5:41 " },
    { songName: "Samandar Mein Kinara Tu", filepath: "mp3/37.mp3", coverpath: "cover/jubin/samandar.jpg", timestamp: "3:58 " },
    { songName: "Shish Nawata Hoon", filepath: "mp3/38.mp3", coverpath: "cover/jubin/shishNawataHoon.jpg", timestamp: "4:20 " },
    { songName: "Suna Hai", filepath: "mp3/39.mp3", coverpath: "cover/jubin/sunaHai.jpg", timestamp: "4:49 " },
    { songName: "Taaron Ke Shahar", filepath: "mp3/40.mp3", coverpath: "cover/jubin/taroKeShahar.jpg", timestamp: "4:30 " },
    { songName: "Tum Hi Aana", filepath: "mp3/41.mp3", coverpath: "cover/jubin/tumHiAana.jpg", timestamp: "5:30 " },
    { songName: "Tumse Pyaar Karke", filepath: "mp3/42.mp3", coverpath: "cover/jubin/tumsePyaarKarke.jpg", timestamp: "4:50 " },
    { songName: "Kuch Toh Bata Zindagi", filepath: "mp3/43.mp3", coverpath: "cover/thodijagah.jpg", timestamp: "3:38 " },
]


let arijit = [
    { songName: "Kesariya", filepath: "mp3/3.m3", coverpath: "cover/kesariya.jpg", timestamp: "4:28 " },
    { songName: "Dhoka", filepath: "mp3/4.mp3", coverpath: "cover/Dhoka.jpg", timestamp: "4:05 " },
    { songName: "Tera Yaar Hoon Main", filepath: "mp3/8.mp3", coverpath: "cover/teraYaarHuMain.jpg", timestamp: "4:24 " },
    { songName: "Galti Se Mistake", filepath: "mp3/9.mp3", coverpath: "cover/mistake.jpg", timestamp: "3:23 " },
    { songName: "Desh Mere", filepath: "mp3/10.mp3", coverpath: "cover/deshmere.jpg", timestamp: "3:08 " },
    { songName: "Tu Hi Yaar Mera", filepath: "mp3/11.mp3", coverpath: "cover/tuHiYaarMera.jpg", timestamp: "3:22 " },
    { songName: "Tera Fitoor", filepath: "mp3/12.mp3", coverpath: "cover/fitoor.jpg", timestamp: "5:10 " },
    { songName: "Uska Hi Bana", filepath: "mp3/13.mp3", coverpath: "cover/uskaHiBana.jpg", timestamp: "5:28 " },
    { songName: "Tum Saath Ho", filepath: "mp3/14.mp3", coverpath: "cover/agarTumSaath.jpg", timestamp: "5:41 " },
    { songName: "Lambiyaan Si Judaiyaan", filepath: "mp3/15.mp3", coverpath: "cover/lambiyaan.jpg", timestamp: "3:58 " },
    { songName: "Hamdard", filepath: "mp3/16.mp3", coverpath: "cover/humdard.jpg", timestamp: "4:20 " },
    { songName: "Hawayein", filepath: "mp3/17.mp3", coverpath: "cover/hawayein.jpg", timestamp: "4:49 " },
    { songName: "Khairiyat", filepath: "mp3/18.mp3", coverpath: "cover/khairiyat.jpg", timestamp: "4:30 " },
    { songName: "Phir Mohabbat", filepath: "mp3/19.mp3", coverpath: "cover/mohabbat.jpg", timestamp: "5:30 " },
    { songName: "Rait Zara Su", filepath: "mp3/20.mp3", coverpath: "cover/raitZaraSi.jpg", timestamp: "4:50 " },
    { songName: "Thodi Jagah", filepath: "mp3/21.mp3", coverpath: "cover/thodijagah.jpg", timestamp: "3:38 " },
    { songName: "Tujhe Kitna Chahne lage", filepath: "mp3/22.mp3", coverpath: "cover/mistake.jpg", timestamp: "4:44 " },
]

let jubin = [
    { songName: "Raatan Lambiyan", filepath: "mp3/6.mp3", coverpath: "cover/raatanLambiya.jpg", timestamp: "3:50 " },
    { songName: "Akh Lad Jaave", filepath: "mp3/23.mp3", coverpath: "cover/halkiSiBaarish.jpg", timestamp: "3:32 " },
    { songName: "Barsaat KI Dhun", filepath: "mp3/24.mp3", coverpath: "cover/shambhu.jpg", timestamp: "5:54 " },
    { songName: "Bedardi Se Pyaar", filepath: "mp3/25.mp3", coverpath: "cover/kesariya.jpg", timestamp: "4:28 " },
    { songName: "Bewafa Tera Masoom Chehra", filepath: "mp3/26.mp3", coverpath: "cover/Dhoka.jpg", timestamp: "4:05 " },
    { songName: "Bewafa Tera Muskarana", filepath: "mp3/27.mp3", coverpath: "cover/galiyan.jpg", timestamp: "5:50 " },
    { songName: "Bimar Dil", filepath: "mp3/28.mp3", coverpath: "cover/raatanLambiya.jpg", timestamp: "3:50 " },
    { songName: "Dil Galti Kar Baitha Hai", filepath: "mp3/29.mp3", coverpath: "cover/nainHeere.jpg", timestamp: "2:51 " },
    { songName: "Dil Jaaniye", filepath: "mp3/30.mp3", coverpath: "cover/teraYaarHuMain.jpg", timestamp: "4:24 " },
    { songName: "Kaash Tu Mila Hota", filepath: "mp3/31.mp3", coverpath: "cover/mistake.jpg", timestamp: "3:23 " },
    { songName: "Khushi Jab Bhi Teri", filepath: "mp3/32.mp3", coverpath: "cover/deshmere.jpg", timestamp: "3:08 " },
    { songName: "Kinna Sona", filepath: "mp3/33.mp3", coverpath: "cover/tuHiYaarMera.jpg", timestamp: "3:22 " },
    { songName: "Lut Gaye", filepath: "mp3/34.mp3", coverpath: "cover/fitoor.jpg", timestamp: "5:10 " },
    { songName: "Meri Aashiqui", filepath: "mp3/35.mp3", coverpath: "cover/uskaHiBana.jpg", timestamp: "5:28 " },
    { songName: "Meri Maa Ke Barabar", filepath: "mp3/36.mp3", coverpath: "cover/agarTumSaath.jpg", timestamp: "5:41 " },
    { songName: "Samandar Mein Kinara Tu", filepath: "mp3/37.mp3", coverpath: "cover/lambiyaan.jpg", timestamp: "3:58 " },
    { songName: "Shish Nawata Hoon", filepath: "mp3/38.mp3", coverpath: "cover/humdard.jpg", timestamp: "4:20 " },
    { songName: "Suna Hai", filepath: "mp3/39.mp3", coverpath: "cover/hawayein.jpg", timestamp: "4:49 " },
    { songName: "Taaron Ke Shahar", filepath: "mp3/40.mp3", coverpath: "cover/khairiyat.jpg", timestamp: "4:30 " },
    { songName: "Tum Hi Aana", filepath: "mp3/41.mp3", coverpath: "cover/mohabbat.jpg", timestamp: "5:30 " },
    { songName: "Tumse Pyaar Karke", filepath: "mp3/42.mp3", coverpath: "cover/raitZaraSi.jpg", timestamp: "4:50 " },
    { songName: "Kuch Toh Bata Zindagi", filepath: "mp3/43.mp3", coverpath: "cover/thodijagah.jpg", timestamp: "3:38 " }
]


songItem.forEach((element, i) => {
    
    element.getElementsByClassName("coverImg")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerHTML = songs[i].songName;
    element.getElementsByClassName("timestamp")[0].innerHTML = songs[i].timestamp;
})


const makeAllPlays = () => {
    playBtn.forEach((element) => {

        element.classList.remove("fa-circle-pause");
        element.classList.add("fa-circle-play");
    })
}

playBtn.forEach((element) => {
    element.addEventListener('click', (e) => {
        songIndex = parseInt(e.target.id);
        makeAllPlays()
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause");
        audioElement.src = `mp3/${songIndex + 1}.mp3`
        audioElement.play()
        audioElement.currentTime = 0;
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
    })
})



//   handle play/pause

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime == 0) {
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
    }
    else {
        audioElement.pause();
        gif.style.opacity = 0;
        masterPlay.classList.remove('fa-circle-pause')
        masterPlay.classList.add('fa-circle-play')
    }
})


// Time Update Event

audioElement.addEventListener("timeupdate", () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    ProgressBar.value = progress;
});


ProgressBar.addEventListener('change', () => {
    audioElement.currentTime = ProgressBar.value * audioElement.duration / 100;
})

document.getElementById("next").addEventListener('click', () => {
    if (songIndex > 8) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }
    makeAllPlays();
    audioElement.src = `mp3/${songIndex + 1}.mp3`
    audioElement.play()
    audioElement.currentTime = 0;
    masterPlay.classList.remove('fa-circle-play')
    masterPlay.classList.add('fa-circle-pause')
})


document.getElementById("previous").addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    } else {
        songIndex -= 1;
    }
    makeAllPlays();
    audioElement.src = `mp3/${songIndex + 1}.mp3`
    audioElement.play()
    audioElement.currentTime = 0;
    masterPlay.classList.remove('fa-circle-play')
    masterPlay.classList.add('fa-circle-pause')
})
