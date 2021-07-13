/*
    6 - 11: Buenos dias
    12 - 18: Buenas tardes
    19 - 24: Buenas noches
    0 - 6: Durmiendo
*/
let hora = 6;
let estado;
if(hora >= 6 && hora <= 11){
    estado = "Buenos dias";
} else if(hora >= 12 && hora <= 18){
    estado = "Buenas tardes";
} else if(hora >= 19 && hora <= 24){
    estado = "Buenas noches";
} else if(hora >= 0 && hora <= 6){
    estado = "Durmiendo"
} else{
    console.log("Valor incorrecto");
}
console.log(estado);