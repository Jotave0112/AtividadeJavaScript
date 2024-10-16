let fila = [];

function sistemaFila(nome){

    fila.push(nome);
    console.log(fila);
}

function remover(){

    fila.pop();
    console.log(fila);
}

sistemaFila('maria');
sistemaFila('jose');
remover();