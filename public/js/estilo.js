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
        window.location.href='./dashboard.html'
    } else {
        alert(`Primeiro selecione um estilo antes de finalizar.`)
    }
}