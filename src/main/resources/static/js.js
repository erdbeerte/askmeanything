function answer() {
    let inputText = document.getElementById("inputtext");
    let answerdiv = document.getElementById("answerid");

    if (inputText.value != '') {
        answerdiv.hidden = false;
        speak();
    }
}

function clearInput() {
    let inputText = document.getElementById("inputtext");
    let answerdiv = document.getElementById("answerid");

    inputText.value = '';
    answerdiv.hidden = true;
}

function speak () {
    let text = '';
    if (window.selectedLan === 'es') {
        text = 'Por el corona virus';
    } else if (window.selectedLan === 'en') {
        text = 'Due to corona virus';
    } else if (window.selectedLan === 'de') {
        text = 'Wegen Corona';
    }
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.pitch = 1.5;
    utterance.volume = 0.5;
    utterance.rate = 8;
    utterance.lang = window.selectedLan;
    speechSynthesis.speak(utterance);
}