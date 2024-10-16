let array = [8,4,2,6,9,10,7,121];

function multiplos(num){
    for(let x = 0; x < array.length; x++){
        
        let resultado = array.filter(valor => valor % num === 0 );
        let total = resultado.length
        console.log(resultado)
        console.log(total)
        break;
    }
}

multiplos(2);