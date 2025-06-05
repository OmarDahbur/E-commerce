let estiloSele = null;

function selecionar(estilo) {
    estiloSele = estilo;

    let btnavancar = document.getElementById('avancar');

    document.getElementById('Streetwear').classList.remove('selecionado');
    document.getElementById('Casual').classList.remove('selecionado');
    document.getElementById('Social').classList.remove('selecionado');
    document.getElementById('Basico').classList.remove('selecionado');

    document.getElementById(estilo).classList.add('selecionado');

}

function finalizar() {

    if (estiloSele) {
        const idCliente = sessionStorage.getItem("ID_CLIENTE");
        const categoria = sessionStorage.getItem("CATEGORIA_ESCOLHIDA");
        const tom = sessionStorage.getItem("TOM_ESCOLHIDO");
        const estilo = estiloSele;

        if (!categoria || !tom || !idCliente) {
            alert(`Você precisa completar todas as etapas antes de finalizar.`);
            return;
        }
        fetch('/preferencias/salvar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                idCliente,
                categoria,
                tom,
                estilo
            })
        }).then(res => {
            if (res.ok) {
                alert(`Preferências salvas com sucesso!`);
                window.location.href='./dashboard.html';
            } else {
                alert(`Erro ao salvar preferências.`);
            }
        }).catch(err => {
            console.error("Erro ao enviar preferências:", err);
            alert(`Erro de conexão com o servidor.`);
        });
    }
    }
   

   

    