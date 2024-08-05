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
    path: "./assets/FKJ & Masego - Tadow (128).mp3",
    name: "FKJ & Masego - Tadow (128)",
    artist: "FKJ & Masego",
    image: "./assets/cute_naruto_uzumaki_chibi_anime-wallpaper-1920x1200.jpg",
  },
  {
    path: "./assets/Sting - Englishman In New York (128).mp3",
    name: "Sting - Englishman In New York (128)",
    artist: "Sting",
    image: "./assets/broken_glass_deadmau5-wallpaper-1280x768.jpg",
  },
  {
    path: "./assets/t.A.T.u. - All About Us (Official Uncensored Video) (128).mp3",
    name: "t.A.T.u. - All About Us",
    artist: "t.A.T.u.",
    image: "./assets/music_16-wallpaper-1920x1200.jpg",
  },
  {
    path: "./assets/t.A.T.u. - All The Things She Said (Official Music Video) (128).mp3",
    name: "t.A.T.u. - All The Things She Said",
    artist: "t.A.T.u.2",
    image: "./assets/music_is_getting_louder-wallpaper-1920x1200.jpg",
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
