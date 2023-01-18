let num = [5,8,2,9,3]

num.push[1]
num.sort()

console.log(num)
console.log(`O array num tem ${num.length} Posições`)
console.log(`O primeiro numero de num é ${num[0]}`)

// no indexOf se ele retornar o valo -1 é porque o valor não foi encontrado dentro do array
let pos = num.indexOf(5)

if(pos == -1){
    console.log("[ERRO] O valor não foi encontrado!")
}else{
    console.log(`O valor da posição ${pos} é ${num[pos]}`)
}