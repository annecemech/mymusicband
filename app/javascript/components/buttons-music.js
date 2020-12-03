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
  const partitionShow = document.querySelector(".partition-show");
  let abortController = null;
  let audioarray = [];

  if (partitionShow) {

    checkbox.forEach(element => {
      element.addEventListener('change', (event) => {
        audioarray = [];
        buildArray();
      });
    });

    const buildArray = () => {
      checkbox.forEach(element => {
        if (element.checked) {
          audioarray.push(new Audio(element.dataset.recordurl));
        }
      });
    };

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
}


export {playcheckbox};
