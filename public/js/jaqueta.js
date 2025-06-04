function selecionarTom(tom) {
    sessionStorage.setItem('TOM_ESCOLHIDO', tom);
    sessionStorage.setItem('CATEGORIA_ESCOLHIDA', 'Jaqueta');

    window.location.href='./estilo.html';
}