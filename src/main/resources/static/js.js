function answer() {
    let inputText = document.getElementById("inputtext");
    let answerdiv = document.getElementById("answerid");

    if (inputText.value != '') {
        answerdiv.hidden = false;
    }
}

function clearInput() {
    let inputText = document.getElementById("inputtext");
    let answerdiv = document.getElementById("answerid");

    inputText.value = '';
    answerdiv.hidden = true;
}