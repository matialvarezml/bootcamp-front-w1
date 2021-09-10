const numeros = [];
for(let i = 0; i<100; i++){
    numeros.push(i+1);
}

const numerosx2 = numeros.map(number => number *2);
console.log(numerosx2);

const numerosMayores = numerosx2.filter(numero => numero > 5);
console.log(numerosMayores);    

const primerNumero = numerosx2.find( numero => numero > 10 );

console.log(primerNumero);

let pokemones = [ 
    { nombre: 'pikachu', poder: 12 },
    { nombre: 'bulbasaur', poder: 6 },
    { nombre: 'charizard', poder: 19 },
    { nombre: 'squirtle', poder: 3 },
    { nombre: 'metwo', poder: 6 }, 
];

const pokemonesFiltrados = pokemones.filter( pokemon => pokemon.poder < 10 );

console.log(pokemonesFiltrados);


    