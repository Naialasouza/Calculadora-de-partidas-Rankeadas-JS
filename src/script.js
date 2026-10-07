let user = getFirstName("Jhonathas jesus de macêdo")
let vitoria = 200
let derrota = 0
let resultado = cal(vitoria, derrota)
let nivel = ""

//Função
function getFirstName(name, splitchar) {
    let firstName = name.split(splitchar)[0]
    return firstName
}

function cal(vitoria, derrota) {
    let resultado = vitoria - derrota
    return resultado
}

if (resultado < 10) {
 nivel = "Ferro";
}

else if (resultado >= 11 && resultado <= 20) { 
    nivel ="Bronze";
}

else if (resultado >= 21 && resultado <= 50) {
    nivel = "Prata";
}
 
else if (resultado >= 51 && resultado <= 80 ){
    nivel = "Ouro";
}

else if (resultado >= 81 && resultado <= 90 ){
    nivel = "Diamante";
}

else if (resultado >= 91 && resultado <= 100 ){
    nivel = "Lendário";
}

else if (resultado >= 101 ){
    nivel = "Imortal";
}

//Saída
console.log("olá " + user)
console.log("o número de vitótias foi de " + vitoria + " e o de derrota foi de " + derrota)
console.log("Com base nas suas partida seu nível é " + nivel)