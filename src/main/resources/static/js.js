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

function startTimer () {
    console.log('Start timer');
    timer = setInterval(function () {
        let deadline = new Date('03/14/2020 20:00 GMT-0800');
        let now = new Date();
        let diff = now - deadline;
        let diff_seg = Math.floor(diff / 1000);
        let seg = diff_seg % 60;
        let min = Math.floor(diff_seg / 60) % 60;
        let hr = Math.floor(diff_seg / 3600) % 24;
        let day = Math.floor(diff_seg / 86400);
        let text = day + 'dias ' + hr + 'h ' + min + 'm ' + seg + 's' + ' de encerramiento';
        document.getElementById('timer').innerHTML = text;
    }, 1000);
}