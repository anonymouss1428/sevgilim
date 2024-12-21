function startSnowfall() {
    const container = document.createElement('div');
    container.className = 'effect-container';
    document.body.appendChild(container);

    // Kar tanelerini yarat ve ekranda dağılmasını sağla
    setInterval(() => {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.textContent = '❄';
        snowflake.style.left = Math.random() * window.innerWidth + 'px'; // Yatayda rastgele konum
        snowflake.style.animationDuration = 12 + Math.random() * 3 + 's'; // Daha yavaş düşme
        snowflake.style.opacity = Math.random();
        container.appendChild(snowflake);

        // Kar tanesini temizle
        setTimeout(() => {
            snowflake.remove();
        }, 15000); // Kar taneleri daha uzun süre düşsün
    }, 1000); // Kar tanelerinin daha az ve büyük olmasını sağlamak için aralık 1000 ms

    // Kalp efektini yarat ve yukarıdan aşağıya düşmesini sağla
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = '❤';
        heart.style.left = Math.random() * window.innerWidth + 'px'; // Yatayda rastgele konum
        heart.style.animationDuration = 4 + Math.random() * 2 + 's'; // Kalp hızı rastgele
        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000); // Kalp efekti 5 saniye sürsün
    }, 1000);
}

window.onload = startSnowfall;
