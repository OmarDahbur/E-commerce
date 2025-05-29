

function cadastrar() {

    var nomeVar = nome_input.value;
    var emailVar = email_input.value;
    var senhaVar = senha_input.value;
    var confirmacaoSenhaVar = confirmacao_senha_input.value;
    var CAPSLOCK = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var numeros = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    var especiais = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', '|', ';', ':', '"', ',', '<', '.', '>', '?'];



    if (
        nomeVar == "" ||
        emailVar == "" ||
        senhaVar == "" ||
        confirmacaoSenhaVar == ""
    ) {

        alert(`Preencha todos os campos corretamente!`)

        return false;
    } else if (nomeVar.length <= 2) {
        alert(`Não existe nome assim, seu nome precisa ter mais de 2 caracteres`)


        return false;
    } else if (!emailVar.includes('.com') || !emailVar.includes('@')) {

        alert(`Não existe email sem @ ou .com, preencha seu email corretamente!`)


        return false;
    } else if (senhaVar.length < 8) {

        alert(`Senha fraca, tenha pelo menos 8 caracteres!`)


        return false;

    } else {
        var maiuscula = 0;
        var minuscula = 0;
        var ternumeros = 0;
        var terespecial = 0;

        for (let i = 0; i < senhaVar.length; i++) {
            if (CAPSLOCK.includes(senhaVar[i])) {
                maiuscula++;
            } else if (lowercase.includes(senhaVar[i])) {
                minuscula++;

            } else if (numeros.includes(senhaVar[i])) {
                ternumeros++;

            } else if (especiais.includes(senhaVar[i])) {
                terespecial++;
            }
        }

        var erro_msg = ``;

        if (maiuscula == 0) {
            erro_msg += `Pelo menos uma letra MAIÚSCULA. \n`
        }
        if (minuscula == 0) {
            erro_msg += `Pelo menos uma letra minúscula. \n`
        }
        if (ternumeros == 0) {
            erro_msg += `Pelo menos um número. \n`
        }
        if (terespecial == 0) {
            erro_msg += `Pelo menos um caractere especial. \n`
        }

        if (erro_msg !== ``) {
            alert(`Sua senha está FRACA. Ela precisa ter: \n ${erro_msg}`);
            return false;
        }


    } {
    } if (senhaVar != confirmacaoSenhaVar) {
        alert(`A confirmação está diferente da senha...`)

        return false;
    } else {
        setInterval(5000);
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
            senhaServer: senhaVar,
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

            } else {
                throw "Houve um erro ao tentar realizar o cadastro!";
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);

        });

    return false;
}

// function sumirMensagem() {
//     cardErro.style.display = "none";
// }
