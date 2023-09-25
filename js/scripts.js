
let pokemonRepository=(function() {
let pokemonList = [ 
   {Name: 'Charizad', 
    height: 6,   
    types:  ['Firea','Flying'],
    weight:  '200'

},   

   { Name: 'Squirtle',
     height: 2,  
     types: ['Water', 'Poisen'],
     weight: '20'
},

    {Name: 'Pikachu',
    height: 10 ,
    types: ['Electric','Psychic'],
    weight: '13'
}
 ]
    function getAll () {
        return pokemonList;
    }  

    function add (pokemon) {
     pokemonList.push(pokemon);   
    }

    function showDetails(pokemon) {
    console.log(pokemon)
    };

    function addListItem(pokemon){
    let pokemonList = document.querySelector(".pokemon-list");
    let listPokemon= document.createElement("li");
    let button = document.createElement("button");
     button.innerText= pokemon.Name;
     button.classList.add ( "button-class");
     listPokemon.appendChild(button);
     pokemonList.appendChild(listPokemon);
     button.addEventListener ('click', function() {
       showDetails(pokemon);
     })
    }


    return { 
        getAll: getAll,
        add:add,
        addListItem:addListItem
    }
})();

console.log (pokemonRepository.getAll () );
pokemonRepository.add ({Name:'Snorlax' });
console.log (pokemonRepository.getAll ());





 



    //pokemonList.getAll().forEach ( function(pokemon) {
    //let pokemonList = document.querySelector(".pokemon-list");
    //let listPokemon= document.createElement("li");
    //let button = document.createElement("button");
    // button.innerText= "Click Me";
    // button.classList.add ( "button-class");
    // listPokemon.appendChild(button);
    // pokemonList.appendChild(listPokemon);


//});

    pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
    });

