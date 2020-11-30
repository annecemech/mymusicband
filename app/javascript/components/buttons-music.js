import { initCountdown } from '../components/countdown';

const playcheckbox = () => {
  const buttonPlay = document.querySelector('.btn-play');
  const buttonPause = document.querySelector('.btn-pause');
  const buttonRecord = document.querySelector('.btn-record');
  const checkbox = document.querySelectorAll('.checkrecording');
  const audioarray = [];

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


  buttonRecord.addEventListener('click', (event) =>{
    initCountdown(audioarray);
  });


  buttonPause.addEventListener('click', (event) => {
    audioarray.forEach(element => {
        element.pause();
    });
  });
}

export {playcheckbox };
