class Animal {
    nome = "";
    raca = "";
    idade = 0;
}

const a1 = new Animal();
a1.nome = "Toto";
a1.raca = "Vira Lata";
a1.idade = 8;

const a2 = new Animal();
a2.nome = "Rex";
a2.raca = "Shitzu";
a2.idade = 12;

// const a3 = new Animal();
// a3.nome = a1.nome;
// a3.raca = a1.raca;
// a3.idade = a1.raca;

// const a3 = Object.assign(new Animal(), a1);

// Spread
const a3 = { ... a1, nome: "Snoopy", raca: "Beagle" };

console.log(
    "", a1,
    "\n", a2,
    "\n Animal", a3
);