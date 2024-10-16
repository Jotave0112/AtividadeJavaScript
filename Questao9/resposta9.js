const alunos = [ 
    { nome: 'Ana', nota: 8 },
     { nome: 'Carlos', nota: 5 },
      {nome: 'João', nota: 7 } 
    ];

function aprovarReprovar(){
    
        let aprovar = alunos.filter(aprovar => aprovar.nota >= 7);
        let reprovar = alunos.filter( reprovar => reprovar.nota < 7);

        console.log('Alunos Aprovados: ',aprovar,'\n', 'Alunos Reprovados: ',reprovar)
}

aprovarReprovar();