// Black Jack
// Turma: 2TDST
// Nome: Vinicius Yuji Nishioka

let soma = 21;
let texto = '';

if (soma <= 10) {
    texto = 'Sem dúvida, compre mais uma carta.'
} else if (soma <= 15) {
    texto = 'Há um risco, mas aconselho a comprar mais uma carta.'
} else if (soma <= 20) {
    texto = 'Aconselho que você pare de jogar.'
} else if (soma == 21) {
    texto = 'Você ganhou não compre mais nada.'
} else {
    texto = 'Infelizmente você perdeu.'
}

console.log(soma, 'pontos.', texto);