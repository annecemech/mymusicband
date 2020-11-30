const mixRecordings = () => {

  const playRecordings = document.querySelector('.play-recordings');
  const pauseRecordings = document.querySelector('.pause-recordings');
  const stopRecordings = document.querySelector('.stop-recordings');
  const checkRecordings = document.querySelectorAll('.check-recordings');
  const recordingsArray = [];

  if (playRecordings)
  {

    checkRecordings.forEach(element => {
      element.addEventListener('change', (event) => {
        if (element.checked) {
          recordingsArray.push(new Audio(element.dataset.recordurl));
        } else {
          recordingsArray.splice(new Audio(element.dataset.recordurl), 1)
        }
      });
    });

    playRecordings.addEventListener('click', (event) => {
      recordingsArray.forEach(element => {
          element.volume = 0.9;
          element.play();
      });
    });

    pauseRecordings.addEventListener('click', (event) => {
      recordingsArray.forEach(element => {
          element.pause();
      });
    });

    stopRecordings.addEventListener('click', (event) => {
      recordingsArray.forEach(element => {
          element.load();
      });
    });

  }

}

export { mixRecordings };

