// Sistema de Votação

var idade = 18
console.log(`Você tem ${idade} anos:`)
if(idade < 16){ 
    console.log('Não Vota')
}else if(idade < 18 || idade > 75){
    console.log('Voto Opcional')
}else{
    console.log('Voto Obrigatório')
}