// =============================================
// CARROSSEL DE PROJETOS
// =============================================

const slides = document.querySelectorAll('.slide');
const pontos = document.querySelectorAll('.ponto');

let slideAtual = 0;

function mudarSlide(direcao) {
  irParaSlide(slideAtual + direcao);
}

function irParaSlide(numero) {
  slides[slideAtual].classList.remove('ativo');
  pontos[slideAtual].classList.remove('ativo');

  slideAtual = numero;

  if (slideAtual >= slides.length) slideAtual = 0;
  if (slideAtual < 0) slideAtual = slides.length - 1;

  slides[slideAtual].classList.add('ativo');
  pontos[slideAtual].classList.add('ativo');
}

// Troca automática a cada 4 segundos
setInterval(() => mudarSlide(1), 4000);
