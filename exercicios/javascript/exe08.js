const aluno = {
    id: 1,
    nome: 'Vinicius Yuji Nishioka',
    ra: 92895,
    nascimento: '16/05/1996'
}

function estudar(aluno, tempo) {
    console.log(aluno.nome, 'estudou', tempo, 'horas.')
}

function descansar(aluno, tempo) {
    console.log(aluno.nome, 'descansou', tempo, 'horas.')
}

estudar(aluno, 5);
descansar(aluno, 1);