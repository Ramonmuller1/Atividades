function soma(a, b) {
    return a + b;
}

function ehPar(numero) {
    return numero % 2 === 0;
}

function dobraValores(array) {
    return array.map(num => num * 2);
}

function contaCaracteres(str) {
    return str.length;
}

function fatorial(n) {
    let resultado = 1;
    for (let i = 1; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}
