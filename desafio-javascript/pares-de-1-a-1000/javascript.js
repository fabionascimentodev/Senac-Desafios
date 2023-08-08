function imprimirNumerosPares() {
    let resultado = '';
    for (let i = 1; i <= 1000; i++) {
        if (i % 2 === 0) {
            resultado += i + ' ';
        }
    }
    document.getElementById('resultado').textContent = resultado;
}