function numeroPrimo(num){
    let lista = [];
    for(let x = 1; x <= 100; x++){
        lista.push(x);
    }
    let primo = lista.filter(valor => num % valor === 0);
    if(primo.length < 3){
        console.log(num, 'Eh Primo');
    }else {
        console.log('Nao eh primo', primo)
    }

}

numeroPrimo(10);