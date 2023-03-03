function tabuada(valor) {
    let resultado = 0;
    for(i = 1; i <= 10; i++) {
        resultado = valor * i
        console.log(`${valor} X ${i} = ${resultado}`);
    }
}

tabuada(7);