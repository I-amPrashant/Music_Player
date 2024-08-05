const audioImage = document.getElementById("audioImage");
const audioName = document.getElementById("audioName");
const audioArtist = document.getElementById("audioArtist");
const startTime = document.getElementById("current-time");
const endTime = document.getElementById("end-time");
const progressBar = document.getElementById("progress-bar");
const prevBtn = document.getElementById("prev");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const imageOverlay = document.getElementById("imageOverlay");

const songs = [
  {
    path: "./assets/music1.mp3",
    name: "Mocking bird",
    artist: "Naruto",
    image: "./assets/abstract_red-wallpaper-1920x1200.jpg",
  },
  {
    path: "./assets/music2.mp3",
    name: "Lose yourself",
    artist: "Obito",
    image: "./assets/broken_glass_deadmau5-wallpaper-1280x768.jpg",
  },
  {
    path: "./assets/music3.mp3",
    name: "Houdini",
      artist: "Ghost of the uchiha- madara uchiha",
    image: "./assets/music_16-wallpaper-1920x1200.jpg",
  },
];
let isPlaying;
let currentIndex=0;
const audio = new Audio();
function loadSong(songInfo) {
  audioImage.src = songInfo.image;
  imageOverlay.src = songInfo.image;
  audio.src = songInfo.path;
  audioName.textContent = songInfo.name;
  audioArtist.textContent = songInfo.artist;
}

function playSong() {
  isPlaying = true;
  playBtn.classList.replace("fa-play", "fa-pause");
  audio.play();
}
function pauseSong(){
    isPlaying=false;
    playBtn.classList.replace("fa-pause", "fa-play");
    audio.pause();
}
function updateProgress(){
    const {duration, currentTime}=audio;
    const progressTime=(currentTime/duration)*100;
    progressBar.value=progressTime;
    const formatTime=(time)=> String(Math.floor(time)).padStart(2,'0');
    endTime.textContent=`${formatTime(duration / 60)}:${formatTime(duration % 60)}`
    startTime.textContent=`${formatTime(currentTime/60)}:${formatTime(currentTime%60)}`
}

audio.addEventListener('ended', pauseSong)
audio.addEventListener('timeupdate', updateProgress)
playBtn.addEventListener("click", () => {
    isPlaying ? pauseSong() : playSong();
});
prevBtn.addEventListener('click', ()=>{
  let songIndex=(currentIndex -1 + songs.length)%songs.length;
  currentIndex=songIndex;
  loadSong(songs[songIndex]);
  playSong();
})
nextBtn.addEventListener('click', ()=>{
  let songIndex=(currentIndex +1+songs.length)%songs.length;
  currentIndex=songIndex;
  loadSong(songs[songIndex]);
  playSong();
})
progressBar.addEventListener('click', (e)=>{
  let clickedDuration=(e.offsetX)/progressBar.clientWidth*audio.duration;
  audio.currentTime=clickedDuration;
})
window.onload=()=>{
    loadSong(songs[0]);
    setTimeout(()=>{
      updateProgress()
    }, [1000])
}