let passos = 2;
let erros = 10;
let testes = 10;
let velocidade = 10;
let ganhos = 1500;
let inflacao = 1;
let lucro = 1500;
let coelhos = 3;
let animais = 10;

function andar(passos){
    passos = passos + 2;
    return passos;
}

function corrigirErro(erros){
    erros--;
    return erros;
}

function testar(testes){
    testes += 2;
    return testes;
}

function aumentarVelocidade(velocidade){
    velocidade += 10;
    return velocidade;
}

function aumentarGanhos(ganhos){
    ganhos = ganhos * 1.02;
    return ganhos;
}

function inflacionar(inflacao){
    inflacao = inflacao * 1.01;
    return inflacao;
}

function lucros(lucro){
    lucro = lucro / 1.03;
    return lucro;
}

function calcularAnimais(animais, coelhos){
    animais = animais + (5 * coelhos);
    return animais;
}