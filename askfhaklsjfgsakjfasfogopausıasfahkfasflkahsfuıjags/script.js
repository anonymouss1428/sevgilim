function checkAnswer(correct, current, next, giftImage = null) {
    const currentElement = document.getElementById(current);
    const nextElement = document.getElementById(next);
    const resultElement = document.getElementById('result');
    const giftImgElement = document.getElementById('gift-image');

    if (event.target.innerText === correct) {
        if (giftImage) {
            giftImgElement.src = giftImage;
            resultElement.classList.remove('hidden');
            currentElement.classList.add('hidden');
            showHearts();  // Kalp efekti doğru cevap verildiğinde başlar
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
}

function startSnowfall() {
    const container = document.createElement('div');
    container.className = 'effect-container';
    document.body.appendChild(container);

    setInterval(() => {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.textContent = '❄';
        snowflake.style.left = Math.random() * window.innerWidth + 'px'; // Yatayda rastgele konum
        snowflake.style.animationDuration = 5 + Math.random() * 3 + 's'; // Yavaş düşme
        snowflake.style.opacity = Math.random();
        container.appendChild(snowflake);

        setTimeout(() => {
            snowflake.remove();
        }, 8000); // Kar tanelerini daha uzun süre ekranda tut
    }, 1000); // Kar tanelerini daha az ve büyük yapmak için interval

    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = '❤';
        heart.style.left = Math.random() * window.innerWidth + 'px'; // Yatayda rastgele konum
        heart.style.animationDuration = 2 + Math.random() * 1 + 's'; // Kalp hızı rastgele
        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 3000); // Kalp efekti 3 saniye sürsün
    }, 1000);
}

window.onload = startSnowfall;
