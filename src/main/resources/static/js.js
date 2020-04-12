function answer() {
    let inputText = document.getElementById("inputtext");
    let answerdiv = document.getElementById("answerid");

    if (inputText.value != '') {
        answerdiv.hidden = false;
        inputText.value = '';
    }
}

// TODO: Define new function to handler clear button
function clearInput () {
    // TODO: When the event is received, you should remove all content of input
    // TODO: Define new let variable to get input element
    // TODO: Conditional if value is not empty --> remove all

    // Tip: document.getElementById("inputtext").inputText.value = '';
}