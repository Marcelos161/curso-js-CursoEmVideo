
let valores = [8, 1, 7, 4, 2, 9]
/*
for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A possicao ${pos} tem o valor ${valores[pos]}`)
}
*/
//forma simplificada
for(let pos in valores) {
    console.log(valores[pos])
}