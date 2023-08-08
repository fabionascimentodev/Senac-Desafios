function imprimirNumerosDecrescente() {
    let resultado = '';
    for (let i = 10; i >= 1; i--) {
        resultado += i + ' ';
    }
    document.getElementById('resultado').textContent = resultado;
}