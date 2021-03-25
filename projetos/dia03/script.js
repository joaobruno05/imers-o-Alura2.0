var numeroSecreto = parseInt(Math.random() * 10)
//alert(numeroSecreto)
var tentativas = 1

while (tentativas <= 3) {
  var chute = parseInt(prompt('Chute o número'))
  
  if (numeroSecreto == chute) {
    document.getElementById('fundo').style.backgroundColor = 'green'
    document.getElementById('saida').style.backgroundColor = 'green'
    document.getElementById('saida').value = "Parabéns, você acertou!!!"
    break
  } else if (chute > numeroSecreto) {
    alert("O número secreto é menor")
    tentativas = tentativas + 1
  } else if (chute < numeroSecreto) {
    alert("O número secreto é maior")
    tentativas = tentativas + 1
  }

}
if (chute != numeroSecreto) {
  document.getElementById('fundo').style.backgroundColor = 'red'
  document.getElementById('saida').style.backgroundColor = 'red'
  document.getElementById('saida').value = "As tentativas acabaram. O número secreto era " + numeroSecreto + '!'
}