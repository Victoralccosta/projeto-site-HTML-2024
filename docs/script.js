 // Inicializa o carrinho (pode ser um array que armazena os itens)
 let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

 // Função para adicionar item ao carrinho
 function adicionarAoCarrinho(event) {
     const button = event.target;
     const nome = button.getAttribute('data-nome');
     const preco = button.getAttribute('data-preco');

     const itemCarrinho = { nome, preco: parseFloat(preco) };

     // Adiciona o item ao carrinho
     carrinho.push(itemCarrinho);

     // Atualiza o localStorage
     localStorage.setItem('carrinho', JSON.stringify(carrinho));

     // Exibe uma mensagem de confirmação
     alert(`${nome} foi adicionado ao seu carrinho!`);
 }

 // Adiciona evento de clique nos botões "Pedir Agora"
 const botoesAdicionar = document.querySelectorAll('.pedir');
 botoesAdicionar.forEach(button => {
     button.addEventListener('click', adicionarAoCarrinho);
 });

 // Lógica do Slider
 let slideIndex = 0;

 function moverSlide(n) {
     slideIndex += n;
     mostrarSlides();
 }

 function mostrarSlides() {
     const slides = document.querySelectorAll('.slide');
     if (slideIndex >= slides.length) {
         slideIndex = 0;
     }
     if (slideIndex < 0) {
         slideIndex = slides.length - 1;
     }

     const offset = -slideIndex * 100;
     document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
 }

 // Inicia o slider exibindo o primeiro slide
 mostrarSlides();

 // Eventos dos botões do slider
 document.querySelector('.prev').addEventListener('click', () => moverSlide(-1));
 document.querySelector('.next').addEventListener('click', () => moverSlide(1));
</script>
