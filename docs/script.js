// Inicializa o carrinho (pode ser um array que armazena os itens)
let carrinho = JSON.parse(localStorage.getItem('carrinho'));
if (!Array.isArray(carrinho)) {
    carrinho = []; // Se o valor não for um array, inicializa um array vazio
}

// Função para adicionar item ao carrinho
function adicionarAoCarrinho(event) {
    const button = event.target;
    const nome = button.getAttribute('data-nome');
    const preco = button.getAttribute('data-preco');

    // Verifica se os atributos existem e são válidos
    if (!nome || !preco || isNaN(preco)) {
        alert("Erro: Nome ou preço inválidos.");
        return;
    }

    const itemCarrinho = { nome, preco: parseFloat(preco) };

    // Adiciona o item ao carrinho
    carrinho.push(itemCarrinho);

    // Atualiza o localStorage com o carrinho atualizado
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
        slideIndex = 0; // Se o índice ultrapassar o número de slides, vai para o primeiro
    }
    if (slideIndex < 0) {
        slideIndex = slides.length - 1; // Se o índice for negativo, vai para o último
    }

    const offset = -slideIndex * 100; // Calcula o deslocamento para mostrar o slide correto
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

// Inicia o slider exibindo o primeiro slide
mostrarSlides();

// Eventos dos botões do slider
document.querySelector('.prev').addEventListener('click', () => moverSlide(-1));
document.querySelector('.next').addEventListener('click', () => moverSlide(1));
