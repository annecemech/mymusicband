
const playcheckbox = () => {
  const button = document.querySelector('.btn-play');
  const checkbox = document.querySelectorAll('.checkrecording');

  button.addEventListener('click', (event) =>{
    event.target.classList.add('disabled');
    checkbox.forEach(element => {
      if(element.checked) {
        const audio = new Audio(element.dataset.recordurl);
        audio.play();
      }
    });
  });
}

export {playcheckbox};
