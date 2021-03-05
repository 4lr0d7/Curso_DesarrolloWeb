//Todos los archivos deben de javascript terminan con .js
//Recibe el texto que recibe la consola y lo imprime
console.log("Hola Mundo")
//Escribe en el documento
document.write("Hola Mundo")
//Dentro de el codigo "document.write()" se puede poner las etiquetas de 
// texto como en HTML
document.write("<h1>Hola soy un H1!</h1>")
//La consola ayuda a corregir errores de la aplicación web que se estará creando
//console.error: Ayuda a saber donde está el error porque está
console.error("Error customizado")

//TIPOS DE DATOS EN JS
console.log("Soy un String!") //String - Va entre comillas
console.log(10000) //Entero
console.log(7.5) //Flotante
console.log(true) //boolean
console.log(false) //boolean
console.log(['joe', 'ryan', 'martha']) //array de String
console.log([1,2,3,4,5,6,7,8,9]) //Arreglo de Enteros
console.log([true,false]) //Arreglo de booleanos

//objetos / object
//Objeto usuario
// {
//     "username": 'ryan',
//     "score": 70.4,
//     "hours": 14
//     "profesional": true
//     "friends": [" ", " ", " "]
// }

//Objeto
console.log({
    "username": "ryan",
    "score": 70.4
})


//VARIABLES
// var: Es una variable para .js
var name = "John";
let lastName = "Carter";
console.log(name);
console.log(lastName);
//const: Son constantes, nunca cambia, es un valor único
const Pi = 3.1416;
console.log(Pi);
//Las variavles no empiezan con número
let username = "fzst";
//Para nombrar las variables, se usan el camelCase, al estilo de
//la joroba de un camello

//Se recomienda usar comentarios para recordar cosas para 
// el futuro, para uno mismo u otra persona

//OPERADORES
let numberOne = 60;
let numberTwo = 100;
let result = numberOne + numberTwo;
console.log(result);
// let result = numberOne - numberTwo;
// console.log(result);
// let result = numberOne / numberTwo;
// console.log(result);
// let result = numberOne * numberTwo;
// console.log(result);
// Sirve para comparar datos
console.log(numberOne > numberTwo);
console.log(numberOne >= numberTwo);
console.log(numberOne < numberTwo);
console.log(numberOne <= numberTwo);
console.log(numberOne == numberTwo);
console.log(numberOne != numberTwo);


let nameFirst = "John";
let lastName1 = "Carter";
let completeName = nameFirst + lastName1;
console.log(completeName);

//CONDICIONALES
if (3 === 2){
    console.log("sí")
} else{
    console.log("Depende")
}