function buscarDados() {
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
                montarRanking();
            } else {
                alert(`Você ainda não selecionou suas preferências.`);
            }
        })
        .catch(erro => {
            console.error('Erro ao buscar dados da API:', erro);
        });

};



function montarGrafico(categoria, tom, estilo) {
    const ctx = document.getElementById('graficesti').getContext('2d');

    fetch(`/dashboard/distribuicao`).then(res => res.json()).then(dados => {
        const categorias = dados.categoria;
        const tons = dados.tom;
        const estilos = dados.estilo;

        console.log(categorias[0].total)
        console.log(tons[0].total)
        console.log(estilos[0].total)

        const labels = ['Categoria Favorita', 'Tom Preferido', 'Estilo Ideal'];
      
        let totalCategoria = 0;
        for (let i = 0; i < categorias.length; i++) {
            if (categorias[i].categoria === categoria) {
                totalCategoria = categorias[i].total;
            }
            
        }

        let totalTom = 0;
        for (let i = 0; i < tons.length; i++) {
            if (tons[i].tom === tom) {
                totalTom = tons[i].total;
            }
            
        }
        let totalEstilo = 0;
        for (let i = 0; i < estilos.length; i++) {
            if (estilos[i].estilo === estilo) {
                totalEstilo = estilos[i].total;
            }
            
        }

        const dadosTodos = [totalCategoria, totalTom, totalEstilo];

        const dadosUsuario = [1, 1, 1];

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
                        ticks: {
                            stepSize: 4
                        },
                        title: {
                            display: true,
                            text: ''
                        }
                    }
                }
            }
        });
    });
}

function montarRanking() {
    const ctx = document.getElementById('ranking').getContext('2d');

    fetch(`/dashboard/distribuicao`).then(res => res.json()).then(dados => {
        console.log("DADOS DO BACKEND:", dados);
        var nomes = [];
        var categorias = [];
        var tons = [];
        var estilos = [];


        for (var i = 0; i < dados.categoria.length; i++) {
            nomes.push(dados.categoria[i].categoria);
            categorias.push(dados.categoria[i].total);
            tons.push(null);
            estilos.push(null);

        }

        for (var i = 0; i < dados.tom.length; i++) {
            nomes.push(dados.tom[i].tom);
            tons.push(dados.tom[i].total);
            estilos.push(null);
            categorias.push(null);

        }

        for (var i = 0; i < dados.estilo.length; i++) {
            nomes.push(dados.estilo[i].estilo);
            estilos.push(dados.estilo[i].total);
            categorias.push(null);
            tons.push(null);
        }

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: nomes,
                datasets: [
                    {
                        label: 'Categorias',
                        data: categorias,
                        backgroundColor: '#00b894'
                    },
                    {
                        label: 'Tons',
                        data: tons,
                        backgroundColor: '#e17055'
                    },
                    {
                        label: 'Estilos',
                        data: estilos,
                        backgroundColor: '#0984e3'
                    }
                ]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'Ranking Geral de Categorias, Tons e Estilos'
                    },
                    legend: {
                        display: true,
                        position: 'top'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    });
}


