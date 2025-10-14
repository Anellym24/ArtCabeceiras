       // Slides e os pontos (marcadores dos slides)
            const slidesEl = document.getElementById( 'slides' );
            const pontosEl = document.getElementById( 'pontos' );
            const totalSlides = slidesEl.children.length; // 3 elmentos
            let index = 0;

            // Cria a área dos pontos
            for ( let i = 0; i < totalSlides; i++ ) {
                const div = document.createElement( 'div' );
                div.className = 'ponto';
                div.dataset.i = i;
                pontosEl.appendChild( div );
            }

            const pontos = Array.from( pontosEl.children );

            // Mudança do Slide
            function atualizarSlide( i ) {
                slidesEl.style.transform = `translateX(-${ i * 100 }%)`;
                pontos.forEach( ( ponto, idx ) => {
                    ponto.classList.toggle( 'ativo', idx == i );
                } );
            }
            atualizarSlide( 0 );

            // Faz a mudança automática do Slide
            let mudancaSlide = setInterval( () => {
                index = ( index + 1 ) % totalSlides;
                atualizarSlide( index )
            }, 5000 );

            // Interação dos pontos
            pontosEl.addEventListener( 'click', e => {
                const p = e.target.closest( '.ponto' ); // closest() encontra o ancestral mais próximo ou o próprio elemento que corresponda a um seletor CSS específico (percorre para cima, se não encontrar retorna null).
                if ( !p ) return;
                index = Number( p.dataset.i );
                atualizarSlide( index );
                clearInterval( mudancaSlide );

                mudancaSlide = setInterval( () => {
                    index = ( index + 1 ) % totalSlides;
                    atualizarSlide( index )
                }, 5000 );
            } );

            // Eventos - Dados dos Eventos
            const eventos = {
                1: {
                    id: 1,
                    titulo: 'AI Future Summit',
                    img: './images/future_of_ai.jpg',
                    desc: 'Painéis com pesquisadores e empresas sobre modelos generativos, MLOps, ética e governança em IA. Inclui trilhas periódicas e demonstrações.'
                },
                2: {
                    id: 1,
                    titulo: 'Cloud & Develops Conference',
                    img: './images/cloudDev.jpg',
                    desc: 'Workshops hands-on sobre infraestrutura com código, pipelines CI/CD, observalidade e arquiteturas escaláveis.'
                },
                3: {
                    id: 1,
                    titulo: 'Cybersecurity Day',
                    img: './images/cybersecurity.jpg',
                    desc: 'Sessões sobre defesa, privacidade e testes práticos (CTF). Oficinas para fortalecer práticas de red team e blue team.'
                },
                4: {
                    id: 1,
                    titulo: 'Frontend Dev Live',
                    img: './images/frontend.jpg',
                    desc: 'Live coding, performance e acessibilidade. Painéis com arquitetos de front-end e designers de experiência.'
                }
            };

            // Campo Modal
            const modal = document.getElementById( 'modal' );

            // Modal - Cabeçalho / Título
            const mTitulo = document.getElementById( 'mTitulo' );
            // Modal - Cabeçalho / 
            const mFechar = document.getElementById( 'mFechar' );
            // Modal - Imagem
            const modalCorpo = document.getElementsByClassName( 'modal-corpo' )[ 0 ];
            const mImg = document.createElement( 'img' );
            modalCorpo.firstElementChild.appendChild( mImg );
            // Modal - Descrição
            const mDescricao = document.getElementById( 'mDescricao' );

            // Adicionar Modal
            document.addEventListener( 'click', e => {
                const btn = e.target.closest( '[ data-acao="abrir" ]' );
                if ( btn ) {
                    const id = btn.dataset.id;
                    const objEventos = eventos[ id ];
                    if ( !objEventos ) return;
                    mTitulo.textContent = objEventos.titulo;
                    mImg.src = objEventos.img;
                    mImg.alt = objEventos.titulo;
                    mDescricao.textContent = objEventos.desc;
                    modal.classList.add( 'abrir' );
                    modal.setAttribute( 'aria-hidden', 'false' )
                }
            } );

            // Modifica a indicação para a abertura e confirma a área oculta (Acessibilidade)
            mFechar.addEventListener( 'click', () => {
                modal.classList.remove( 'abrir' );
                modal.setAttribute( 'aria-hidden', 'true' )
            } );


       function abrirModal(id) {
      document.getElementById(id).classList.add('ativo');
    }

    function fecharModal(id) {
      document.getElementById(id).classList.remove('ativo');
    }
var swiper = new Swiper(".mySwiper", {
 slidesPerView: 1, 
spaceBetween: 30,
loop: true,
pagination: {
el: ".swiper-pagination",
clickable: true,
},
navigation: {
  nextEl: ".swiper-button-next",
prevEl: ".swiper-button-prev",
},
breakpoints: {
// Tela > 768px: 2 slides
768: {
slidesPerView: 2,
spaceBetween: 20,
},
// Tela > 1024px: 3 slides
1024: {
slidesPerView: 3,
spaceBetween: 30,
},
}
});

 



 
