function checkAnswer(correct, current, next) {
    if (current && next) {
        document.getElementById(current).classList.add('hidden');
        document.getElementById(next).classList.remove('hidden');
    }
}
