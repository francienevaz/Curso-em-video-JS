/*function contar () {
    var init = document.getElementById('inicio')
    var end = document.getElementById('fim')
    var pass= document.getElementById('passo')
    var res = document.getElementById('res')
    var c = (pass+='')
    for (let i= init; i > end; i++) {
        res.innerHTML = `Contando ${c}`
    }
} */

function contar () {
    var inicio = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var pass = document.getElementById('txtp')
    var res = document.getElementById('res')
    if (inicio.value.length == 0 || fim.value.length == 0 || pass.value.length == 0 ) {
        res.innerHTML = `Impossível contar!`
        window.alert('[ERRO] Faltam dados')
        
    } else {
        res.innerHTML = "Contando: <br>"
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(pass.value)
        if (p <= 0){
            window.alert('Passo ínvalido! Considerando PASSO 1')
            p = 1
        }
        
        if (i < f){
            //contagem crescente
            for (let c = i ; c <= f ; c+= p) {
            res.innerHTML += `${c} \u{1F435}`
        }             
    } else {
        //contagem regressiva
        for (let c = i; c >= f ; c-= p) {
            res.innerHTML += `${c} \u{1F435}`
        }
    }
    res.innerHTML += `\u{1f3c1}` 
        
    }

}
