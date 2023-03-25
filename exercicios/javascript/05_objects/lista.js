const listaAnimal = [
    {
        nome: "Toto",
        raca: "Shitzu",
        idade: 8
    },
    {
        nome: "Snoopy",
        raca: "Beagle",
        idade: 9
    },
    {
        nome: "Nina",
        raca: "Poodle",
        idade: 11
    },
    {
        nome: "Lilica",
        raca: "Pug",
        idade: 12
    }
];

// Maneiras de criar uma lista de nomes
//
// const listaNomes = [];
//
//
// for (let i = 0; i < listaAnimal.length; i++ ) {
//     listaNomes.push(listaAnimal[i].nome);
// }
//
//
// for (obj in listaAnimal) {
//     listaNomes.push(obj.nome);
// }
//
//
// listaAnimal.forEach((obj) => listaNomes.push(obj.nome));

const listaNomes = listaAnimal.map(animal => animal.nome);
// console.log(listaAnimal);
// console.log(listaNomes);

function imprimeNomeIdade( { nome, idade } ) {
    console.log(`Nome: ${nome}\nIdade: ${idade}\n`);
};

listaAnimal.map(a => imprimeNomeIdade(a));