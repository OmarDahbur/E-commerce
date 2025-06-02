

const categoria = localStorage.getItem('categoria');
const tom = localStorage.getItem('tom');
const estilo = localStorage.getItem('estilo');

document.getElementById('categoriafav').innerText = categoria;
document.getElementById('tom').innerText = tom;
document.getElementById('estiloideal').textContent = estilo;

const ctx = document.getElementById('graficesti').getContext('2d');

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