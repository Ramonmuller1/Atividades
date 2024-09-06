function executaOperacao(num1, num2, operacao) {
    return operacao(num1, num2);
}

console.log(executaOperacao(5, 10, (a, b) => a + b));

console.log(executaOperacao(5, 10, (a, b) => a * b));

function repetirOperacao(vezes, operacao) {
    let resultado = 1;
    for (let i = 1; i <= vezes; i++) {
        resultado = operacao(resultado, i);
        console.log(`Resultado após ${i} iteração(ões): ${resultado}`);
    }
}

function contarOcorrencias(str, char) {
    let contador = 0;
    str.split('').forEach(c => {
        if (c === char) contador++;
    });
    return contador;
}
console.log(contarOcorrencias("hello world", "l"));
