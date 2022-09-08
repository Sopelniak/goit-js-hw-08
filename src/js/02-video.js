import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe#vimeo-player');
const player = new Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.on(
  'timeupdate',
  throttle(function (data) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
    // console.log(data);
  }, 1000)
);

try {
  const dataValue = JSON.parse(
    localStorage.getItem('videoplayer-current-time')
  );
  const seconds = dataValue.seconds;
  // console.log(seconds);
  player.setCurrentTime(seconds);
} catch (e) {
  console.log(e);
}
