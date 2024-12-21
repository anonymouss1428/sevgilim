function checkAnswer(correct, current, next) {
    const currentQuestion = document.getElementById(current);
    const nextQuestion = next ? document.getElementById(next) : null;

    if (confirm(`Doğru cevap: ${correct}. Sonraki soruya geçmek ister misin?`)) {
        currentQuestion.classList.add('hidden');
        if (nextQuestion) {
            nextQuestion.classList.remove('hidden');
        } else {
            document.getElementById('result').classList.remove('hidden');
        }
    } else {
        alert("Yanlış cevap! Lütfen tekrar deneyin.");
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const snowContainer = document.querySelector('.snow');

    for (let i = 0; i < 150; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.style.left = Math.random() * 100 + 'vw';
        snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
        snowflake.style.animationDelay = Math.random() * 5 + 's';
        snowflake.textContent = '❄';
        snowContainer.appendChild(snowflake);
    }
});
