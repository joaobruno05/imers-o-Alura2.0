function converteAnosLuz() {
  
  var anosLuz = document.getElementById('entrada').value

  document.getElementById('saida').value = (anosLuz * 9460528405000.02).toFixed(2)
}