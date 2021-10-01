var agora = new Date ()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} hrs!`)
if ( hora < 12) {
    console.log("Bom Dia!")
} else {
    if (hora < 18)
    console.log('Boa tarde!')
} {
    console.log('Boa noite!')
}