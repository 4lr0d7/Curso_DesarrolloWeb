let numero = 1;
let numTexto = "Valor desconocido";

switch (numero){
    case 1:
        numTexto = "Número uno";
        break; //Se recomienda poner el break para que rompa el switch case y ya no
        //siga al siguiente caso.
    
    case 2:
        numTexto = "Número dos"
        break;
    
    case 3:
        numTexto = "Número tres";
        break;

    case 4:
        numTexto = "Número cuatro";
        break;

    default:
        numTexto = "Caso no encontrado";
        // break; Se puede omitir solamente el break del default
        //         a excepción si ese default va al inicio.
}

console.log(numTexto);