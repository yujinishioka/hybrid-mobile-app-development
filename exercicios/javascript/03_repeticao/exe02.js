function listarNumerosImpares(inicio, fim) {
    for(i = inicio; i <= fim; i++) {
        if((i % 2) != 0)
        console.log(i);
    }
}

listarNumerosImpares(1, 100);