function checkAnswer(correct, current, next, giftImage = null) {
    if (!current || !next) return;

    const currentElement = document.getElementById(current);
    const nextElement = document.getElementById(next);
    const resultElement = document.getElementById('result');
    const giftImgElement = document.getElementById('gift-image');

    if (event.target.innerText === correct) {
        // Doğru cevap verdiyse
        if (giftImage) {
            // Hediye resmini göster
            giftImgElement.src = giftImage;
            resultElement.classList.remove('hidden');
            currentElement.classList.add('hidden');

            // 2 saniye sonra sonucu gizle ve bir sonraki soruyu göster
            setTimeout(() => {
                resultElement.classList.add('hidden');
                nextElement.classList.remove('hidden');
            }, 2000);
        }
    } else {
        // Yanlış cevap verdiyse
        alert("Yanlış cevap! Tekrar deneyin.");
    }
}
