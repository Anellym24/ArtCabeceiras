const slidesEl = document.getElementById('slides');
  const pontosEl = document.getElementById('pontos');
  const totalSlides = slidesEl.children.length;
  let index = 0;

  // cria os indicadores (pontos)
  for (let i = 0; i < totalSlides; i++) {
    const div = document.createElement('div');
    div.className = 'ponto';
    div.dataset.i = i;
    pontosEl.appendChild(div);
  }

  const pontos = Array.from(pontosEl.children);

  function atualizarSlide(i) {
    slidesEl.style.transform = `translateX(-${i * 100}%)`;
    pontos.forEach((p, idx) => p.classList.toggle('ativo', idx === i));
  }

  atualizarSlide(0);

  // rotação automática
  let mudancaSlide = setInterval(() => {
    index = (index + 1) % totalSlides;
    atualizarSlide(index);
  }, 5000);

  // interação manual
  pontosEl.addEventListener('click', e => {
    const p = e.target.closest('.ponto');
    if (!p) return;
    index = Number(p.dataset.i);
    atualizarSlide(index);
    clearInterval(mudancaSlide);
    mudancaSlide = setInterval(() => {
      index = (index + 1) % totalSlides;
      atualizarSlide(index);
    }, 5000);
  });

  const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting === true) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    })
})

const elements = document.querySelectorAll('.hidden');

elements.forEach((element) => myObserver.observe(element));

function abrirModal(id) {
  document.getElementById(id).style.display = 'flex';
}

function fecharModal(id) {
  document.getElementById(id).style.display = 'none';
}

// Fechar ao clicar fora
window.onclick = function(event) {
  if (event.target.classList.contains('modal')) {
    event.target.style.display = 'none';
  }
}

// Fechar com ESC
document.addEventListener('keydown', function(event) {
  if (event.key === "Escape") {
    document.querySelectorAll('.modal').forEach(m => m.style.display = 'none');
  }
});

  const backToTopButton = document.getElementById('back-to-top');

      window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
          backToTopButton.style.display = 'block';
        } else {
          backToTopButton.style.display = 'none';
        }
      });

      backToTopButton.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });

