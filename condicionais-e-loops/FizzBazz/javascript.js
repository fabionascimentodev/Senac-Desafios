function fizzBuzz(number) {
    if (number % 3 === 0 && number % 5 === 0) {
        return "FizzBuzz";
    } else if (number % 3 === 0) {
        return "Fizz";
    } else if (number % 5 === 0) {
        return "Buzz";
    } else {
        return number;
    }
}
function teste() {
    let inputAno = parseInt(document.getElementById("inputNumero").value);
    let resultado = fizzBuzz(inputAno);
    document.getElementById("resultado").textContent = resultado;
}

