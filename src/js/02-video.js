import Player from '@vimeo/player';

const iframe = document.getElementById('vimeo-player');

const player = new Vimeo.Player(iframe);

const savedTime = localStorage.getItem('videoplayer-current-time');

if (savedTime) {
  player.setCurrentTime(parseFloat(savedTime));
}

const updateCurrentTime = _.throttle(function(data) {
  const currentTime = data.seconds;
  localStorage.setItem('videoplayer-current-time', currentTime);
}, 1000);

player.on('timeupdate', updateCurrentTime);