let pessoa = {
    nome: "João",
    idade: 30,
    profissao: "Desenvolvedor",
    endereco: {
        rua: "Rua das Flores",
        cidade: "São Paulo",
        estado: "SP"
    }
};

pessoa.apresentacao = function() {
    return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.profissao}.`;
};

console.log(pessoa.endereco.cidade);

pessoa.profissao = "Engenheiro de Software";
console.log(pessoa);

pessoa.telefone = "(11) 1234-5678";
console.log(pessoa);
