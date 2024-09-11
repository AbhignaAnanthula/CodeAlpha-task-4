// Song and artist data
const songs = [
    { title: "Song 1", artist: "Artist 1", file: "music/song1.mp3" },
    { title: "Song 2", artist: "Artist 2", file: "music/song2.mp3" },
    { title: "Song 3", artist: "Artist 3", file: "music/song3.mp3" }
];

// Variables to keep track of the song
let currentSongIndex = 0;
const audioElement = document.getElementById('audio');
const songTitleElement = document.getElementById('song-title');
const artistElement = document.getElementById('artist');
const playPauseButton = document.getElementById('play-pause');

// Load the first song
function loadSong(index) {
    songTitleElement.textContent = songs[index].title;
    artistElement.textContent = songs[index].artist;
    audioElement.src = songs[index].file;
}

// Play/Pause functionality
function togglePlayPause() {
    if (audioElement.paused) {
        audioElement.play();
        playPauseButton.textContent = 'Pause';
    } else {
        audioElement.pause();
        playPauseButton.textContent = 'Play';
    }
}

// Move to the previous song
function prevSong() {
    currentSongIndex = (currentSongIndex === 0) ? songs.length - 1 : currentSongIndex - 1;
    loadSong(currentSongIndex);
    togglePlayPause();
}

// Move to the next song
function nextSong() {
    currentSongIndex = (currentSongIndex === songs.length - 1) ? 0 : currentSongIndex + 1;
    loadSong(currentSongIndex);
    togglePlayPause();
}

// Initial load
loadSong(currentSongIndex);
