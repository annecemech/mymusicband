const initCountdown = () => {

  const nums = document.querySelectorAll('.nums span');
  const counter = document.querySelector('.counter');

  const record = document.querySelector('.btn-play');

  runAnimation();

  function runAnimation() {
    nums.forEach((num, idx) => {
      const penultimate = nums.length - 1;
      num.addEventListener('animationend', (e) => {
        if(e.animationName === 'goIn' && idx !== penultimate){
          num.classList.remove('in');
          num.nextElementSibling.classList.add('in');
        } else {
          num.classList.remove('in');
        }
      });
      nums[0].classList.add('in');
    });
  }

  record.addEventListener('click', () => {
    runAnimation();
  });

}


export{ initCountdown }
