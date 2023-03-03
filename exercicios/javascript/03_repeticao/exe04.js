function listarSomatoria(inicio, fim) {
    let soma = 0;
    for(i = inicio; i <= fim; i++) {
        soma = soma + i
        console.log(`${i} - ${soma}`);
    }
}

listarSomatoria(5,75);