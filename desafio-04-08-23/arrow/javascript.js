// Array de valores
const valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// Função para exibir os valores dobrados
function exibirValoresDobrados() {
  const valoresdouble = valores.map(function(valor) {
    return valor * 2;
  });

  // Exibir o array resultante na página HTML
  const outputDiv = document.getElementById('output');
  outputDiv.textContent = `Valores Dobrados: [${valoresdouble.join(', ')}]`;
}
