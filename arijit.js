console.log("working")


let audioElement = new Audio('mp3/3.mp3');
let songIndex = 0;
let masterPlay = document.getElementById("masterPlay");
let ProgressBar = document.getElementById("progressBar");
let songItem = Array.from(document.getElementsByClassName("songItem"));
let playBtn = Array.from(document.getElementsByClassName("playBtn"));
let search = document.getElementById('search');
let gif = document.getElementById('gif');
let singerList = document.getElementById("singerList");



let arijit = [
    { songName: "Kesariya", filepath: "mp3/3.mp3", coverpath: "cover/kesariya.jpg", timestamp: "4:28 " },
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
    { songName: "Tujhe Kitna Chahne lage", filepath: "mp3/22.mp3", coverpath: "cover/mistake.jpg", timestamp: "4:44 "}
]

songItem.forEach((element, j) => {
    
    element.getElementsByClassName("coverImg")[0].src = arijit[j].coverpath;
    element.getElementsByClassName("songName")[0].innerHTML = arijit[j].songName;
    element.getElementsByClassName("timestamp")[0].innerHTML = arijit[j].timestamp;
})

search.addEventListener("click",()=>{
    if (singerList.value == "all"){
        window.location.href = "index.html"
    }
   else if (singerList.value == "jubin"){
        window.location.href = "jubin.html"
    }
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
