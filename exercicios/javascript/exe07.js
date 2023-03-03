const dados = {
    faculdade: "FIAP",
    programa: "Javascript",
    autor: "Vinicius Yuji Nishioka"
};

function linha(qtd){
    i = 1;
    tamanho = '#'
    while(i < qtd) {
        tamanho = tamanho + '#'
        i++;
    }
    console.log(tamanho)
}

function exibir(dados) {
    linha(30);
    console.log('#', dados.faculdade, '#\n#', dados.programa, '#\n#', dados.autor, '#');
    linha(30);
}

exibir(dados);