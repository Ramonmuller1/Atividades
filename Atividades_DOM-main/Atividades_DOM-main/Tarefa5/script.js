document.addEventListener('DOMContentLoaded', function() {
    let targetNumber = generateRandomNumber();
    const guessInput = document.getElementById('guessInput');
    const submitGuessButton = document.getElementById('submitGuessButton');
    const feedback = document.getElementById('feedback');
    const restartButton = document.getElementById('restartButton');

    function generateRandomNumber() {
        return Math.floor(Math.random() * 100) + 1;
    }

    function checkGuess() {
        const guess = parseInt(guessInput.value, 10);

        if (isNaN(guess) || guess < 1 || guess > 100) {
            feedback.textContent = 'Por favor, insira um número entre 1 e 100.';
            return;
        }

        if (guess < targetNumber) {
            feedback.textContent = 'Muito baixo! Tente novamente.';
        } else if (guess > targetNumber) {
            feedback.textContent = 'Muito alto! Tente novamente.';
        } else {
            feedback.textContent = 'Parabéns! Você acertou!';
            submitGuessButton.style.display = 'none';
            restartButton.style.display = 'block';
        }
    }

    submitGuessButton.addEventListener('click', checkGuess);

    restartButton.addEventListener('click', function() {
        targetNumber = generateRandomNumber();
        guessInput.value = '';
        feedback.textContent = '';
        submitGuessButton.style.display = 'block';
        restartButton.style.display = 'none';
    });
});
