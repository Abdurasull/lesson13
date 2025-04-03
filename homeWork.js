const elContainer = document.querySelector(".container"); 
const elTemplate = document.querySelector(".js-temp").content;
function pokemonRender(arr) {
    let docFragment = document.createDocumentFragment();
    arr.forEach((el) => {
        let clone = elTemplate.cloneNode(true);
        clone.querySelector(".card-img-top").src = el.img;
        clone.querySelector(".name").textContent = el.name;
        clone.querySelector(".card-text").textContent = el.type;
        docFragment.append(clone);
    })
    elContainer.append(docFragment);
}

pokemonRender(pokemons);