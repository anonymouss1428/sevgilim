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
            showHearts();
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
        snowflake.style.left = Math.random() * window.innerWidth + 'px';
        snowflake.style.animationDuration = 5 + Math.random() * 5 + 's';
        snowflake.style.opacity = Math.random();
        container.appendChild(snowflake);

        setTimeout(() => {
            snowflake.remove();
        }, 5000);
    }, 200);
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

function showSnow() {
    const container = document.querySelector('.effect-container');
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const snowflake = document.createElement('div');
            snowflake.className = 'snowflake';
            snowflake.textContent = '❄';
            snowflake.style.left = Math.random() * window.innerWidth + 'px';
            snowflake.style.top = -50 + Math.random() * -200 + 'px'; // Kar tanelerinin yukarıdan başlaması
            snowflake.style.animation = 'fall 10s infinite linear'; // Daha yavaş düşmesi
            snowflake.style.opacity = Math.random();
            container.appendChild(snowflake);

            setTimeout(() => {
                snowflake.remove();
            }, 10000); // Kar tanesinin görünme süresi
        }, i * 200);
    }
}

window.onload = function() {
    startSnowfall();
    showSnow();
};
