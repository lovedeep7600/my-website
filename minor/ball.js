let score = 0;
let gameInterval;

const gameArea = document.getElementById('game-area');
const scoreDisplay = document.getElementById('score');
const startButton = document.getElementById('start-button');

function startGame() {
    score = 0;
    scoreDisplay.textContent = `Score: ${score}`;
    gameArea.innerHTML = ''; // Clear the game area
    gameInterval = setInterval(addStressBall, 1000);
}

function addStressBall() {
    const ball = document.createElement('div');
    ball.classList.add('stress-ball');
    ball.style.top = Math.random() * (gameArea.clientHeight - 50) + 'px';
    ball.style.left = Math.random() * (gameArea.clientWidth - 50) + 'px';
    
    ball.addEventListener('click', () => {
        score++;
        scoreDisplay.textContent = `Score: ${score}`;
        ball.remove(); // Remove the ball when clicked
    });

    gameArea.appendChild(ball);

    // Remove the ball after 5 seconds if not clicked
    setTimeout(() => {
        if (ball.parentNode) {
            ball.remove();
        }
    }, 5000);
}

startButton.addEventListener('click', () => {
    clearInterval(gameInterval);
    startGame();
    
});
