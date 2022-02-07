'use strict';
const randomNumber = function(min, max) {
  return Math.round(Math.random() * (max - min) + min);
};

let score = 20;
let highscore = 0;
score = document.querySelector('.score').textContent;
console.log((document.querySelector('.number').value = randomNumber(1, 20)));

document.querySelector('.check').addEventListener('click', function() {
  const guess = Number(document.querySelector('.guess').value);

  const numberGame = document.querySelector('.number').value;

  if (!guess) {
    document.querySelector('.message').textContent = ' No number!';
  } else if (guess === numberGame) {
    document.querySelector('.message').textContent = ' Correct Number!';
    document.querySelector('.number').textContent = numberGame;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== numberGame) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > numberGame ? ' Too high!' : ' Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = ' You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function() {
  score = 20;
  document.querySelector('.number').value = randomNumber(1, 20);

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
