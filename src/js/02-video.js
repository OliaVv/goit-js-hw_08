import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(playOn, 1000));

function playOn(data) {
    localStorage.setItem("videoplayer-current-time", data.seconds);
}
const playedTime = localStorage.getItem("videoplayer-current-time");

player.setCurrentTime(playedTime);
