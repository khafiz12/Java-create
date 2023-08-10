

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
];

for ( let i = 0; i < pokemonList.length; i++ ) {
    if (pokemonList[i].height > '3' && pokemonList[i].height < '7' )
    { document.write (  pokemonList[i].Name +   " is medium pokemon "  ) ;}
     
    else if (pokemonList[i].height < '3' )
    {document.write (pokemonList[i].Name +  "  is a small pokemon " );}

    else { document.write (pokemonList[i].Name +  "  WOW That's Big"); }
}


