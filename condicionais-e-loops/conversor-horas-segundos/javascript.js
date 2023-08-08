function horasParaSegundos(horas) {
    return horas * 3600; // 1 hora = 3600 segundos
}

function conversor() {
    let inputHoras = parseFloat(document.getElementById("inputHoras").value);
    let resultado = horasParaSegundos(inputHoras);
    document.getElementById("resultado").textContent = resultado + " segundos";
}