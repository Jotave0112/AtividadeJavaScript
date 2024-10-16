function somaAteN(num){
    let antes = 0;
    let depois = 0;
    for(let x = 1; x <= 5; x++ ){
        antes = x;
        depois = antes + depois;
    }
    return depois;
}

console.log('A Soma crescente eh ' + somaAteN(5));