document.getElementById('calculateButton').addEventListener('click', function() {
    // Obtém os valores dos inputs e da operação selecionada
    var number1 = parseFloat(document.getElementById('number1').value);
    var number2 = parseFloat(document.getElementById('number2').value);
    var operation = document.getElementById('operation').value;
    var result;

    if (isNaN(number1) || isNaN(number2)) {
        result = 'Por favor, insira números válidos.';
    } else {
        switch (operation) {
            case 'add':
                result = number1 + number2;
                break;
            case 'subtract':
                result = number1 - number2;
                break;
            case 'multiply':
                result = number1 * number2;
                break;
            case 'divide':
                if (number2 === 0) {
                    result = 'Não é possível dividir por zero.';
                } else {
                    result = number1 / number2;
                }
                break;
            default:
                result = 'Operação inválida.';
        }
    }


    document.getElementById('result').innerText = 'Resultado: ' + result;
});
