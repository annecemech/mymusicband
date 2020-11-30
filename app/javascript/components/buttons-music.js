import { pageScroll } from '../partition/scroll_auto'


const playcheckbox = () => {
  const buttonPlay = document.querySelector('.btn-play');
  const buttonPause = document.querySelector('.btn-pause');
  const buttonRecord = document.querySelector('.btn-record');
  const checkbox = document.querySelectorAll('.checkrecording');
  const audioarray = [];

  let abortController = null;


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

  buttonPause.addEventListener('click', (event) => {
    audioarray.forEach(element => {
        element.pause();
    });
    console.log("Pause button pushed")
    // if recording ongoing, we stop the scrolling
    if ( abortController ) {
      console.log("trying to abort")
      abortController.abort();
      abortController = null;
    }
  });

  buttonRecord.addEventListener('click', (event) => {
    abortController = new AbortController();
    console.log(abortController);
    try {
      pageScroll(abortController.signal);
    } catch {
      alert( 'WHY DID YOU DO THAT?!' );
      abortController = null;
    }
    console.log(abortController);
  });
}

export {playcheckbox};
