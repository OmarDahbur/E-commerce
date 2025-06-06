document.addEventListener("DOMContentLoaded", function () {
    const idCliente = sessionStorage.getItem("ID_CLIENTE");
    console.log("ID do cliente:", idCliente);

    fetch(`/dashboard/usuario/${idCliente}`).then(res => res.json())
        .then(preferencias => {
            if (preferencias.length > 0) {
                const { categoria, tom, estilo } = preferencias[0];
                document.getElementById('categoriafav').innerText = categoria;
                document.getElementById('tom').innerText = tom;
                document.getElementById('estiloideal').innerText = estilo;

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

            if (categorias[item.categoria] === undefined) {
                categorias[item.categoria] = item.total;
            } else {
                categorias[item.categoria] += item.total;
            }

            if (tons[item.tom] === undefined) {
                tons[item.tom] = item.total;
            } else {
                tons[item.tom] += item.total;
            }

            if (estilos[item.estilo] === undefined) {
                estilos[item.estilo] = item.total;
            } else {
                estilos[item.estilo] += item.total;
            }

        }

        const labels = ['Categoria Favorita', 'Tom Preferido', 'Estilo Ideal'];
        const dadosUsuario = [1, 1, 1];

        const dadosTodos = [
            categorias[categoria] || 0,
            tons[tom] || 0,
            estilos[estilo] || 0
        ];

        const valorMax = Math.max(...dadosTodos, 10);

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
                    },
                    tooltip: {
                        callbacks: {
                            label: function (contexto) {
                                const label = contexto.dataset.label || '';
                                const value = contexto.raw;

                                if (label === 'Você') {
                                    const escolhas = [categoria, tom, estilo];
                                    return `${label}: ${escolhas[contexto.dataIndex]}`;
                                } else {
                                    return `${label}: ${value} usuários`;
                                }

                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: valorMax + 10,
                        ticks: {
                            stepSize: 10
                        },
                        title: {
                            display: true,
                            text: 'Quantidade de Usuários'
                        }
                    }
                }
            }
        });
    });
}

