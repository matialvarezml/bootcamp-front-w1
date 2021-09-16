const apiURL = 'https://pokeapi.co/api/v2/';

const getPokeApi = async (query) => {
    try {
        const response = await fetch(`${apiURL}${query}`);
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err)
    }
}

const getPokemonByName = async (pokemon, weight) => {
    try {
        const res = await getPokeApi(`pokemon/${pokemon}`);
        if(!weight){
            return res;
        }
        return res.weight > weight && res;
    } catch (err) {
        console.log(err)
    }
}

const getPokemons = async (quant, weight = 0) => {
    try {
        const pokemonsFiltered = [];
        const pokemons = await getPokeApi(`pokemon?limit=${quant}`);
            for(pokemon of pokemons.results) {
                const res = await getPokemonByName(pokemon.name, weight);
                res && pokemonsFiltered.push(res);
            }
            return pokemonsFiltered;
    } catch (err) {
        console.log(err)
    }
}

getPokemonByName('ditto')
    .then(response => console.log('getPokemonByname', response));
    
getPokemons(15)
    .then(response => console.log('getPokemons limit=15', response))

getPokemons(15,150)
    .then(response => console.log('getPokemons limit=15 & weight > 150', response))