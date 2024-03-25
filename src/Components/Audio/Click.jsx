export function handleClickAudio() {
  const clickAudio = new Audio("./assets/audio/fx/click.mp3");
  clickAudio.volume = 0.5;
  clickAudio.play();
}