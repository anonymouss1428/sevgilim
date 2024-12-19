function checkAnswer(correct, button, current, next) {
    // Eğer doğru cevap verilirse, ilgili soruyu gizle ve bir sonrakini göster
    if (button.innerText === correct) {
        if (current && next) {
            document.getElementById(current).classList.add('hidden');
            document.getElementById(next).classList.remove('hidden');
        }
    } else {
        // Yanlış cevap verildiğinde, butonu gizle
        button.style.display = 'none';
    }
}
