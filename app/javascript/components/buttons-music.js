import { initCountdown } from '../components/countdown';

const playcheckbox = () => {
  const buttonRecordPlay = document.querySelector('.btn-record');
  const buttonRecordStop = document.querySelector('.btn-stop');
  const buttonPause = document.querySelector('.btn-pause');
  const checkbox = document.querySelectorAll('.checkrecording');
  const buttonsave = document.querySelector('.btn-save');
  const buttonTrash = document.querySelector('.btn-trash');
  const buttonPlayCheckbox = document.querySelector('.btn-checkbox-play');
  const buttonPauseCheckbox = document.querySelector('.btn-checkbox-pause');
  const cardRecord = document.querySelector('.card-record');
  const cardRedCheckbox = document.querySelector('.dropdown-recordings');
  const cardPlayer = document.querySelector('.card-player');
  let abortController = null;
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

  buttonRecordPlay.addEventListener('click', (event) => {
    abortController = new AbortController();
    initCountdown(audioarray, abortController.signal);
    // audioarray.forEach(element => {
    //     element.volume = 0.9;
    //     element.play();
    // });
    event.currentTarget.classList.add("button-inactive");
    buttonRecordStop.classList.remove("button-inactive");
  });

  buttonRecordStop.addEventListener('click', (event) => {
    audioarray.forEach(element => {
        element.pause();
    });
    event.currentTarget.classList.add("button-inactive");
    cardRecord.classList.add("card-record-grow");
    buttonRecordPlay.classList.remove("button-inactive");
    buttonsave.classList.remove("d-none");
    console.log(buttonTrash);
  });

  buttonPlayCheckbox.addEventListener('click', (event) => {
    audioarray.forEach(element => {
        element.volume = 0.9;
        element.play();
    });
    event.currentTarget.classList.add("button-inactive");
    buttonPauseCheckbox.classList.remove("button-inactive");
  });

  buttonPauseCheckbox.addEventListener('click', (event) => {
    audioarray.forEach(element => {
        element.pause();
    });
    event.currentTarget.classList.add("button-inactive");
    buttonPlayCheckbox.classList.remove("button-inactive");
  });

  cardRedCheckbox.addEventListener('click', (event) => {
    cardPlayer.classList.toggle("card-player-grow");
  });

  // if (buttonTrash) {
  //   console.log(buttonTrash);
  //   console.log(buttonSave);
  //   buttonTrash.addEventListener('click', (event) => {
  //     buttonsave.classList.add("d-none");
  //   });
  // }
}


export {playcheckbox};
