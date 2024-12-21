function createSnowflakes() {
    const snowflakeCount = 100; // Kar tanesi sayısı
    const container = document.body;

    for (let i = 0; i < snowflakeCount; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.innerText = '❄';
        snowflake.style.left = Math.random() * 100 + 'vw';
        snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';
        snowflake.style.animationDuration = Math.random() * 5 + 5 + 's';
        container.appendChild(snowflake);
    }
}

createSnowflakes();
