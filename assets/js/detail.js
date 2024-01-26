const pokemonDetails = document.getElementById('pokemonDetails')

function showDetails(pokemonStatus) {
    return `
    <a href="/details.html?name=${pokemonStatus.name}">
        <li class="pokemon ${pokemonStatus.type}">
            <span class="number">#${pokemonStatus.number}</span>
            <span class="name">${pokemonStatus.name}</span>
            
            
            <div class="detail">
                <ol class="types">
                    ${pokemonStatus.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>
            
                <img src="${pokemonStatus.photo}"
                     alt="${pokemonStatus.name}">
            <div class = "pokemonDetail">
                <ul>
                <li>Altura: ${pokemonStatus.height}</li>
                <li>Peso: ${pokemonStatus.weight}</li>
                </ul>

            </div>
            </div>
        </li>
    `
}

const parametro = new URLSearchParams(window.location.search);

const pokeName = parametro.get('name')

function loadPokemonDetails(name) {
    pokeApi.getPokemon(name)
        .then((pokemonStatus) => {
            pokemonDetails.innerHTML = showDetails(pokemonStatus)
        })

}

loadPokemonDetails(pokeName)