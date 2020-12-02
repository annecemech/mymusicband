import Crunker from 'crunker';

const mixRecordings = () => {

  const downloadButton = document.querySelector('.download-mix');
  const checkRecordings = document.querySelectorAll('.check-recordings');
  const playRecordings = document.querySelector('.play-recordings');
  const pauseRecordings = document.querySelector('.pause-recordings');
  const stopRecordings = document.querySelector('.stop-recordings');
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

    downloadButton.addEventListener("click", (e) => {
      let audio = new Crunker({ sampleRate: 48000 });
      // debugger;
      const audioPath = () => {
        let recordings = [];
        recordingsArray.forEach((recording) => {
          recordings.push(recording.currentSrc)
          // return '"url"
        });
        return recordings
      };

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

