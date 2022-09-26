import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(playOn, 1000));

function playOn(data) {
    localStorage.setItem("videoplayer-current-time", data.seconds);
}

function setTime() {
    let playedTime = localStorage.getItem("videoplayer-current-time");
if (playedTime) {
    player.setCurrentTime(playedTime);
} else player.setCurrentTime(0);

}
setTime();
