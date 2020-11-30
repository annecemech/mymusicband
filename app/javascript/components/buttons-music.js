import { initCountdown } from '../components/countdown';


const playcheckbox = () => {
  const buttonPlay = document.querySelector('.btn-play');
  const buttonPause = document.querySelector('.btn-pause');
  const buttonRecord = document.querySelector('.btn-record');
  const checkbox = document.querySelectorAll('.checkrecording');
  const audioarray = [];

  let abortController = null;


  checkbox.forEach(element => {
    element.addEventListener('change', (event) => {
      if(element.checked) {
        audioarray.push(new Audio(element.dataset.recordurl));
      } else {
        audioarray.splice(new Audio(element.dataset.recordurl), 1)
      }
    });
  });

  buttonPlay.addEventListener('click', (event) => {
    audioarray.forEach(element => {
        element.volume = 0.1;
        element.play();
    });
  });

  buttonPause.addEventListener('click', (event) => {
    audioarray.forEach(element => {
        element.pause();
    });
    // if recording ongoing, we stop the scrolling
    if ( abortController ) {
      abortController.abort();
      abortController = null;
    }
  });

  buttonRecord.addEventListener('click', (event) => {
    abortController = new AbortController();
    initCountdown(audioarray, abortController.signal);
  });
}

export {playcheckbox };
