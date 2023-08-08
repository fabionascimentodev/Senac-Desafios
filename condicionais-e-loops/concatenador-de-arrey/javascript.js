function concatenateArrays(array1, array2) {
    return array1.concat(array2);
}

function handleButtonClick() {
    let inputArray1 = JSON.parse(document.getElementById("inputArray1").value);
    let inputArray2 = JSON.parse(document.getElementById("inputArray2").value);
    let resultado = concatenateArrays(inputArray1, inputArray2);
    document.getElementById("resultado").textContent = JSON.stringify(resultado);
}

 
