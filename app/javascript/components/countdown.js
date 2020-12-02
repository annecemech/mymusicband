import { pageScroll } from '../partition/scroll_auto'

const initCountdown = (audioarray, abortSignal, mediarecorder) => {

  const nums = document.querySelectorAll('.nums span');
  const counter = document.querySelector('.counter');

  runAnimation();

  function runAnimation() {

    const last = nums[nums.length - 1];
    nums[0].classList.add('in');
    nums.forEach((num, idx) => {
      const penultimate = nums.length - 1;
      num.addEventListener('animationend', (e) => {
        if(e.animationName === 'goIn' && idx !== penultimate){
          num.classList.remove('in');
          num.nextElementSibling.classList.add('in');
        } else {
          num.classList.remove('in');
        }

        if (num == last){
          // After the and of the animation, start recording
          mediaRecorder.start();
          console.log(mediaRecorder.state);
          console.log("recorder started");
          // launch auto scroll
          try {
            pageScroll(abortSignal);
          } catch {
            alert( 'WHY DID YOU DO THAT?!' );
            abortController = null;
          }
          // play tracks
          audioarray.forEach(element => {
              element.volume = 0.1;
              element.play();
          });
        }
      });
    });
  }
}

export{ initCountdown }
