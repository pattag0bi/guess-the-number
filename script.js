'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    //when there is no guess
    displayMessage(' ⚠️ no number! ');
  } else if (guess === secretNumber) {
    //correct guess
    displayMessage('Correct Number!! 🎉');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    document.querySelector('.number').style.width = '30rem';
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      displayMessage(guess > secretNumber ? '🔺 too high! ' : '🔻 too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('you lose 😵');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = ' ';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
