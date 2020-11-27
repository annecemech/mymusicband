
const playcheckbox = () => {
  const button = document.querySelector('.btn-play');
  const buttonPause = document.querySelector('.btn-pause');
  const buttonRecord = document.querySelector('.btn-record');
  const checkbox = document.querySelectorAll('.checkrecording');
  const audioarray = document.querySelectorAll('.audio');
  console.log(audioarray)
  // const audio = new Audio(document.querySelector('#audio').dataset.recordurl);
  console.log(audio)

  // JS version 1 start
  // const audio1 = new Audio(document.querySelector('#audio1').dataset.recordurl);
  // const audio2 = new Audio(document.querySelector('#audio2').dataset.recordurl);
  // console.log(audio1);
  // console.log(audio2);



  // button.addEventListener('click', (event) =>{
  //   if (document.querySelector('#audio1').checked) {
  //     audio1.play();
  //   }
  //   else if (document.querySelector('#audio2').checked) {
  //     audio2.play();
  //   }
  // });

  // buttonPause.addEventListener('click', (event) =>{
  //   if (document.querySelector('#audio1').checked) {
  //     audio1.pause();
  //   }
  //   else if (document.querySelector('#audio2').checked) {
  //     audio2.pause();
  //   }
  // });


  // buttonRecord.addEventListener('click', (event) =>{
  //   if (document.querySelector('#audio1').checked) {
  //     audio1.play();
  //   }
  //   else if (document.querySelector('#audio2').checked) {
  //     audio2.play();
  //   }
  // });

  // buttonPause.addEventListener('click', (event) =>{
  //   if (document.querySelector('#audio1').checked) {
  //     audio1.pause();
  //   }
  //   else if (document.querySelector('#audio2').checked) {
  //     audio2.pause();
  //   }
  // });
  // JS version 1 end

  // JS version 2 start

 button.addEventListener('click', (event) =>{
    if (audio.checked) {
      audio.play();
    }
 });

 buttonPause.addEventListener('click', (event) =>{
    if (audio.checked) {
      audio.pause();
    }
 });
  // JS version 2 end


  // JS version 3 start
  // button.addEventListener('click', (event) =>{
  //   if
  //   checkbox.forEach(element => {
  //     if(element.checked) {
  //       const audio = new Audio(element.dataset.recordurl);
  //       audio.classList.add('audio-test')
  //       audio.volume = 0.1;
  //       audio.play();
  //     }
  //   });
  // });
  // JS version 3 end

}

export {playcheckbox};
