function checkAnswer(correct, current, next, giftImage = null) {
    const currentElement = document.getElementById(current);
    const nextElement = document.getElementById(next);
    const resultElement = document.getElementById('result');
    const giftImgElement = document.getElementById('gift-image');

    const selectedAnswer = event.target.innerText;

    // Doğru cevap kontrolü
    if (selectedAnswer === correct) {
        if (giftImage) {
            showHearts(); // Doğru cevap verildiğinde kalp efekti göster
            giftImgElement.src = giftImage;
            resultElement.classList.remove('hidden');
            currentElement.classList.add('hidden');
            setTimeout(() => {
                resultElement.classList.add('hidden');
                if (nextElement) {
                    nextElement.classList.remove('hidden');
                }
            }, 2000);
        }
    } else {
        alert("Yanlış cevap! Tekrar deneyin.");
    }

    // Son soru bitince teşekkür mesajını göster
    if (next === 'result') {
        showThankYouMessage();
    }
}

function showHearts() {
    const container = document.querySelector('.effect-container');
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.textContent = '❤';
            heart.style.left = Math.random() * window.innerWidth + 'px';
            heart.style.top = window.innerHeight + 'px';
            heart.style.animation = 'rise 2s ease-out';
            container.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 2000);
        }, i * 200);
    }
}

function createBackgroundSnowflakes() {
    const container = document.createElement('div');
    container.className = 'background-snowflakes';
    document.body.appendChild(container);

    const numberOfSnowflakes = 4;
    for (let i = 0; i < numberOfSnowflakes; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.textContent = '❄';
        snowflake.style.left = Math.random() * 100 + 'vw';
        snowflake.style.fontSize = 4 + Math.random() * 2 + 'em';
        snowflake.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(snowflake);
    }
}

function showThankYouMessage() {
    const thankYouMessage = document.getElementById('thankYouMessage');
    thankYouMessage.classList.remove('hidden');
}

window.onload = createBackgroundSnowflakes;
