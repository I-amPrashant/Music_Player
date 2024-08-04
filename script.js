const audioImage = document.getElementById("audioImage");
const audioName = document.getElementById("audioName");
const audioArtist = document.getElementById("audioArtist");
const currentTime= document.getElementById("current-time");
const endTime = document.getElementById("end-time");
const prevBtn = document.getElementById("prev");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const imageOverlay=document.getElementById("imageOverlay");

const songs=[
    {
        path:'./assets/FKJ & Masego - Tadow (128).mp3',
        name:'FKJ & Masego - Tadow (128)',
        artist:'FKJ & Masego',
        image:'./assets/cute_naruto_uzumaki_chibi_anime-wallpaper-1920x1200.jpg'
    },
    {
        path:'./assets/Sting - Englishman In New York (128).mp3',
        name:'Sting - Englishman In New York (128)',
        artist:'Sting',
        image:'./assets/broken_glass_deadmau5-wallpaper-1280x768.jpg'
    },
    {
        path:'./assets/t.A.T.u. - All About Us (Official Uncensored Video) (128).mp3',
        name:'t.A.T.u. - All About Us',
        artist:'t.A.T.u.',
        image:'./assets/music_16-wallpaper-1920x1200.jpg'
    },
    {
        path:'./assets/t.A.T.u. - All The Things She Said (Official Music Video) (128).mp3',
        name:'t.A.T.u. - All The Things She Said',
        artist:'t.A.T.u.2',
        image:'./assets/music_is_getting_louder-wallpaper-1920x1200.jpg'
    },
]

function loadSong(songInfo){
    audioImage.src=songInfo.image;
    imageOverlay.src=songInfo.image;
    audioName.textContent=songInfo.name;
    audioArtist.textContent=songInfo.artist;
}
loadSong(songs[0]);