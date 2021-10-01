function parimp (n) {
    if (n%2 == 0) {
        return 'par'
    } else {
        return 'ímpar'
    }
}
let res = parimp (11)
console.log(res)
// dá pra imprimir direto usando o console.log(parimp (11))