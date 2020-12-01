import Crunker from "crunker"

const downloadMix = () => {

  const button = document.querySelector('.download-mix');

  button.addEventListener("click", (e) => {
    let audio = new Crunker();
    audio
      .fetchAudio("https://server6.mp3quran.net/thubti/001.mp3", "https://server6.mp3quran.net/thubti/059.mp3")
      .then(buffers => audio.mergeAudio(buffers))
      .then(merged => audio.export(merged, "audio/mp3"))
      .then(output => audio.download(output.blob))
      .catch(error => {
        throw new Error(error);
      });
  })

}

export { downloadMix };
