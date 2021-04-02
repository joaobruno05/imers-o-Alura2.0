var cartas = [
  {
    nome: 'Messi',
    atributos: {
      ataque: 92,
      passe: 91,
      defesa: 38,
      drible: 95,
    },
    img: 'https://image.news.livedoor.com/newsimage/stf/e/d/edbac_1469_7bd35a6a3e2d01b1b7f6c28cd50f70fc.jpg'
  },
  {
    nome: 'Cristiano Ronaldo',
    atributos: {
      ataque: 93,
      passe: 82,
      defesa: 35,
      drible: 89,
    },
    img: 'https://images.mein-mmo.de/magazin/medien/2019/09/ronaldo-194x300.jpg'
  },
  {
    nome: 'Casemiro',
    atributos: {
      ataque: 69,
      passe: 75,
      defesa: 87,
      drible: 72, 
    },
    img: 'https://realsport101.com/wp-content/uploads/2019/06/casemiro-custom.png'
  },
   {
    nome: 'Neymar',
    atributos: {
      ataque: 91,
      passe: 87,
      defesa: 32,
      drible: 95, 
    },
    img: 'https://realsport101.com/wp-content/uploads/2020/01/Neymar-fut-base-card-198x300.png'
  },
  {
    nome: 'Mbappé',
    atributos: {
      ataque: 92,
      passe: 78,
      defesa: 39,
      drible: 90, 
    },
    img: 'https://realgaming101.es/wp-content/uploads/2021/01/FIFA-20-Ratings-Kylian-Mbappe-89-FUT-Card.jpg'
  }, 
]

var cartaMaquina
var cartaJogador

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
  cartaMaquina = cartas[numeroCartaMaquina]
  console.log(cartaMaquina)
  
  var numeroCartaJogador = parseInt(Math.random() * cartas.length)
  while (numeroCartaJogador == numeroCartaMaquina) {
    numeroCartaJogador = parseInt(Math.random() * cartas.length)
  }
  cartaJogador = cartas[numeroCartaJogador]
  console.log(cartaJogador)
  
  document.getElementById('btnSortear').disabled = true
  document.getElementById('btnJogar').disabled = false 
  exibirOpcoes()
}

function exibirOpcoes() {
  var opcoes = document.getElementById('opcoes')
  var opcoesTexto = ''
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo
  }
  opcoes.innerHTML = opcoesTexto
  opcoes.style.backgroundColor = 'blue'
}

function obtemAtributoSelecionado() {
  var radioAtributo = document.getElementsByName('atributo')
  for (var i = 0; i < radioAtributo.length; i++) {
   if (radioAtributo[i].checked) {
     return radioAtributo[i].value
   } 
  }
}

function jogar() {
 
  var atributoSelecionado = obtemAtributoSelecionado()
  
  if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
  var venceu = document.getElementById('resultado')
  venceu.innerHTML = 'Parabéns, você venceu!'
  venceu.style.backgroundColor = 'green'  
  } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
    var perdeu = document.getElementById('resultado')
    perdeu.innerHTML = 'Você perdeu!!!'
    perdeu.style.backgroundColor = 'red'
  } else {
    var empatou = document.getElementById('resultado')
    empatou.innerHTML = 'Empate'
    empatou.style.backgroundColor = 'white'
    empatou.style.color = 'black'
  }
  exibirCartasNaTela()
  mensagemCarta()
  
  document.getElementById('btnJogar').disabled = true
}

function exibirCartasNaTela() {
  var fotoCardJogador = document.getElementById('jogador')
  fotoCardJogador.innerHTML = "<img class='fotoJogador' src=" + cartaJogador.img + ">"
  fotoCardJogador.style.backgroundColor = 'gray'
  
  var fotoCardMaquina = document.getElementById('maquina')
  fotoCardMaquina.innerHTML = "<img class='fotoMaquina' src=" + cartaMaquina.img + ">"
  fotoCardMaquina.style.backgroundColor = 'gray'
}

function mensagemCarta() {
  var suaCarta = document.getElementById('seuCard')
  suaCarta.innerHTML = 'SUA CARTA'
  suaCarta.style.backgroundColor = '#52170b'
  
  var cartaDaMaquina = document.getElementById('cardDaMaquina')
  cartaDaMaquina.innerHTML = 'CARTA DA MÁQUINA'
  cartaDaMaquina.style.backgroundColor = '#52170b'
}