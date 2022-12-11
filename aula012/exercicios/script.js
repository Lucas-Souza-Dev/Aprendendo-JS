function carregar(){

    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')

    var data = new Date()
    var hora = data.getHours()
    msg.innerText = `Agora são ${hora} horas.`

    if(hora >= 0 && hora < 12){
        //Bom Dia.
        img.src = './images/manha.jpg'
        document.body.style.background = '#7BA9FA'
    }else if(hora >= 12 && hora <=18){
        //Boa tarde.
        img.src = './images/tarde.jpg'
        document.body.style.background = '#FA914D'

    }else{
        //Boa noite.
        img.src = './images/noite.jpg'
        document.body.style.background = '#1d1d1d'
    }
}