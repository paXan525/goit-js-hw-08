import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_KEY = "videoplayer-current-time"

const iframe = document.querySelector('iframe')
const player = new Player(iframe);

player.on('timeupdate', throttle(onThisSeconds, 1000));

function onThisSeconds(event) {
    localStorage.setItem(STORAGE_KEY, event.seconds);
};

player.setCurrentTime(localStorage.getItem(STORAGE_KEY)).then(function (seconds) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:
            break;
    }
});