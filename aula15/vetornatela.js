let valores = [9,3,6,1,5,4]
valores.sort()
/* for ( let pos = 0 ;pos < valores.length ; pos++ ) {
    console.log(valores[pos])
} */

for (let pos in valores ) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} // 'para cada posição dentro de valores eu imprimo ()' é assim que se lê
// o código acima é uma versão simplificada do laço for
// essa versão do laço for só funciona para arrays e objetos, na verdade arrays também são objetos.

