
document.getElementById('submitButton').addEventListener('click', function() {
    var textValue = document.getElementById('textInput').value;

    var message = '';
    if (textValue.trim() === '') {
        message = 'Por favor, digite algo no campo de texto.';
    } else if (textValue.toLowerCase() === 'hello') {
        message = 'Você digitou "hello"! Olá!';
    } else {
        message = 'Você digitou: ' + textValue;
    }

    document.getElementById('message').innerText = message;
});
