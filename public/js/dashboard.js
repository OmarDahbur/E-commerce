
document.addEventListener("DOMContentLoaded", function () {
    const idCliente = sessionStorage.ID_CLIENTE;

    fetch(`/dashboard/usuario/${idCliente}`).then(res => res.json())
        .then(preferencias => {
            if (preferencias.length > 0) {
                const { categoria, tom, estilo } = preferencias[0];
                document.getElementById('categoriafav').innerText = categoria;
                document.getElementById('tom').innerText = tom;
                document.getElementById('estiloideal').textContent = estilo;

                montarGrafico(categoria, tom, estilo);
            } else {
                alert(`Você ainda não selecionou suas preferências.`);
            }
        })
        .catch(erro => {
            console.error('Erro ao buscar dados da API:', erro);
        });

});


function montarGrafico(categoria, tom, estilo) {
    const ctx = document.getElementById('graficesti').getContext('2d');

    fetch(`/dashboard/distribuicao`).then(res => res.json()).then(dados => {
        const categorias = {};
        const tons = {};
        const estilos = {};
        

        for (let i = 0; i < dados.length; i++) {
            let item = dados[i];

            if (!categorias[item.categoria]) {
                categorias[item.categoria] = 0;
            }
            categorias[item.categoria] += item.total;

            if (!tons[item.tom]) {
                tons[item.tom] = 0;
            }
            tons[item.tom] += item.total;

            if (!estilos[item.estilo]) {
                estilos[item.estilo] = 0;
            }
            estilos[item.estilo] += item.total;

            
        }
    
    const labels = ['Categoria Favorita', 'Tom Preferido', 'Estilo Ideal'];
    const dadosUsuario = [1,1,1];
    const dadosTodos = [
        categorias[categoria] || 0,
        tons[tom] || 0,
        estilos[estilo] || 0
    ];

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Você',
                    data: dadosUsuario,
                    backgroundColor: '#FFA500'
                },
                {
                    label: 'Todos os Usuários',
                    data: dadosTodos,
                    backgroundColor: '#5555FF'
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Você vs Todos os Usuários'
                }
            }
        }
    });
});
}

