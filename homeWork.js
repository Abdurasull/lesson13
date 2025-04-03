const elContainer = document.querySelector(".row"); 
const elTemplate = document.querySelector(".js-temp").content;
const elForm = document.querySelector(".js-form");
const elInput = elForm.querySelector(".js-search-inp");
const elBtn = elForm.querySelector(".js-search-btn");

// Barcha elementlarni chiqarish uchun function
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

// Elementlarni izlash uchun function
function searchFunction(arr, valInput){
    console.log(valInput);
    if(!valInput) return alert("Iltimos mush ma`lumot yubormang!");
    newArray = arr.filter((el) => el.name.toUpperCase().includes(valInput.toUpperCase()));
    console.log(newArray);
   
    elContainer.textContent = '';

    let docFragment = document.createDocumentFragment();
    
    newArray.forEach((el) => {
        let clone = elTemplate.cloneNode(true);
        clone.querySelector(".card-img-top").src = el.img;
        clone.querySelector(".name").textContent = el.name;
        clone.querySelector(".card-text").textContent = el.type;
        docFragment.append(clone);
    });
    elContainer.append(docFragment);

}
pokemonRender(pokemons);

elForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    searchFunction(pokemons, elInput.value);
})