const usuarios = [];

function adicionarUsuario(nome, idade, email) {
    if (!nome || !idade || !email) {
        console.log("Não foram preenchidos todos os campos.");
        return;
    }
    if (idade <= 0) {
        console.log("A idade miníma é 0.");
        return;
    }
    const usuario = {
        nome: nome,
        idade: idade,
        email: email
    };
    usuarios.push(usuario);
}
function listarUsuarios() {
    if (usuarios.length === 0) {
        console.log("Nenhum usuário criado.");
        return;
    }    
    console.log("Usuários cadastrados:");
    usuarios.forEach((usuario, index) => {
        console.log(`Usuário ${index + 1}: Nome: ${usuario.nome}, Idade: ${usuario.idade}, Email: ${usuario.email}`);
    });
}
adicionarUsuario("Maria", 30, "maria@yahoo.com");
adicionarUsuario("Miguel", -5, "miguel@outlok.com"); 
adicionarUsuario("", 20, "invalido@hotmail.com"); 
adicionarUsuario("João", 25, "joao@gmail.com");



listarUsuarios();