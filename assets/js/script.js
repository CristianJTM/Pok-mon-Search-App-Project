const pokeApi = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/";
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const pokemonWeight = document.getElementById("weight");
const pokemonHeight = document.getElementById("height");
const pokemonImg = document.getElementById("sprite");
const pokemonTypes = document.getElementById("types");
const pokemonHp = document.getElementById("hp");
const pokemonAttack = document.getElementById("attack");
const pokemonDefense = document.getElementById("defense");
const pokemonSA = document.getElementById("special-attack");
const pokemonSD = document.getElementById("special-defense");
const pokemonSpeed = document.getElementById("speed"); 

const pokeApiData = async () => {
  try {
    const res = await fetch(`${pokeApi}${searchInput.value.toLowerCase()}`);
    const data = await res.json();
    pokemonName.innerHTML = `${data.name}`;
    pokemonId.innerHTML = `${data.id}`;
    pokemonWeight.innerHTML = `Weight: ${data.weight}`;
    pokemonHeight.innerHTML = `Height: ${data.height}`;
    pokemonImg.src = `${data.sprites.front_default}`
    pokemonTypes.innerHTML = `${data.types.map(item => `<p class="type ${item.type.name}">${item.type.name.toUpperCase()}<p>`).join("")}`;
    pokemonHp.innerHTML = data.stats[0].base_stat;
    pokemonAttack.innerHTML = data.stats[1].base_stat;
    pokemonDefense.innerHTML = data.stats[2].base_stat;
    pokemonSA.innerHTML = data.stats[3].base_stat;
    pokemonSD.innerHTML = data.stats[4].base_stat;
    pokemonSpeed.innerHTML = data.stats[5].base_stat;
    
  } catch (err) {
    alert("Pokémon not found");
  } 
};


searchBtn.addEventListener("click",pokeApiData)
