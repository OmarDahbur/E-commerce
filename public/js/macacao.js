function selecionarTom(tom) {
    sessionStorage.setItem('TOM_ESCOLHIDO', tom);
    sessionStorage.setItem('CATEGORIA_ESCOLHIDA', 'Macacão')
    window.location.href='./estilo.html';
}