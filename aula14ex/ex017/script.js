/* function Calcular () {
    var n = document.getElementById('txtn')
    var res = document.getElementById('res')
    if (n.value.length == 0) {
        window.alert('Por favor digite um número!')
    } else if (n >= 0) {
        for (let c = res; c >= 0 ; c*= n) {
            res.innerHTML *= `${n} * ${c}`

        }

    }

} */

function Calcular () {
    var num = document.getElementById('txtn')
    var t = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Por favor digite um número!')
        } else {
        var n = Number(num.value)
        t.innerHTML = ""
        for (let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            t.appendChild(item)

        }
    }

    

}