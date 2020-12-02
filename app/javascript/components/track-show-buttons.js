const initTrackShowButtons = () => {
  const trackShowPlay = document.querySelectorAll(".track-show-play");

  // Listener on track#show play button
  if (trackShowPlay){
    trackShowPlay.forEach(button =>{
      button.addEventListener('click', (event) => {
        const playButton = button.offsetParent.querySelector('.fa-play-circle');
        rotateButton(playButton);
      });
    });
  }
}

const rotateButton = (button) => {
  if (button.classList.contains('btn-90degrees')){
    button.classList.remove('btn-90degrees');
  }else{
    button.classList.add('btn-90degrees');
  }
}

export { initTrackShowButtons }
