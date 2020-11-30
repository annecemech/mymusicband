import { pageScroll } from '../partition/scroll_auto'

const initCountdown = (audioarray) => {

  const nums = document.querySelectorAll('.nums span');
  const counter = document.querySelector('.counter');

  // const record = document.querySelector('.btn-record');

  runAnimation();

  function runAnimation() {
    console.log(nums);

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
          // After the and of the animation, launch auto scroll and playing tracks
          pageScroll();
          audioarray.forEach(element => {
              element.volume = 0.1;
              element.play();
          });
        }
      });

    });

  }

  // record.addEventListener('click', () => {
  //   runAnimation();
  // });

}


export{ initCountdown }
