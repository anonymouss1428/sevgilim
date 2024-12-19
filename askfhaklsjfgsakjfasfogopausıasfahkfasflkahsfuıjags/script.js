function checkAnswer(correct, button, current, next) {
    if (button.querySelector('img').alt === correct) {
        if (current && next) {
            // Doğru cevap verildiğinde, doğru soruyu gizle ve bir sonrakini göster
            document.getElementById(current).classList.add('hidden');
            document.getElementById(next).classList.remove('hidden');
        }
    } else {
        button.style.display = 'none'; // Yanlış cevap verildiğinde butonu gizle
    }
}
