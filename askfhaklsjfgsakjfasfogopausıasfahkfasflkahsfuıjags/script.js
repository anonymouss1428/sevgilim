function startGame() {
    document.getElementById('startPage').classList.add('hidden');
    document.getElementById('question1').classList.remove('hidden');
    startQuestionGifs(); // Soru GIF'lerini başlat
    toggleSnowmanGifVisibility(false); // Snowman GIF'ini gizle
}

function checkAnswer(correct, current, next, giftImage = null) {
    const currentElement = document.getElementById(current);
    const nextElement = document.getElementById(next);
    const resultElement = document.getElementById('result');
    const giftImgElement = document.getElementById('gift-image');
    const selectedAnswer = event.target.innerText;

    toggleSnowmanGifVisibility(false); // Snowman GIF'ini gizle

    if (selectedAnswer === correct) {
        if (giftImage) {
            showHearts(2000);
            toggleQuestionGifVisibility(false); // Soru GIF'lerini gizle
            giftImgElement.src = giftImage;
            resultElement.classList.remove('hidden');
            currentElement.classList.add('hidden');
            setTimeout(() => {
                resultElement.classList.add('hidden');
                if (nextElement) {
                    if (next === 'result') {
                        showThankYouMessage();
                        toggleQuestionGifVisibility(false); // Soru GIF'lerini gizle
                        toggleSnowmanGifVisibility(true); // Snowman GIF'ini göster
                    } else {
                        nextElement.classList.remove('hidden');
                        startQuestionGifs(); // Soru GIF'lerini başlat
                    }
                }
            }, 4000);
        }
    } else {
        alert("Yanlış cevap! Tekrar deneyin.");
    }
}

function toggleQuestionGifVisibility(show) {
    const treeGif = document.querySelector('.christmas-tree');
    const globeGif = document.querySelector('.christmas-snowglobe');
    const displayValue = show ? 'block' : 'none';
    if (treeGif) treeGif.style.display = displayValue;
    if (globeGif) globeGif.style.display = displayValue;
}

function toggleSnowmanGifVisibility(show) {
    const snowManGif = document.querySelector('.christmas-snowman');
    const displayValue = show ? 'block' : 'none';
    if (snowManGif) {
        snowManGif.style.display = displayValue;
    }
}

function startQuestionGifs() {
    toggleQuestionGifVisibility(true); // Soru GIF'lerini göster
}

function stopQuestionGifs() {
    toggleQuestionGifVisibility(false); // Soru GIF'lerini gizle
}

function showThankYouMessage() {
    const thankYouMessage = document.getElementById('thankYouMessage');
    thankYouMessage.classList.remove('hidden');
    toggleQuestionGifVisibility(false); // Soru GIF'lerini gizle
    toggleSnowmanGifVisibility(true); // Snowman GIF'ini göster

    // Sayfa yenileme butonunu oluştur
    const refreshButton = document.createElement('button');
    refreshButton.textContent = 'Tekrar Oyna';
    refreshButton.className = 'refresh-button'; // İsteğe bağlı: Stil için bir sınıf ekleyebilirsiniz
    refreshButton.addEventListener('click', function() {
        location.reload(); // Sayfayı yeniler
    });

    // Butonu teşekkür mesajına ekle
    if (!document.querySelector('.refresh-button')) { // Eğer buton zaten varsa oluşturma
        thankYouMessage.appendChild(refreshButton);
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

function showHearts(timeout) {
    const container = document.querySelector('.effect-container');
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.textContent = '❤';
            heart.style.left = Math.random() * window.innerWidth + 'px';
            heart.style.top = window.innerHeight + 'px';
            container.appendChild(heart);
            setTimeout(() => heart.remove(), timeout);
        }, i * 200);
    }
}

window.onload = function() {
    createBackgroundSnowflakes();
    toggleSnowmanGifVisibility(true); // Başlangıçta Snowman GIF'i göster

    // Soru GIF'lerini başlangıçta gizle
    const treeGif = document.querySelector('.christmas-tree');
    const globeGif = document.querySelector('.christmas-snowglobe');
    if (treeGif) treeGif.style.display = 'none';
    if (globeGif) globeGif.style.display = 'none';
};


