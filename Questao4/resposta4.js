function fatorial(num){
    let antes = 0;
    let depois = 1;
    for(let x = 5; x >= 1; x--){
        antes = x;
        depois = antes * depois;
    }

    console.log(depois);
}

fatorial(5);