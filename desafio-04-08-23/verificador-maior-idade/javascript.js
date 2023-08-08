function verificar() {
    const idade = parseInt(document.getElementById('Idade').value, 10);

    // Utilizando o operador condicional ternário para verificar a maioridade
    const mensagem = idade >= 18 ? 'É maior de idade.' : 'É menor de idade.';

    const outputDiv = document.getElementById('output');
    outputDiv.textContent = mensagem;
  }