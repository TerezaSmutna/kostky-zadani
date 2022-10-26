import { Dice } from './Dice/index.js';

const roll = () => {
  return Math.floor(Math.random() * 6) + 1;
};

function vyberKostky() {
  document.querySelector('.dice-row').append(
    Dice({ side: roll() }),
    Dice({ side: roll() }),
    Dice({ side: roll() }),
    Dice({ side: roll() }),
  )
};
vyberKostky();

const pridat = document.querySelector('#btn-add')
pridat.addEventListener('click', () => {
  document.querySelector('.dice-row').append(
    Dice({ side: roll() }),
  )
})


const zamichat = document.querySelector('#btn-shuffle')
zamichat.addEventListener('click', () => {
  document.querySelector('.dice-row').innerHTML = '';
  vyberKostky();
})