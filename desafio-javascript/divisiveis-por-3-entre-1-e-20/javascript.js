function encontrarDivisiveisPor3() {
    let resultado = '';
    for (let i = 1; i <= 20; i++) {
        if (i % 3 === 0) {
            resultado += i + ' ';
        }
    }
    document.getElementById('resultado').textContent = resultado;
}