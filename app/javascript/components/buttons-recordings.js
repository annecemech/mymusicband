import Crunker from 'crunker';
import swal from 'sweetalert';

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
      event.currentTarget.classList.add("button-inactive");
      stopRecordings.classList.remove("button-inactive");
    });

    // pauseRecordings.addEventListener('click', (event) => {
    //   recordingsArray.forEach(element => {
    //       element.pause();
    //   });
    // });

    stopRecordings.addEventListener('click', (event) => {
      recordingsArray.forEach(element => {
          element.load();
      });
      event.currentTarget.classList.add("button-inactive");
      playRecordings.classList.remove("button-inactive");
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
        .then(swal("Your recording is downloading!", "...it will be available in a few seconds!"))
        .catch(error => {
          throw new Error(error);
        });

    })

  }

}

export { mixRecordings };
