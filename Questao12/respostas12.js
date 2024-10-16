function somarall(){

    let array = [1,2,3];

    let somar = array.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
    console.log(somar);
}

somarall();