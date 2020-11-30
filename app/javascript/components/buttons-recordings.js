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


// const mixRecordings = () => {
//   const playRecording = document.querySelector('.play-recording');
//   const pauseRecording = document.querySelector('.pause-recording');
//   const stopRecording = document.querySelector('.stop-recording');
//   const recordingCheckbox = document.querySelectorAll('recording-checkbox');
//   const recordingsArray = [];

//   checkrecording.forEach(element => {
//     element.addEventListener('change', (event) => {
//       if(element.checked) {
//         recordingsArray.push(new Audio(element.dataset.recordurl));
//       } else {
//         recordingsArray.splice(new Audio(element.dataset.recordurl), 1)
//       }
//     });
//   });

//   playRecording.addEventListener('click', (event) => {
//     recordingsArray.forEach(element => {
//         element.volume = 0.9;
//         element.play();
//     });
//   });

//   pauseRecording.addEventListener('click', (event) => {
//     recordingsArray.forEach(element => {
//         element.pause();
//     });
//   });

//   stopRecording.addEventListener('click', (event) => {
//     recordingsArray.forEach(element => {
//         element.load();
//     });
//   });

// }

// export { mixRecordings };
