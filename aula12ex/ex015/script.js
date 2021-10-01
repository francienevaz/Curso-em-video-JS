function verificar () {
   var data = new Date ()
   var ano = data.getFullYear ()
   var fano = document.getElementById('txtano')
   var res = document.getElementById('res')
   if (fano.value.length == 0 || Number(fano.value) > ano) {
       window.alert('Aí não né meu filho! Ainda não criamos a bola de cristal!')
   } else {
       var fsex = document.querySelectorAll('input[type="radio"]')
       var idade = ano - Number(fano.value)
       var gênero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')

       if (fsex[0].checked) {
           gênero = 'Homem'
           if (idade >= 0 && idade < 10) {
               //criança
               img.setAttribute('src', 'menino.jpg')
           } else if (idade < 21) {
               //jovem
               img.setAttribute('src', 'homem25.jpg')
           } else if (idade < 50) {
               //adulto
               img.setAttribute('src', 'adulto.jpg')
           } else if (idade > 50) {
               //idoso
               img.setAttribute('src', 'idodoh.jpg')
           }
       } else if (fsex[1].checked) {
           gênero = 'Mulher'
           if (idade >= 0 && idade < 10) {
            //criança
            img.setAttribute('src', 'menina.jpg')
        } else if (idade < 21) {
            //jovem
            img.setAttribute('src', 'mulher25n.jpg')
        } else if (idade < 50) {
            //adulto
            img.setAttribute('src', 'adulta.jpg')
        } else if (idade > 50) {
            //idoso
            img.setAttribute('src', 'idosom.jpg')
        }
       }
       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${gênero} com ${idade}`
       res.appendChild(img)
   }
   
}