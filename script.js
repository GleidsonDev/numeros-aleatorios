// Pegar o botão pelo ID
const button = document.getElementById('generate');

// evento de click
button.addEventListener('click', function() {
  //Como é um input tem que pegar o valor dele (.value)
  const min = parseInt(document.getElementById('min').value); // parseInt -> tranforma em um inteiro
  const max = parseInt(document.getElementById('max').value);

  // calculo que gera o número aleatório
  let result = Math.floor(Math.random() * (max - min + 1)) + min;

  // Se não colocar nada... Valor inválido
  if(isNaN(result)) {
    result = 'Valor inválido';
  }

  // Pega o span que está dentro do #result
  document.querySelector('#result > span').textContent = result; // O texto dele vai ser igual a result
});