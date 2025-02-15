const audio = document.getElementById('bgMusic');
const muteButton = document.getElementById('muteButton');
const volumeSlider = document.getElementById('volumeSlider');

// Start muted
audio.volume = volumeSlider.value;
audio.muted = true;

function togglePlay() {
    if (audio.paused) {
        audio.muted = false;  // Ensure audio is unmuted when playing
        audio.play();
        muteButton.querySelector('.mute-icon').textContent = '🔊';
    } else {
        audio.pause();
        muteButton.querySelector('.mute-icon').textContent = '🔈';
    }
}

volumeSlider.addEventListener('input', function() {
    audio.volume = this.value;
});
