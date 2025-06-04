function selecionarCategoria(categoria, proxpag) {
    sessionStorage.setItem('CATEGORIA_ESCOLHIDA', categoria);
    window.location.href= proxpag;
}

