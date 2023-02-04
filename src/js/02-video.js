import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe')
const player = new Player(iframe);

player.on('timeupdate', throttle(onThisSeconds, 1000));

function onThisSeconds(event) {
    localStorage.setItem("videoplayer-current-time", event.seconds);
};

player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));