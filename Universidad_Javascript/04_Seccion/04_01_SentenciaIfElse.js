let condicion = true;
if(condicion){
    console.log("Condicion verdadera");
} else{
    console.log("Condicion falsa");
}

if(3>2){
    console.log("Condicion verdadera");
} else{
    console.log("Condicion falsa");
}

if(2>3){
    console.log("Condicion verdadera");
} else{
    console.log("Condicion falsa");
}

// El uso de llaves es opcional si solamente es una linea de código
if(3<4)
    console.log("Es verdadera")
else
    console.log("Es falsa")


// Por buena práctica se deben de usar llaves 


// EJERCICIOS
// Imprimir en letra el número que está en la variable, con rango de 1-4

let numero = 3;

if(numero == 1){
    console.log("Número Uno")
} else if (numero == 2){
console.log("Número Dos");
} else if(numero == 3){
    console.log("Número Tres");
} else if(numero == 4){
    console.log("Número cuatro");
} else{
    console.log("Número desconocido");
}
