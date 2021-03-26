var listaFilmes = []

//Toy Story
listaFilmes.push('https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_UX182_CR0,0,182,268_AL_.jpg')

//Star Wars
listaFilmes.push('https://m.media-amazon.com/images/M/MV5BMDljNTQ5ODItZmQwMy00M2ExLTljOTQtZTVjNGE2NTg0NGIxXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_UX182_CR0,0,182,268_AL_.jpg')

//Interestelar
listaFilmes.push('https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg')

//Cabra da Peste
listaFilmes.push('https://m.media-amazon.com/images/M/MV5BYzRmOTYyZDgtZWJmMy00OTI1LWExMjgtZjRmYTJiNzgwMGIwXkEyXkFqcGdeQXVyNjEwNTM2Mzc@._V1_UY268_CR16,0,182,268_AL_.jpg')

//Pelé
listaFilmes.push('https://m.media-amazon.com/images/M/MV5BODJmYTg4NTEtYTU0Mi00YjQ0LTkyYzEtMTU4MTM2ZWY3NjY4XkEyXkFqcGdeQXVyNjEwNTM2Mzc@._V1_UY268_CR4,0,182,268_AL_.jpg')

//Vingadores: Ultimato
listaFilmes.push('https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_UX182_CR0,0,182,268_AL_.jpg')

//Homem-Aranha: Longe de casa
listaFilmes.push('https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg')

//Batman Begins
listaFilmes.push('https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg')

//Amor com data marcada
listaFilmes.push('https://m.media-amazon.com/images/M/MV5BYWVmYTFjODItOTY2Ni00NDhhLTk1ZDYtMzBmOGFhZTMyY2Q0XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UX182_CR0,0,182,268_AL_.jpg')

//Marley & Eu 2: Filhote Encrenqueiro
listaFilmes.push('https://m.media-amazon.com/images/M/MV5BMjE0Mjk4MjU2NF5BMl5BanBnXkFtZTcwNjQyOTAwNw@@._V1_UY268_CR4,0,182,268_AL_.jpg')

//MIB: Homens de Preto
listaFilmes.push('https://m.media-amazon.com/images/M/MV5BMTU2NTYxODcwMF5BMl5BanBnXkFtZTcwNDk1NDY0Nw@@._V1_UX182_CR0,0,182,268_AL_.jpg')

//O Resgate do Soldado Ryan
listaFilmes.push('https://m.media-amazon.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_UY268_CR0,0,182,268_AL_.jpg')

var escolha = parseInt(prompt('Você quer ver a coleção de filmes completa? \n\n1 - Sim\n2 - Não'))

if (escolha == 1) {
    for (var i = 0; i < listaFilmes.length; i++) {
      document.write('<img src=' + listaFilmes[i] + '>')
      document.getElementById('titulo').innerHTML = 'COLEÇÃO COMPLETA'
      document.getElementById('titulo').style.backgroundColor = 'blue'
    }
} else if (escolha == 2) {
  for (var cont = 0; cont < listaFilmes.length; cont++) {
    var opcao = parseInt(prompt('Escolha qual filme você quer adicionar para sua coleção: \n\n1 - Toy Story\n2 - Star Wars\n3 - Interestelar\n4 - Cabras da Peste\n5 - Pelé\n6 - Vingadores: Ultimato\n7 - Homem-Aranha: Longe de Casa\n8 - Batman Begins\n9 - Amor com data marcada\n10 - Marley & Eu 2: Filhote Encrenqueiro\n11 - MIB: Homens de Preto\n12 - O Resgate do Soldado Ryan\n13 - FINALIZAR ESCOLHA DE FILMES!'))

    var n = opcao - 1

    if (opcao <= listaFilmes.length) {
      var elementoFilme = '<img src=' + listaFilmes[n] + '>'
      document.write(elementoFilme)
      alert('Filme adicionado com sucesso!')
      document.getElementById('titulo').innerHTML = 'SEUS FILMES'
      document.getElementById('titulo').style.backgroundColor = 'red'
    } else if (opcao == listaFilmes.length + 1) {
      alert('Veja os filmes que você escolheu!!!')
      break
    } else if (opcao > listaFilmes.length + 1) {
      alert('Operação inválida!')
      i = i - 1
    }
  }
}