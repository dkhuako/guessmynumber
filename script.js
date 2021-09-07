'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.guess').addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
      displayMessage('No number!');
    } else if (guess === secretNumber) {
      displayMessage('Correct number!');
      document.querySelector('.number').textContent = secretNumber;

      document.querySelector('body').style.backgroundColor = '#60b347';

      document.querySelector('.number').style.width = '30rem';

      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    } else if (guess !== secretNumber) {
      if (score > 0) {
        displayMessage(
          guess > secretNumber ? 'Number is too high' : 'Number is too low'
        );
        score--;
        document.querySelector('.score').textContent = score;
      } else if (score <= 0) displayMessage('You lost the game!');
      document.querySelector('.score').textContent = score;
    }
  }
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //when there is no input
  if (!guess) {
    //document.querySelector('.message').textContent = 'No Number!';
    displayMessage('No number!');
  }
  //when player win
  else if (guess === secretNumber) {
    displayMessage('Correct number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 0) {
      displayMessage(
        guess > secretNumber ? 'Number is too high' : 'Number is too low'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else if (score <= 0) displayMessage('You lost the game!');
    document.querySelector('.score').textContent = score;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
