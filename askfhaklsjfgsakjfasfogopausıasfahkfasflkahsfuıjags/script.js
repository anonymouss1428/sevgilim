function checkAnswer(correctAnswer, currentQuestionId, nextQuestionId, giftImageSrc) {
    // Kullanıcı cevabını kontrol et
    const buttons = document.querySelectorAll(`#${currentQuestionId} button`);
    const userAnswer = event.target.innerText;

    // Eğer doğru cevap verilmişse
    if (userAnswer === correctAnswer) {
        // Mevcut soruyu gizle
        document.getElementById(currentQuestionId).classList.add('hidden');

        // Sonraki soruyu göster
        if (nextQuestionId) {
            document.getElementById(nextQuestionId).classList.remove('hidden');
        }

        // Hediye resmi ekle
        if (giftImageSrc) {
            const giftImage = document.getElementById('gift-image');
            giftImage.src = giftImageSrc;
            document.getElementById('result').classList.remove('hidden');

            // Hediye resmi 2 saniye sonra kaybolacak
            setTimeout(() => {
                document.getElementById('result').classList.add('hidden');
            }, 2000);
        }
    } else {
        // Yanlış cevap verildiyse
        alert("Yanlış cevap! Lütfen tekrar deneyin.");
    }
}
