function imprimeDados(nome, dataNascimento) {    
    console.log(`Usuário ${nome}, nascimento ${dataNascimento} cadastrado com sucesso!`);
}

function recuperarDados() {
    const name = document.getElementById("name").value;
    const birthDate = document.getElementById("birth-date").value;

    imprimeDados(name, birthDate);
}