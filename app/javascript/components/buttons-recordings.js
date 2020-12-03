import Crunker from 'crunker';

const mixRecordings = () => {

  const downloadButton = document.querySelector('.download-mix');
  const checkRecordings = document.querySelectorAll('.check-recordings');
  const playRecordings = document.querySelector('.play-recordings');
  const pauseRecordings = document.querySelector('.pause-recordings');
  const stopRecordings = document.querySelector('.stop-recordings');
  let recordingsArray = [];

  if (downloadButton)
  {

    checkRecordings.forEach(element => {
      element.addEventListener('change', (event) => {
        recordingsArray = [];
        buildArray();
      });
    });

    const buildArray = () => {
      checkRecordings.forEach(element => {
        if (element.checked) {
          recordingsArray.push(new Audio(element.dataset.recordurl));
        }
      });
    };

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

    downloadButton.addEventListener("click", (e) => {
      let audio = new Crunker({ sampleRate: 48000 });

      audio
        .fetchAudio(...(recordingsArray.map((recording) => {
          return recording.currentSrc
        })) )
        .then(buffers => audio.mergeAudio(buffers))
        .then(merged => audio.export(merged, "audio/mp3"))
        .then(output => audio.download(output.blob))
        .catch(error => {
          throw new Error(error);
        });

    })

  }

}

export { mixRecordings };
