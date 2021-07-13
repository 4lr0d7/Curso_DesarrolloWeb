inicio: //Así es como se inicia una etiqueta
for(let contador = 0; contador <= 10; contador ++){
    if(contador %2 !== 0) {
        continue inicio;
    } else{
        console.log(contador);
    }
} //NO ES RECOMENDABLE USAR ETIQUETAS