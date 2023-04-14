const resultados = [
    { nombre: 'Resultado 1', categoria: 'categoria1' },
    { nombre: 'Resultado 2', categoria: 'categoria2' },
    { nombre: 'Resultado 3', categoria: 'categoria3' },
    { nombre: 'Resultado 4', categoria: 'categoria1' },
    { nombre: 'Resultado 5', categoria: 'categoria2' },
    { nombre: 'Resultado 6', categoria: 'categoria3' },
];

const resultadoTemplate = Handlebars.compile(document.getElementById('resultado-template').innerHTML);
const resultadosHtml = resultados.map(resultado => resultadoTemplate(resultado)).join('');
document.getElementById('results-container').innerHTML = resultadosHtml;

const openPopupBtn = document.getElementById('open-popup-btn');
const filterBtn = document.getElementById('filter-btn');
const popup = document.getElementById('popup');

openPopupBtn.addEventListener('click', () => {
    popup.style.display = 'block';
});

filterBtn.addEventListener('click', () => {
    const categoriasSeleccionadas = Array.from(document.querySelectorAll('input[name=categoria]:checked')).map(input => input.value);
    if (categoriasSeleccionadas.length === 0) {
        document.querySelectorAll('.resultado').forEach(resultado => resultado.style.display = 'block');
    } else {
        document.querySelectorAll('.resultado').forEach(resultado => {
            if (categoriasSeleccionadas.includes(resultado.dataset.categoria)) {
                resultado.style.display = 'block';
            } else {
                resultado.style.display  = 'none';
        }
    });
}
popup.style.display = 'none';
});