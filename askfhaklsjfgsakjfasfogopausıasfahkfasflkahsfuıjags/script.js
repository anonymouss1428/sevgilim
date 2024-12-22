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
