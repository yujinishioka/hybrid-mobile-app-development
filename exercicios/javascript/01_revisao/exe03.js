let readline = require('readline');

let ambiente = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

ambiente.question("Qual o valor da humidade atual do ambiente?\n", function(answer) {
    let humidadeAmbiente = answer;
    
    if(humidadeAmbiente > 60)
        console.log("O ar está húmido.");
    else if(humidadeAmbiente >= 30)
        console.log("O ar está seco.")
    else
        console.log("O ar está muito seco.")
    
    ambiente.close();
});