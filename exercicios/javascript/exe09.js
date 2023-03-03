const dados = [
    {
        numero: 14,
        kvh: 230
    }, {
        numero: 35,
        kvh: 120
    }, {
        numero: 54,
        kvh: 350
    }, {
        numero: 71,
        kvh: 410
    }, {
        numero: 92,
        kvh: 70
    }
]

const formatado = dados.map( casa => {
    let valor = casa.kvh * 0.5
    let texto = ("Casa nº " + casa.numero + " | KV/h:" + casa.kvh + " | R$: " + valor.toFixed(2))
    return texto
})

console.log(formatado)