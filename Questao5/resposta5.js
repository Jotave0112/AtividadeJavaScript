

function numerosParesDobrar(){
    let lista = [1,2,3,4,5];
    let par = lista.filter(valor => valor % 2 === 0);
    console.log(par)
    let dobrar = par.map(valor => valor * 2);
    console.log(dobrar)
}

numerosParesDobrar();