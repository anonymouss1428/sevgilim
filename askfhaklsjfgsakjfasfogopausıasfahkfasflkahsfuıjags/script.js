// Kar tanesi eklemek için
function createSnowflakes() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.innerText = '❄'; // Kar tanesi simgesi
    snowflake.style.left = `${Math.random() * 100}vw`; // Ekranın farklı yerlerinde başlasın
    snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`; // Kar tanelerinin farklı hızlarda düşmesi
    document.body.appendChild(snowflake);

    // Kar tanesini 10 saniye sonra kaldır
    setTimeout(() => {
        snowflake.remove();
    }, 10000);
}

// Her 0.1 saniyede bir kar tanesi ekle
setInterval(createSnowflakes, 100);

// Cevap Kontrol Fonksiyonu
function checkAnswer(correct, current, next, giftImage = null) {
    const currentElement = document.getElementById(current);
    const nextElement = document.getElementById(next);
    const resultElement = document.getElementById('result');
    const giftImgElement = document.getElementById('gift-image');

    // Cevap doğruysa
    const userAnswer = event.target.innerText; // Kullanıcının cevabını al
    if (userAnswer === correct) {
        if (giftImage) {
            // Hediye resmini göster
            giftImgElement.src = giftImage;
            resultElement.classList.remove('hidden');
            currentElement.classList.add('hidden');

            // 2 saniye sonra sonucu gizle ve bir sonraki soruyu göster
            setTimeout(() => {
                resultElement.classList.add('hidden');
                if (nextElement) {
                    nextElement.classList.remove('hidden');
                }
            }, 2000);
        }
    } else {
        // Yanlış cevap verildiğinde
        alert("Yanlış cevap! Tekrar deneyin.");
    }
}
