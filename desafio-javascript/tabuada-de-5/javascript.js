function imprimirTabuada() {
  let resultado = '';
  const numero = 5;
  for (let i = 1; i <= 10; i++) {
      const produto = numero * i;
      resultado += `${numero} x ${i} = ${produto}<br>`;
  }
  document.getElementById('resultado').innerHTML = resultado;
}