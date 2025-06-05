function entrar() {


    var emailVar = email_input.value;
    var senhaVar = senha_input.value;

    if (emailVar == "" || senhaVar == "") {

        alert(`Preencha todos os campos corretamente!`)


        return false;
    }
    else {
        setInterval(5000)
    }

    console.log("FORM LOGIN: ", emailVar);
    console.log("FORM SENHA: ", senhaVar);

    fetch("/usuarios/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailServer: emailVar,
            senhaServer: senhaVar
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));
                sessionStorage.setItem("EMAIL_USUARIO" , json.email);
                sessionStorage.setItem("NOME_USUARIO" ,json.nomeCompleto);
                sessionStorage.setItem("ID_CLIENTE" , json.idCliente);


                setTimeout(function () {
                    window.location = "./produtos.html";
                }, 1000); // apenas para exibir o loading

            });

        } else {

            console.log("Houve um erro ao tentar realizar o login!");
            alert(`Email ou senha incorretos!`);

            resposta.text().then(texto => {
                console.error(texto);

            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
}

// function sumirMensagem() {
//    cardErro.style.display = "none"
// }
