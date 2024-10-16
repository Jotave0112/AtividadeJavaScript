let array = [11,23,1,45,6,7,8,13];

function lista(){

    let filtrar = array.filter(valor => valor > 10);
    let mapear = filtrar.map(valor => valor * valor);
    console.log(mapear)

}

lista();