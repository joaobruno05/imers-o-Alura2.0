alert('Digite 1 para squirtle; 2 para pikachu; 3 para charmander; 4 para bubassauro')

var numeroPokemon = prompt('Qual Pokemon você quer evoluir?')

//1 para squirtle
//2 para pikachu
//3 para charmander
//4 para bubassauro

if (numeroPokemon == 1) {
  alert('Squirtle evolui para: WARTORTLE')
} else if (numeroPokemon == 2) {
   alert('Pikachu evolui para: RAICHU')
} else if (numeroPokemon == 3) {
  alert('Charmander evolui para: CHARMELEON')
} else if (numeroPokemon == 4) {
   alert('Bubassauro evolui para: IVYSSAURO')
} else {
  alert('Pokemon não encontrado')
}