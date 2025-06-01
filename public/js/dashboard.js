const categoria = localStorage.getItem('categoria');
const tom = localStorage.getItem('tom');
const estilo = localStorage.getItem('estilo');

document.getElementById('categoriafav').textContent = categoria;
document.getElementById('tom').textContent = tom;

const kpiis = document.querySelector('.kpis');
const estiloKPI = document.createElement('div');