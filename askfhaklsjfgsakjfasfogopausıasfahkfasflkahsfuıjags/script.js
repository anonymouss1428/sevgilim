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

function showSnow() {
    const container = document.querySelector('.effect-container');
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            const snowflake = document.createElement('div');
            snowflake.className = 'snowflake';
            snowflake.textContent = '❄';

            // Kar tanelerinin yatayda rastgele dağılmasını sağlıyoruz
            snowflake.style.left = Math.random() * window.innerWidth + 'px';

            // Kar tanelerinin daha yavaş düşmesini sağlıyoruz
            snowflake.style.animationDuration = (Math.random() * 3 + 4) + 's';
            snowflake.style.opacity = Math.random();

            container.appendChild(snowflake);

            setTimeout(() => {
                snowflake.remove();
            }, 5000); // Kar tanesinin kaybolması için süre
        }, i * 200);
    }
}


function showHearts() {
    const container = document.querySelector('.effect-container');
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.textContent = '❤';
            heart.style.left = Math.random() * window.innerWidth + 'px'; // Yatayda rastgele dağılma
            heart.style.top = window.innerHeight + 'px'; // Kalp aşağıdan yukarıya hareket etmeli
            heart.style.animation = 'rise 2s ease-out';
            container.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 2000);
        }, i * 200);
    }
}

window.onload = startSnowfall;
