function startGame() {
    document.getElementById('startPage').classList.add('hidden');
    document.getElementById('question1').classList.remove('hidden');
    startGifs();
}

function checkAnswer(correct, current, next, giftImage = null) {
    const currentElement = document.getElementById(current);
    const nextElement = document.getElementById(next);
    const resultElement = document.getElementById('result');
    const giftImgElement = document.getElementById('gift-image');
    const selectedAnswer = event.target.innerText;

    if (selectedAnswer === correct) {
        if (giftImage) {
            showHearts();
            toggleGifVisibility(false);
            giftImgElement.src = giftImage;
            resultElement.classList.remove('hidden');
            currentElement.classList.add('hidden');
            setTimeout(() => {
                resultElement.classList.add('hidden');
                if (nextElement) {
                    if (next === 'result') {
                        showThankYouMessage();
                        toggleGifVisibility(false);
                    } else {
                        nextElement.classList.remove('hidden');
                        startGifs();
                    }
                }
            }, 4000);
        }
    } else {
        alert("Yanlış cevap! Tekrar deneyin.");
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
            container.appendChild(heart);
            setTimeout(() => heart.remove(), 2000);
        }, i * 200);
    }
}

function createBackgroundSnowflakes() {
    const container = document.createElement('div');
    container.className = 'background-snowflakes';
    document.body.appendChild(container);

    for (let i = 0; i < 10; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.textContent = '❄';
        snowflake.style.left = Math.random() * 100 + 'vw';
        snowflake.style.animationDelay = Math.random() * 5 + 's';
        snowflake.style.fontSize = 1.5 + Math.random() * 2 + 'em';
        container.appendChild(snowflake);
    }
}

function toggleGifVisibility(show) {
    const treeGif = document.querySelector('.christmas-tree');
    const globeGif = document.querySelector('.christmas-snowglobe');
    const displayValue = show ? 'block' : 'none';
    if (treeGif && globeGif) {
        treeGif.style.display = displayValue;
        globeGif.style.display = displayValue;
    }
}

function startGifs() {
    toggleGifVisibility(true);
}

function stopGifs() {
    toggleGifVisibility(false);
}

function showThankYouMessage() {
    const thankYouMessage = document.getElementById('thankYouMessage');
    thankYouMessage.classList.remove('hidden');
}

window.onload = function() {
    createBackgroundSnowflakes();
};
