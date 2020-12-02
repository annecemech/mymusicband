const initParticles = () => {
  if (document.getElementById('particles-js')){
    particlesJS.load('particles-js', '/particlesConfig.json');
  }
}

export { initParticles }
