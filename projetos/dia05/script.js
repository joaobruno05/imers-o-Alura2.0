alert('Filmes disponíveis para você: \n\nToy Story\nStar Wars\nInterestelar\nCabras da Peste\nPele')

var campoFilmeFavorito = document.querySelector('#filme')

function adicionarFilme() {
  var filmeFavorito = campoFilmeFavorito.value
  
  if (filmeFavorito == 'Toy Story' || filmeFavorito == 'Toy story' || filmeFavorito == 'toy story') {
    document.getElementById('toyStory').width = '853'
    document.getElementById('toyStory').height = '480'
  } else if (filmeFavorito == 'Star Wars' || filmeFavorito == 'Star wars' || filmeFavorito == 'star wars') {
    document.getElementById('starWars').width = '853'
    document.getElementById('starWars').height = '480'
  } else if (filmeFavorito == 'Interestelar' || filmeFavorito == 'interestelar') {
    document.getElementById('interestelar').width = '853'
    document.getElementById('interestelar').height = '480'
  } else if (filmeFavorito == 'Cabras da Peste' || filmeFavorito == 'Cabras da peste' || filmeFavorito == 'cabras da peste') {
    document.getElementById('cabrasDaPeste').width = '853'
    document.getElementById('cabrasDaPeste').height = '480'
  } else if (filmeFavorito == 'Pelé' || filmeFavorito == 'Pele' || filmeFavorito == 'pele' || filmeFavorito == 'pelé') {
    document.getElementById('pele').width = '853'
    document.getElementById('pele').height = '480'
  } else {
    alert('Este filme não está disponível no momento!!!')
  }
  campoFilmeFavorito.value = ''
}

function limparCampo() {
  document.getElementById('toyStory').width = '0'
  document.getElementById('toyStory').height = '0'
  
  document.getElementById('starWars').width = '0'
  document.getElementById('starWars').height = '0'
  
  document.getElementById('interestelar').width = '0'
  document.getElementById('interestelar').height = '0'
  
  document.getElementById('cabrasDaPeste').width = '0'
  document.getElementById('cabrasDaPeste').height = '0'
  
  document.getElementById('pele').width = '0'
  document.getElementById('pele').height = '0'
}