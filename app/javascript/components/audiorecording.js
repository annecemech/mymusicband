import { initCountdown } from '../components/countdown';
import swal from 'sweetalert';

const deleteClip = () => {
  const cardPillule = document.querySelector('.card-record');
  const clip = cardPillule.querySelector('.clip');
  const buttonsave = document.querySelector('.btn-save');
  console.log(clip);
  clip.parentNode.removeChild(clip);
  buttonsave.classList.add("d-none");
  cardPillule.classList.remove("card-record-grow");
}

const loadAudioRecording = () => {

  //HTML Elements
  const partitionShow = document.querySelector(".partition-show");
  const cardPillule = document.querySelector('.card-record');
  const cardRecord = document.querySelector('.card-record');
  // Recorder (upper part)
  const record = document.querySelector('.btn-record');
  const stop = document.querySelector('.btn-stop');
  const canvas = document.querySelector('.visualizer');
  const mainSection = document.querySelector('.main-controls');
  // Recorded audioclip
  const soundClips = document.querySelector('.sound-clips');
  const buttonsave = document.querySelector('.btn-save');
  // Playbacks
  const checkbox = document.querySelectorAll('.checkrecording');


  let abortController = null;
  const audioarray = [];


    if (partitionShow) {

      // create an array with of selected audio tracks
      checkbox.forEach(element => {
        element.addEventListener('change', (event) => {
          if(element.checked) {
            audioarray.push(new Audio(element.dataset.recordurl));
          } else {
            audioarray.splice(new Audio(element.dataset.recordurl), 1)
          }
        });
      });

      // disable stop button while not recording
      stop.disabled = true;

      // visualiser setup - create web audio api context and canvas
      let audioCtx;
      const canvasCtx = canvas.getContext("2d");

      //main block for doing the audio recording
      if (navigator.mediaDevices.getUserMedia) {
        const constraints = { audio: true };
        let chunks = [];

        let onSuccess = function(stream) {
          const mediaRecorder = new MediaRecorder(stream);
          visualize(stream);

          record.onclick = function() {
            console.log(mediaRecorder);

            // if one record already done, delete it
            if (cardPillule.querySelector('.clip')){
              deleteClip();
            }

            abortController = new AbortController();
            initCountdown(audioarray, abortController.signal, mediaRecorder);

            record.classList.add("button-inactive");
            record.disabled = true;
            stop.classList.remove("button-inactive");
            stop.disabled = false;
          }

          stop.onclick = function() {
            mediaRecorder.stop();

            audioarray.forEach(element => {
                element.pause();
            });

            stop.classList.add("button-inactive");
            stop.disabled = true;
            record.classList.remove("button-inactive");
            record.disabled = false;

            cardRecord.classList.add("card-record-grow");
            buttonsave.classList.remove("d-none");

            // if recording ongoing, we stop the scrolling
            if ( abortController ) {
              abortController.abort();
              abortController = null;
            }
          }

          mediaRecorder.onstop = function(e) {
            // const clipName = prompt('Enter a name for your sound clip?','My unnamed clip');
            const clipName = "Your recording";
            swal("Enter a name for your recording:", {
              content: "input",
            })
            .then((value) => {
              if(value === "") {
                clipLabel.textContent = clipName;
              } else {
                clipLabel.textContent = value;
              }
            });


            const clipContainer = document.createElement('div');
            const clipLabel = document.createElement('p');
            const audio = document.createElement('audio');
            const deleteButton = document.createElement('button');
            const saveForm = document.createElement('div');

            clipContainer.classList.add('clip');
            audio.setAttribute('controls', '');
            // deleteButton.textContent = 'Delete';
            deleteButton.className = 'btn-trash delete fas fa-trash';

            if(clipName === null) {
              clipLabel.textContent = 'My unnamed clip';
            } else {
              clipLabel.textContent = clipName;
            }


            clipContainer.appendChild(audio);
            clipContainer.appendChild(clipLabel);
            clipContainer.appendChild(deleteButton);
            soundClips.appendChild(clipContainer);

            audio.controls = true;
            const blob = new Blob(chunks, { 'type' : 'audio/mpeg-3' });
            chunks = [];
            const audioURL = window.URL.createObjectURL(blob);

            const form = document.getElementById('new_recording');

            form.onsubmit = function() {
              const formData = new FormData(form);
              const xhr = new XMLHttpRequest();

              formData.append('recording[name]', clipLabel.textContent);
              formData.append('recording[resource]', blob, 'myfilename');
              formData.append('recording[partition_id]', mainSection.dataset.partitionid);

              xhr.open('POST', form.getAttribute('action'), true);
              xhr.send(formData);

              // location.reload();
              xhr.onload = function() {
                if (xhr.status != 200) { // analyze HTTP status of the response
                  swal("Oops!", "Something went wrong, try again!", "error"); // e.g. 404: Not Found
                } else { // show the result
                  swal("Good job!", "Your recording was saved!", "success") // response is the server response
                  .then(function() {
                    redirect: window.location.replace(`/tracks/${mainSection.dataset.trackid}`);
                  });
                }
              };
              // location.replace("http://website.com/webpage2.html/go/" + $('#column123').text())
              return false;
            }

            audio.src = audioURL;

            deleteButton.onclick = function(e) {
              deleteClip();
            }

            clipLabel.onclick = function() {
              const existingName = clipLabel.textContent;
              swal("Enter a new name for your recording:", {
                content: "input",
              })
                .then((value) => {
                  if(value === "") {
                    clipLabel.textContent = existingName;
                  } else {
                    clipLabel.textContent = value;
                  }
                });
              }
          }

              // const newClipName = prompt('Enter a new name for your sound clip?');
              // if(newClipName === null) {
              //   clipLabel.textContent = existingName;
              // } else {
              //   clipLabel.textContent = newClipName;
              // }

          mediaRecorder.ondataavailable = function(e) {
            chunks.push(e.data);
          }
        }

        let onError = function(err) {
          console.log('The following error occured: ' + err);
        }

        navigator.mediaDevices.getUserMedia(constraints).then(onSuccess, onError);

      } else {
         console.log('getUserMedia not supported on your browser!');
      }

      function visualize(stream) {
        if(!audioCtx) {
          audioCtx = new AudioContext();
        }

        const source = audioCtx.createMediaStreamSource(stream);

        const analyser = audioCtx.createAnalyser();
        analyser.fftSize = 2048;
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        source.connect(analyser);
        //analyser.connect(audioCtx.destination);

        draw()

        function draw() {
          const WIDTH = canvas.width
          const HEIGHT = canvas.height;

          requestAnimationFrame(draw);

          analyser.getByteTimeDomainData(dataArray);

          canvasCtx.fillStyle = 'rgb(236, 240, 241)';
          canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

          canvasCtx.lineWidth = 2;
          canvasCtx.strokeStyle = 'rgb(249, 56, 26)';

          canvasCtx.beginPath();

          let sliceWidth = WIDTH * 1.0 / bufferLength;
          let x = 0;


          for(let i = 0; i < bufferLength; i++) {

            let v = dataArray[i] / 128.0;
            let y = v * HEIGHT/2;

            if(i === 0) {
              canvasCtx.moveTo(x, y);
            } else {
              canvasCtx.lineTo(x, y);
            }

            x += sliceWidth;
          }

          canvasCtx.lineTo(canvas.width, canvas.height/2);
          canvasCtx.stroke();

        }
      }

      window.onresize = function() {
        canvas.width = mainSection.offsetWidth;
      }

      window.onresize();

    }
}

export { loadAudioRecording };
