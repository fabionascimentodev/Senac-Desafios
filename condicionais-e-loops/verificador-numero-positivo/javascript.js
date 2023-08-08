function teste(){
 let numero = parseFloat(document.getElementById("inputNumero").value);

 if (numero > 0)
  alert(numero + " É Positivo");
 else if(numero < 0)
   alert(numero + " É Negativo");
  else
   alert(numero + " É Neutro");
}
