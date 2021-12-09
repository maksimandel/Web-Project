import {Howl, Howler} from 'howler';


function Timer() {
	let elem = document.getElementById('timer');
   	elem.value = parseInt(elem.value)-1;
   	if (i === 0) {
		clearInterval(elem);
	}
}

function start() {
   window.TimerId = window.setInterval(Timer, 1000);
}

function stop() {
   window.clearInterval(window.TimerId);
}

let sound = new Howl({
	src: ['sound.webm', 'sound.mp3', 'sound.wav'],
	autoplay: true,
	loop: true,
	volume: 0.5,
	onend: function() {
	  console.log('Finished!');
	}
});