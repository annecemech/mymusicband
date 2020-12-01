
const playcheckbox = () => {
  const buttonRecordPlay = document.querySelector('.btn-record');
  const buttonRecordStop = document.querySelector('.btn-stop');
  const buttonPause = document.querySelector('.btn-pause');
  const checkbox = document.querySelectorAll('.checkrecording');
  const buttonsave = document.querySelector('.btn-save');
  const buttonTrash = document.querySelector('.btn-trash');
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
    audioarray.forEach(element => {
        element.volume = 0.9;
        element.play();
    });
    event.currentTarget.classList.add("button-inactive");
    buttonRecordStop.classList.remove("button-inactive");
  });

  buttonRecordStop.addEventListener('click', (event) => {
    audioarray.forEach(element => {
        element.pause();
    });
    event.currentTarget.classList.add("button-inactive");
    buttonRecordPlay.classList.remove("button-inactive");
    buttonsave.classList.remove("button-inactive");
  });

  buttonTrash.addEventListener('click', (event) => {
    buttonsave.classList.add("button-inactive");
  });

}


export {playcheckbox};
