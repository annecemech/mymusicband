
const playcheckbox = () => {
  const button = document.querySelector('.btn-play');
  const buttonPause = document.querySelector('.btn-pause');
  const checkbox = document.querySelectorAll('.checkrecording');
  const audio1 = new Audio(document.querySelector('#audio1').dataset.recordurl);
  const audio2 = new Audio(document.querySelector('#audio2').dataset.recordurl);
  console.log(audio1);
  console.log(audio2);



  button.addEventListener('click', (event) =>{
    if (document.querySelector('#audio1').checked) {
      audio1.play();
    }
    else if (document.querySelector('#audio2').checked) {
      audio2.play();
    }
  });

  buttonPause.addEventListener('click', (event) =>{
    if (document.querySelector('#audio1').checked) {
      audio1.pause();
    }
    else if (document.querySelector('#audio2').checked) {
      audio2.pause();
    }
  });



//   button.addEventListener('click', (event) =>{
//     const baliseaudio = document.querySelectorAll('.audio-test');
//     console.log(baliseaudio);
//     checkbox.forEach(element => {
//       if(element.checked) {
//         const audio = new Audio(element.dataset.recordurl);
//         audio.classList.add('audio-test')
//         audio.volume = 0.1;
//         audio.play();
//       }
//     });
//   });
}

export {playcheckbox};
