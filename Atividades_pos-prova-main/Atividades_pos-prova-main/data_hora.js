let aniversario = new Date("2024-12-25");

let dataAtual = new Date();

let diferencaDias = Math.ceil((aniversario - dataAtual) / (1000 * 60 * 60 * 24));
console.log(diferencaDias);

let dataFormatada = dataAtual.toISOString().split('T')[0];
console.log(dataFormatada);

dataAtual.setDate(dataAtual.getDate() + 30);
console.log(dataAtual);
