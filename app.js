function clicar(){
    // Entrada
    var n1 = parseFloat(document.getElementById('numero1').value)
    var n2 = parseFloat(document.getElementById('numero2').value)
    var resultado = document.getElementById('resultado')

    var soma = n1 + n2

    // saida
   resultado.innerText =`O Resultado é ${soma}` 

}