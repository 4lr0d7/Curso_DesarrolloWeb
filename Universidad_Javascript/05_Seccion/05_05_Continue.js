for(let contador = 0; contador <= 10; contador++){
    if(contador %2 !== 0){
        continue; //Ir a la siguiente iteración
    } else{ //También se puede quitar el "else"
        console.log(contador);
    }
}