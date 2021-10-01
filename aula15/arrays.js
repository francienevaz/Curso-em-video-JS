var num = [9,6,7,8,2]
num.push(1)     //envia um elemento para o final da array
num.sort()      //ordena de forma crescente
console.log(`A nossa array é ${num}`)
console.log(`A primeira array é ${num[0]}`)
console.log(`A array tem ${num.length} elementos`)
let pos = num.indexOf(10)
if (pos == -1){
    console.log(`Esse número não existe dentro da array.`)
} else {
    console.log(`A posição de 10 é ${pos}`)
}

//num.indexOf(7)       essa função serve para buscar um valor dentro da array
