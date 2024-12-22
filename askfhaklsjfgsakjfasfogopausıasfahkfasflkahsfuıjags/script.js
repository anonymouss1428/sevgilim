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

    // "Seni Seviyorum" yazısını kar tanelerinden yapmak
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

        // İlgili harfi yerleştir
        const charElement = document.createElement('div');
        charElement.textContent = char;
        charElement.style.position = 'absolute';
        charElement.style.top = '50%';
        charElement.style.left = `${(50 + (index
