console.log('Javascript carregado');

function validaCPF(cpf) {
    return true;
}

function validacao() {
    console.log('Iniciando validacao CPF');

    var cpf = document.getElementById('cpf_digitado').value;
    
    var resultadoValidacao = validaCPF(cpf);

    if (resultadoValidacao) {
        document.getElementById('success').style.display = 'block';
    }
}