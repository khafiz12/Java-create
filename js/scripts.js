
let pokemonRepository=(function() {
let pokemonList = [];
let apiList = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
 

    function add (pokemon) {
        if (
            typeof pokemon === "object" &&
            "name" && "detailsUrl" in pokemon 
        ) {
            pokemonList.push(pokemon);
        }   else {
            console.log("This is not a pokemon");
        }
        }
     
    function getAll() {
        return pokemonList;
    }

    //function showDetails(pokemon) {
    //console.log(pokemon)
    //};

    function addListItem(pokemon){
    let pokemonList = document.querySelector(".pokemon-list");
    let listPokemon= document.createElement("li");
    let button = document.createElement("button");
     button.innerText= pokemon.name;
     button.classList.add ( "button-class");
     listPokemon.appendChild(button);
     pokemonList.appendChild(listPokemon);
     button.addEventListener ('click', function(event) {
     showDetails(pokemon);
     });
    }
  

    function loadList() 
   
    {
     return fetch(apiList).then(function(response) {
     return response.json();   
     }).then(function(json){
     json.results.forEach(function(item){   
     let pokemon = {
      name: item.name,
      detailsUrl: item.url  
     };
     add(pokemon);
     console.log(pokemon);
    }); 
    }).catch(function(e){
    console.error(e); 
    })
    }
    

    function loadDetails (pokemon) {
    let url = pokemon.detailsUrl;
    return fetch(url).then(function(response){
    return response.json();
    }).then(function(details){  
    pokemon.imageUrl = details.sprites.front_default;    
    pokemon.height = details.height;
    pokemon.types = [details.types]; 
    

    }).catch(function(e) {
     console.error(e);   
    });

    }

    function showDetails(pokemon) {
        pokemonRepository.loadDetails(pokemon).then(function() {
         console.log(pokemon);
         });     
        }


    return { 
        getAll: getAll,
        add:add,
        addListItem:addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails
    };
})();

pokemonRepository.loadList().then(function(){
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
     //console.log (pokemonRepository.getAll () );
    // pokemonRepository.add ({Name:'Snorlax' });
    // console.log (pokemonRepository.getAll ());

});
});


//console.log (pokemonRepository.getAll () );
//pokemonRepository.add ({Name:'Snorlax' });
//console.log (pokemonRepository.getAll ());





  

