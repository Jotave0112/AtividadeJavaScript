let lista = ['banana','abacaxi','uva']

function remova(lista){

    let remover = lista.splice(1,1);
    let adicionar = lista.splice(1,0, 'goiaba');
    console.log(lista)
}

remova(lista);