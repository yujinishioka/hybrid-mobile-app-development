function replicar(texto, qtd) {
    let resp = texto;
    for(i = 1; i < qtd; i++) {
        resp = resp + texto;
    }
    return resp;
}

function centralizar(texto, comprimento) {
    let resp = "#"
    let dif = (comprimento - texto.length);
    const par = dif % 2 == 0 ? true : false;
    dif = Math.floor(dif / 2) - 1;

    if(par) {
        resp = resp + replicar(" ", dif);
    } else {
        resp = resp + replicar(" ", dif + 1);
    }

    resp = `${resp}${texto}${replicar(" ", dif)}#`;
    return resp;
}

function cabecalho(faculdade, programa, autor) {
    let resp = replicar("#", 30) + "\n";
    resp = resp + centralizar(faculdade, 30) + "\n";
    resp = resp + centralizar(programa, 30) + "\n";
    resp = resp + centralizar("Feito por: " + autor, 30) + "\n";
    resp = resp + replicar("#", 30);
    return resp;
}

console.log(cabecalho("FIAP", "Javascript", "Yuji Nishioka"));