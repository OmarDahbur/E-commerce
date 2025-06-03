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
        
    })
}


const todos = {
    'Categoria Favorita': { 'Calça': 40, 'Jaqueta': 25, 'Camisa': 35 },
    'Tom Preferido': { 'Claro': 45, 'Escuro': 55 },
    'Estilo Ideal': { 'Streetwear': 30, 'Casual': 40, 'Social': 15, 'Basico': 15 }
};

const dadosusuarios = {
    'Categoria Favorita': categoria,
    'Tom Preferido': tom,
    'Estilo Ideal': estilo
};

const labels = ['Categoria Favorita', 'Tom Preferido', 'Estilo Ideal'];

const datatds = labels.map(label => todos[label][dadosusuarios[label]] || 0);
const datausu = [1, 1, 1];

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [
            {
                label: 'Você',
                data: datausu,
                backgroundColor: '#FFA500'
            },
            {
                label: 'Todos os Usuários',
                data: datatds,
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