const header = document.querySelector("h1");
const container = document.querySelector("#pokemon-container");
const baseURL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
const drawPokemon = document.querySelector("#draw");

function randomNum() {
  return Math.floor(Math.random() * 151) + 1;
}

function drawRandom(num) {
  const pokemon = document.createElement("img");
  pokemon.classList.add("pokemon-img");
  pokemon.setAttribute("src", `${baseURL}${num()}.png`);
  container.append(pokemon);
}
drawPokemon.addEventListener("click", (e) => {
  e.preventDefault();
  if (container.firstChild) {
    container.firstChild.remove();
    drawRandom(randomNum);
  } else {
    drawRandom(randomNum);
  }
});
