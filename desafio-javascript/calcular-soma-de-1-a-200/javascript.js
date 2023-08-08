function calcularSoma() {
    let soma = 0;
    for (let i = 1; i <= 200; i++) {
        soma += i;
    }
    document.getElementById('resultado').textContent = 'A soma é: ' + soma;
}