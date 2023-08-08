const pessoa = {nome: 'Fabio', idade: 41};

  function exibir() {
    
    const { nome, idade } = pessoa;
    const frasePersonalizada = `Olá, meu nome é ${nome} e eu tenho ${idade} anos.`;

    const outputDiv = document.getElementById('output');
    outputDiv.textContent = frasePersonalizada;
  }