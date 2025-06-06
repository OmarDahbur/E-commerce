function selecionarTom(tom) {
    sessionStorage.setItem('TOM_ESCOLHIDO', tom);
    sessionStorage.setItem('CATEGORIA_ESCOLHIDA', 'Shorts');
    window.location.href='./estilo.html';
}