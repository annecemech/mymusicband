const AudioPlayer = () => {

  const player = document.querySelector('#audioPlayer');

  const playButton = document.querySelector('#playButton');

  playButton.addEventListener('click', player.play());

}

export { AudioPlayer };
