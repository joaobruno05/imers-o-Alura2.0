var fortaleza = {
  time: 'Fortaleza',
  P: 0,
  V: 0,
  E: 0,
  D: 0
}

var ceara = {
  time: 'Ceará',
  P: 0,
  V: 0,
  E: 0,
  D: 0
}

var bahia = {
  time: 'Bahia',
  P: 0,
  V: 0,
  E: 0,
  D: 0
}

var sport = {
  time: 'Sport',
  P: 0,
  V: 0,
  E: 0,
  D: 0
}

var santaCruz = {
  time: 'Santa Cruz',
  P: 0,
  V: 0,
  E: 0,
  D: 0
}

function calculaPontos(clube) {
  var pontos = (clube.V * 3) + clube.E
  return pontos
  }

var times = [fortaleza, ceara, bahia, sport, santaCruz]

exibirTimesNaTela(times)

function exibirTimesNaTela(times) {
  var html = ''
  for (var i = 0; i < times.length; i++) {
    html += "<tr><td>" + times[i].time + "</td>"
    html += "<td>" + times[i].P + "</td>"
    html += "<td>" + times[i].V + "</td>"
    html += "<td>" + times[i].E + "</td>"
    html += "<td>" + times[i].D + "</td>"
    html += "<td><button class='vitoria' onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
    html += "<td><button class='empate' onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
    html += "<td><button class='derrota' onClick='adicionarDerrota(" + i + ")'>Derrota</button></td></tr>"
  }
  var tabelaClubes = document.getElementById('tabelaClubes')
  tabelaClubes.innerHTML = html
}

function adicionarVitoria(i) {
  var time = times[i]
  time.V++
  time.P = calculaPontos(time)
  exibirTimesNaTela(times)
}

function adicionarDerrota(i) {
  var time = times[i]
  time.D++
  exibirTimesNaTela(times)
}

function adicionarEmpate(i) {
  var time = times[i]
  time.E++
  time.P = calculaPontos(time)
  exibirTimesNaTela(times)
}

function alterarCorVitoria() {
  document.getElementById('vitoria').style.backgroundColor = 'green'
}