export function playMusic() {
  document.getElementById('backgroundMusic').play();
  document.getElementById('backgroundMusic').volume = 0.06;
}

export function pauseMusic() {
  document.getElementById('backgroundMusic').pause();
}
