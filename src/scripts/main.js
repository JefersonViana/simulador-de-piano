const teclas = document.querySelectorAll('.key');
const pianoTeclas = document.querySelectorAll('.piano-teclas');
const keysCheck = document.querySelector('#switch-redondo');
const volume = document.querySelector('#input-volume');
const keys = [];
let changevolume = 100;

const play = (key) => {
  const element = document.querySelector(`.key[data-key="${key.toUpperCase()}"]`);
  element.classList.add('active');
  setTimeout(() => {
      element.classList.remove('active');
  }, 200);
  const sound = new Audio(`./src/tunes/${key}.wav`)
  sound.volume = changevolume / 100;
  sound.play();
}

teclas.forEach(tecla => {
  const key = tecla.dataset.key.toLowerCase();
  keys.push(key);
  tecla.addEventListener('click', () => play(key));
});
  
document.addEventListener('keydown', (event) => {
  const tecla = event.key;
  if (!keys.includes(tecla)) return;
  play(tecla);
});

const showHideKeys = () => {
  pianoTeclas.forEach(tecla => {
    tecla.classList.toggle('hide');
  });
}

keysCheck.addEventListener('click', showHideKeys);

volume.addEventListener('input', (e) => {
  changevolume = e.target.value;
});
