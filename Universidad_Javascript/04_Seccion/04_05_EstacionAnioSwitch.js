let mes = 4;
let estacion = "Estación desconocida";
// Es de tipo estricto el switch, por lo tanto es NÚMERICO o STRING, no ambos como las variables que son de tipado básico
switch(mes){
    case 1: case 2: case 12: //Se puede juntar los casos si el resultado es el mismo de esta manera
        estacion = "Estación de Invierno";
        break;
    
    case 3: case 4: case 5:
        estacion = "Estación de Primavera";
        break;

    case 6: case 7: case 8:
        estacion = "Estacion de Verano";
        break;
    
    case 9: case 10: case 11:
        estacion = "Estación de Otoño";
        break;

    default: 
        estacion = "Estación Desconocida";
        break;
}

console.log(estacion);