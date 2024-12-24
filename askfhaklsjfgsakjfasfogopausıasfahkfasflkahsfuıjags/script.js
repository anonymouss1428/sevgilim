function startGame() {
    // Başlangıç sayfasını gizle
    document.getElementById('startPage').classList.add('hidden');

    // İlk soruyu göster
    document.getElementById('question1').classList.remove('hidden');
    startGifs(); // Başlangıçta GIF'leri göster
}

function checkAnswer(correct, current, next, giftImage = null) {
    const currentElement = document.getElementById(current);
    const nextElement = document.getElementById(next);
    const resultElement = document.getElementById('result');
    const giftImgElement = document.getElementById('gift-image');

    const selectedAnswer = event.target.innerText;

    // Doğru cevap kontrolü
    if (selectedAnswer === correct) {

        if (giftImage) {
            // Hediye görseli gösterildiğinde GIF'leri gizle
            showHearts();
            stopGifs();
            giftImgElement.src = giftImage;
            resultElement.classList.remove('hidden');
            currentElement.classList.add('hidden');
            setTimeout(() => {
                resultElement.classList.add('hidden');
                if (nextElement) {
                 if (next === 'result') {
                        showThankYouMessage();
                        stopGifs();
                    }
                    else{
                        nextElement.classList.remove('hidden');
                        startGifs();
                    }

                }
            }, 2000);

        }
    } else {
        alert("Yanlış cevap! Tekrar deneyin.");
    }

    // Son soru bitince teşekkür mesajını göster


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

            // Kalp animasyonu bitince kaldır
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

    const numberOfSnowflakes = 50;
    for (let i = 0; i < numberOfSnowflakes; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.textContent = '❄';
        snowflake.style.left = Math.random() * 100 + 'vw';
        snowflake.style.bottom = Math.random() * 900 + 'vh'
        snowflake.style.fontSize = 2 + Math.random() * 2 + 'em';
        snowflake.style.animationDelay = 0.5 * Math.random() + 's';
        container.appendChild(snowflake);
    }
}

function stopGifs() {
    // Hediye görseli gösterildiğinde GIF'leri durdur
    const treeGif = document.querySelector('.christmas-tree');
    const globeGif = document.querySelector('.christmas-snowglobe');
    if (treeGif && globeGif) {
        treeGif.style.display = 'none';
        globeGif.style.display = 'none';
    }
}

function startGifs() {
    // Başlangıçta GIF'leri göster
    const treeGif = document.querySelector('.christmas-tree');
    const globeGif = document.querySelector('.christmas-snowglobe');
    if (treeGif && globeGif) {
        treeGif.style.display = 'block';
        globeGif.style.display = 'block';
    }
}

function showThankYouMessage() {
    const thankYouMessage = document.getElementById('thankYouMessage');
    thankYouMessage.classList.remove('hidden');

}

// Sayfa yüklendiğinde gif'leri başlat
window.onload = function() {
    createBackgroundSnowflakes();
};
