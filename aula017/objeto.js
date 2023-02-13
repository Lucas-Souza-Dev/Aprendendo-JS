let amigo = {
    nome:'JOSÈ',
    idade:23,
    peso:85,
    engordar(p){
        console.log('Engordou')
        this.peso += p
    }
}

amigo.engordar(5)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg.`)