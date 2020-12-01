import Crunker from 'crunker';

const mixRecordings = () => {

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

    // downloadMix.addEventListener('click', (event) => {
    //   let audio = new Crunker();
    //   console.log(audio)

    //   audio
    //     .fetchAudio("https://server6.mp3quran.net/thubti/001.mp3", "https://server6.mp3quran.net/thubti/002.mp3")
      //   .then(buffers => {
      //     // => [AudioBuffer, AudioBuffer]
      //     return audio.mergeAudio(buffers);
      //   })
      //   .then(merged => {
      //     // => AudioBuffer
      //     return audio.export(merged, "audio/mp3");
      //   })
      //   .then(output => {
      //     // => {blob, element, url}
      //     audio.download(output.blob);
      //     document.body.append(output.element);
      //     console.log(output.url);
      //   })
      //   .catch(error => {
      //     // => Error Message
      //   });

      // audio.notSupported(() => {
      //   // Handle no browser support
      // });

      // audio
      //   .fetchAudio("https://server6.mp3quran.net/thubti/001.mp3", "https://server6.mp3quran.net/thubti/002.mp3")
      //   .then(buffers => audio.mergeAudio(buffers))
      //   .then(merged => audio.export(merged, "audio/mp3"))
      //   .then(output => audio.play(output.blob))
      //   .catch(error => {
      //       throw new Error(error);
      //     });

    // });

  }

}

export { mixRecordings };

// let audio = new Crunker();
// audio
//   .fetchAudio("/Overhead.mp3", "/ElecGtrMic2.mp3")
//   .then(buffers => audio.mergeAudio(buffers))
//   .then(merged => audio.export(merged, "audio/mp3"))
//   .catch(error => {
//     throw new Error(error);
//   });

