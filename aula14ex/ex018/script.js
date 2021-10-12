let num = document.querySelector('input#txtn1')
let lista = document.querySelector("select#seladd")
let res = document.querySelector('div#res')
let valores = []
function isNumero (n) {
if (Number(n) >= 1 && Number(n)<= 100) {
   return true
} else {
   return false
}
}
function inLista (n, l) {
if (l.indexOf(Number(n)) != -1) {
   return true
} else {
   return false
}
}
function Adicionar( ) {
   if(isNumero(num.value) && !inLista(num.value, valores) ) {
      valores.push(Number(num.value))
      let item = document.createElement('option')
      item.text = `O número ${num.value} foi adicionado! `
      lista.appendChild(item)
      res.innerHTML = ""

   } else {
      window.alert('Valor inválido ou já encontrado na lista!')
   }
   num.value =""
   num.focus ()
}

function Finalizar () {
   if (valores.length == 0) {
      window.alert ('Por favor adicione valores para finalizar!')
   } else {
      let tot = valores.length
      let maior = valores[0]
      let menor = valores[0]
      let soma = 0
      let media = 0
      for (let pos in valores) {
         soma += valores[pos]
         media = soma / tot
         if (valores[pos] > maior)
         maior = valores[pos]
         if (valores[pos] < menor)
         menor = valores[pos]
      }



      
      res.innerHTML = ""
      res.innerHTML += `<p>Ao todo temos ${tot} números adicionados </p>`
      res.innerHTML += `<p>O maior valor é ${maior}.</p>`
      res.innerHTML += `<p>O menor valor é ${menor}.</p>`
      res.innerHTML += `<p>A soma total é ${soma}.</p>`
      res.innerHTML += `<p>A média total é ${media}.</p>`
   }

}

/* function Adicionar (){
   let add = document.getElementById('txtn1')
   let num = []
   num.sort()
   let seladd = document.getElementById('seladd')
   if (add.value.length == 0 || add.value.length > 100 ) {
      window.alert('Por favor digite um número de 0 a 100!')

   } else {
      let n = Number(num)
      let i = Number(add)
      seladd = n.push(i)
      let res = document.getElementById('res')
      for (let pos in seladd) {
         let item = document.createElement('option')
         res.innerHTML=`A posição de ${pos} tem o valor de ${seladd}`
         item.text =`O número ${seladd} foi adicionado`

      }

   }
} */
/*let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            t.appendChild(item)*/