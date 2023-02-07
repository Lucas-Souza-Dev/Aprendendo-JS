//Teste de Numeros pares e impares

function parimpar(n){
    if(n % 2 == 0){
        return 'PAR'
    }else{
        return 'IMPAR'
    }
}

let resposta = parimpar(8)
console.log(resposta)