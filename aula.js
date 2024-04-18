function calcular(){
    var calc = parseInt(document.getElementById('numlivro').value)
    var resultado = document.getElementById('resultado')

    if (calc > 7){
        var soma = calc*15;
        resultado.innerText = `O Valor é  R$${soma}`;
    }else{
        var soma = calc*22
        resultado.innerText = `O Valor é  R$${soma}`
    }

}