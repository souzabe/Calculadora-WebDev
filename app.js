function soma() {
    // Entrada
    var n1 = parseFloat(document.getElementById('numero1').value)
    var n2 = parseFloat(document.getElementById('numero2').value)
    var resultado = document.getElementById('resultado')

    var soma = n1 + n2

    // saida
   resultado.innerText =`O Resultado é ${soma}` 

   

}
function sub(){

    var n1 = parseFloat(document.getElementById('numero1').value)
        var n2 = parseFloat(document.getElementById('numero2').value)
        var resultado = document.getElementById('resultado')
    
        var sub = n1 - n2
    
       
       resultado.innerText =`O Resultado é ${sub}` 
}

function mult(){

    var n1 = parseFloat(document.getElementById('numero1').value)
     var n2 = parseFloat(document.getElementById('numero2').value)
     var resultado = document.getElementById('resultado')
    
     var mult = n1 * n2
    
     // saida
    resultado.innerText =`O Resultado é ${mult}` 
}


function div(){

    var n1 = parseFloat(document.getElementById('numero1').value)
     var n2 = parseFloat(document.getElementById('numero2').value)
     var resultado = document.getElementById('resultado')
 
     var div = n1 / n2
 
     // saida
    resultado.innerText =`O Resultado é ${div}` 
}