var campo = document.getElementById('num') //variavel que puxa o input
var select = document.getElementById('numeros') //variavel que puxa o select
var res = document.getElementById('res') //variavel que puxa o campo onde vai ser inserido a resposta
var numeros = [] //array usado pra armazenar os numeros


function adicionar() { //funcao que vai validar o campo e adicionar os numeros no select
    var n = Number(campo.value)
    var verif = numeros.indexOf(n)
    if (campo.value.length == 0 || campo.value > 100 || campo.value < 1) {
        window.alert('Voce deve inserir um numero de 1 a 100 no campo a baixo')
    } else if (verif == -1) {
        numeros.push(n)
        var itens = document.createElement('option')
        itens.text = `Numero ${campo.value} adicionado com sucesso`
        select.appendChild(itens)
        console.log(verif)
        res.innerHTML = ``
        campo.value = ``
        campo.focus
    } else {
        window.alert(`Impossivel adicionar o numero ${campo.value} pois ja existe`)
    }
}

function finalizar() { //funcao que vai mostrar todos os resultados
    if (numeros.length == 0) {
        window.alert('Adicione numeros antes de finalizar')
    } else {
    numeros.sort((a,b) => a-b)
    var tamanho = numeros.length
    var maior = numeros[numeros.length-1]//variavel que consiste em pegar o tamanho da array e diminuir um numero, com isso ele irar mostrar o ultimo valor
    var menor = numeros[0]
    var soma = 0 
    for (var i in numeros) {
        soma += numeros[i]
    }
    var media = soma/tamanho
    res.innerHTML = `<p>Ao todo, temos ${tamanho} numeros cadstrados</p>
    <p>A media dos valores digitados é de  ${media}</p>
    <p>O maior valor informado foi ${maior}</p>
    <p>O menor valor informado foi ${menor}</p>
    <p>Somando todos os Valores temos ${soma}</p>`
}

}





