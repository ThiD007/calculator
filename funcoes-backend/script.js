const display = document.getElementById('display');
const operacaoDisplay = document.getElementById('operacao');
const botoes = document.querySelectorAll('.btn');
const clickSom = document.getElementById('click-som');
const toggleTema = document.getElementById('toggle-tema');

let operador = '';
let valorAnterior = '';
let valorAtual = '';
let resultadoMostrado = false;

// 🔊 Adiciona som e lógica de clique
botoes.forEach(btn => {
  btn.addEventListener('click', () => {
    clickSom.currentTime = 0;
    clickSom.play();
    const valor = btn.textContent;

    if (!isNaN(valor) || valor === '.') {
      if (resultadoMostrado) {
        valorAtual = '';
        resultadoMostrado = false;
      }
      valorAtual += valor;
      display.value = valorAtual;
      atualizarOperacao();
    } 
    else if (valor === 'C') {
      valorAnterior = '';
      valorAtual = '';
      operador = '';
      display.value = '';
      operacaoDisplay.textContent = '';
    } 
    else if (valor === '±') {
      valorAtual = (parseFloat(valorAtual || 0) * -1).toString();
      display.value = valorAtual;
      atualizarOperacao();
    } 
    else if (valor === '%') {
      valorAtual = (parseFloat(valorAtual || 0) / 100).toString();
      display.value = valorAtual;
      atualizarOperacao();
    } 
    else if (valor === '=') {
      if (valorAnterior && operador && valorAtual) {
        const resultado = calcular(parseFloat(valorAnterior), parseFloat(valorAtual), operador);
        operacaoDisplay.textContent = `${valorAnterior} ${operador} ${valorAtual} =`;
        display.value = resultado;
        valorAnterior = resultado.toString();
        valorAtual = '';
        operador = '';
        resultadoMostrado = true;
      }
    } 
    else { // operadores
      if (valorAtual) {
        if (valorAnterior && operador) {
          valorAnterior = calcular(parseFloat(valorAnterior), parseFloat(valorAtual), operador).toString();
        } else {
          valorAnterior = valorAtual;
        }
        valorAtual = '';
      }
      operador = valor;
      atualizarOperacao();
    }
  });
});

// 🔆 Alternar tema
toggleTema.addEventListener('click', () => {
  document.body.classList.toggle('claro');
  toggleTema.textContent = document.body.classList.contains('claro') ? '🌞' : '🌙';
});

function calcular(a, b, op) {
  switch (op) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return b !== 0 ? a / b : 'Erro';
    default: return b;
  }
}

function atualizarOperacao() {
  operacaoDisplay.textContent = `${valorAnterior} ${operador} ${valorAtual}`;
}
