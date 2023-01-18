let valores = [8, 1, 7, 4, 2, 9]
valores.sort()
/*  FORMA TRADICIONAL DE PERCORRER O ARRAY

    for(var val = 0; val < valores.length; val++){
        console.log(`O numero dentro do indice ${val} é  ${valores[val]}`)
    }
 */

//Forma Atualizada de percorre  um array usando for( in )

for(let pos in valores){
    console.log(valores[pos])
}