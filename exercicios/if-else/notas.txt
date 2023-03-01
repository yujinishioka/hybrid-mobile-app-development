// Nota
// Turma: 2TDST
// Nome: Vinicius Yuji Nishioka

let nota = 6;
let texto = "";

if (nota >= 6) {
    texto = "Aluno aprovado."
} else if (nota > 4) {
    texto = "Aluno em Recuperação."
} else {
    texto = "Aluno Reprovado."
}

console.log(texto)