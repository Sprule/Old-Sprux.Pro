var button = document.getElementById('button');
var audio = document.getElementById('audio');

var onClick = function() {
    audio.play(); // audio will load and then play
};

button.addEventListener('click', onClick, false);