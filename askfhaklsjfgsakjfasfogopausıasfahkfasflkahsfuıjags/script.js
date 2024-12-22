window.onload = function() {
    createBackgroundSnowflakes(); // Sayfa yüklendiğinde kar tanelerini ve "Seni Seviyorum" yazısını oluştur
};

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
            showHearts(); // Kalp efekti doğru cevapta gösterilecek
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

    // "Seni Seviyorum" yazısını kar tanelerinden oluştur
    const message = 'Seni Seviyorum';

    // Mesajın her bir harfi için kar taneleri eklemek
    const messageArray = message.split('');
    messageArray.forEach((char, index) => {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.textContent = '❄'; // Kar taneleri
        snowflake.style.position = 'absolute';
        snowflake.style.fontSize = '2.5em';
        snowflake.style.color = '#fff';
        snowflake.style.top = `${50 + (Math.random() * 10)}%`;
        snowflake.style.left = `${(50 + (index * 3))}%`; // Mesajın her harfi kar tanesiyle yapılacak
        snowflake.style.animation = `fall ${Math.random() * 5 + 5}s linear infinite`;
        container.appendChild(snowflake);
    });

    setTimeout(() => {
        createSnowflakes();
    }, 5000); // Mesaj gösterildikten sonra kar yağmaya başlasın
}

function createSnowflakes() {
    const container = document.querySelector('.background-snowflakes');
    const numberOfSnowflakes = 10; // Kar taneleri sayısı

    for (let i = 0; i < numberOfSnowflakes; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.textContent = '❄'; // Kar tanesi simgesi
        snowflake.style.left = Math.random() * 100 + 'vw'; // Rastgele yatay konum
        snowflake.style.fontSize = Math.random() * 10 + 10 + 'px'; // Farklı boyutlarda kar taneleri
        snowflake.style.animationDuration = Math.random() * 5 + 5 + 's'; // Her kar tanesinin farklı hızla düşmesi
        snowflake.style.animationName = 'fall';
        container.appendChild(snowflake);
    }
}
