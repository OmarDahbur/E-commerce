function selecionarTom(tom) {
    sessionStorage.setItem('tom', tom);
    sessionStorage.setItem('CATEGORIA_ESCOLHIDA', 'Shorts');
    window.location.href='./estilo.html';
}