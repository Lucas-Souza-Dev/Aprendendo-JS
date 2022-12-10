//Bom dia, Boa Tarde, Boa Noite
var agora = 0//new Date()
var horas = 12//agora.getHours()

if(horas < 5){
    console.log('Boa madrugada!')
}else if(horas < 12){
    console.log('Bom dia!')
}else if(horas < 18){
    console.log('Boa Tarde!')
}else{
    console.log('Boa Noite!')
}