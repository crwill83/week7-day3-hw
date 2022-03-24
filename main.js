console.log('Hello')
// const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
// const data = await res.json()


const getData = async (name) => {
    
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const pokemon = await res.json()
    // this_pokemon = [pokemon.name, pokemon.sprites.other.dream_world.front_default]

    console.log(pokemon)
    
    return pokemon
};

const loadData = async () => {
    const myInput = document.querySelector('input').value


    const myPokemon = await getData(myInput);
    
    createPokemon(myPokemon)
    // console.log(myPokemon.name)
    console.log(typeof myPokemon.sprites.other.dream_world.front_default)
};

const createPokemon = (pokemon) => {
    // clears old one before adding new one, not using since I like the list option that you can clear with the button
    // document.querySelector('section').innerHTML=''

    const my_h4 = document.createElement('h4');
    const my_img = new Image(100,100)
    my_h4.innerText = pokemon.name;
    my_h4.className = 'card pokedex';
    my_h4.id = 'card'
    my_img.src = pokemon.sprites.other.dream_world.front_default
    my_img.className = 'card-img-top'
    // got the right link to the image but doesn't seem to be doing anything
    document.querySelector('section.list-group').insertAdjacentElement('beforeend', my_h4, my_img);
    my_h4.appendChild(my_img)


    console.log(pokemon.sprites.other.dream_world.front_default);
};

const clearData = () => {
    document.querySelector('section').innerHTML=''
};


// clear button
const clear = document.getElementsByClassName('btn-danger')[0]
// add event listener to button
clear.addEventListener('click', clearData)






