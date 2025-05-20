
function cadastrar() {

    var nomeVar = nome_input.value;
    var emailVar = email_input.value;
    var senhaVar = senha_input.value;
    var confirmacaoSenhaVar = confirmacao_senha_input.value;


    if (
        nomeVar == "" ||
        emailVar == "" ||
        senhaVar == "" ||
        confirmacaoSenhaVar == ""
    ) {

        alert(`Preencha todos os campos corretamente!`)

        finalizarAguardar();
        return false;
    } else if (nomeVar.length <= 2) {
        alert(`Não existe nome assim, seu nome precisa ter mais de 2 caractere`)

        finalizarAguardar();
        return false;
    } else if (!emailVar.includes('.com') || !emailVar.includes('@')) {

        alert(`Não existe email sem @ ou .com, preencha seu email corretamente!`)

        finalizarAguardar();
        return false;
    } else if (senhaVar.length < 8) {

        alert(`Senha fraca, tenha pelo menos 8 caracteres!`)

        finalizarAguardar();
        return false;
    } else if (senhaVar != confirmacaoSenhaVar) {
        alert(`A confirmação está diferente da senha...`)

        finalizarAguardar();
        return false;
    } else {
        setInterval(sumirMensagem, 5000);
    }


    // Enviando o valor da nova input
    fetch("/usuarios/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            nomeServer: nomeVar,
            emailServer: emailVar,
            senhaServer: senhaVar
        }),
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta);

            if (resposta.ok) {

                alert(`Seu cadastro foi feito com sucesso! Você está sendo redirecionado para a tela de Login`)




                setTimeout(() => {
                    window.location = "./login.html";
                }, "2000");

                limparFormulario();
                finalizarAguardar();
            } else {
                throw "Houve um erro ao tentar realizar o cadastro!";
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
            finalizarAguardar();
        });

    return false;
}

function sumirMensagem() {
    cardErro.style.display = "none";
}
