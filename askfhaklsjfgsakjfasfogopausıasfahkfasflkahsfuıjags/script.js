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
        alert("Yanlış cevapp! Tekrar deneyin.");
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

    const numberOfSnowflakes = 15; // Kar tanesi sayısı

    for (let i = 0; i < numberOfSnowflakes; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.textContent = '❄'; // Kar tanesi simgesi
        snowflake.style.left = Math.random() * 100 + 'vw'; // Rastgele yatay konum
        snowflake.style.top = Math.random() * 100 + 'vh'; // Rastgele dikey konum
        snowflake.style.fontSize = 3 + Math.random() * 2 + 'em'; // Farklı büyüklükler
        snowflake.style.animationDelay = Math.random() * 5 + 's'; // Rastgele animasyon başlangıçları
        container.appendChild(snowflake);
    }
}

// Sayfa yüklendiğinde kar tanelerini oluştur
window.onload = createBackgroundSnowflakes;



