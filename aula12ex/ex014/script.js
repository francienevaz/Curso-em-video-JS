function carregar () {
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    //var hora = 19
    msg.innerHTML = (`Agora são ${hora} horas`)
    if (hora < 12 ) {
        //BOM DIA!
        img.src="manha.png"
        document.body.style.background = "#FOE68C"

    } else if (hora < 18) {
        //BOA TARDE!
        img.src="tarde.png"
        document.body.style.background = "#BDB76B"

    }  else if (hora > 18) {
        //BOA NOITE!
        img.src="noite.png"
        document.body.style.background = "#483D8B"
    }
}
