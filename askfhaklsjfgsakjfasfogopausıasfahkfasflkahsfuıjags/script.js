function checkAnswer(correct, current, next, giftImage = null) {
    const currentElement = document.getElementById(current);
    const nextElement = document.getElementById(next);
    const resultElement = document.getElementById('result');
    const giftImgElement = document.getElementById('gift-image');
    showSnows();
    if (event.target.innerText === correct) {

        if (giftImage) {
            giftImgElement.src = giftImage;
            resultElement.classList.remove('hidden');
            currentElement.classList.add('hidden');
            showHearts();  // Sadece kalp efekti çalışacak
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

function showSnows() {
    const container = document.querySelector('.effect-container');
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            const snowflake = document.createElement('div');
            snowflake.className = 'snowflake';
            snowflake.textContent = '❄';
            snowflake.style.left = Math.random() * window.innerWidth + 'px';
            snowflake.style.top = window.innerHeight + 'px';
            snowflake.style.animation = 'rise 2s ease-out';
            container.appendChild(snowflake);

            setTimeout(() => {
                snowflake.remove();
            }, 2000);
        }, i * 200);
    }
}

window.onload = () => {
    showSnows();
};
