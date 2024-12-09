function handleMouseEnter() {
    this.classList.add('s-card--hovered');
    document.body.id = `${this.id}-hovered`;
}

function handleMouseLeave() {
    this.classList.remove('s-card--hovered');
    document.body.id = '';
}

function addEventListenersToCards() {
    const cardElements = document.getElementsByClassName('s-card');

    for (let i = 0; i < cardElements.length; i++) {
        const card = cardElements[i];
        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);
    }
}

document.addEventListener("DOMContentLoaded", addEventListenersToCards, false);
// espera o conteúdo da página carregar para chamar a função

function selectCarouselItem(selectedButtonElement) {

    // pega o id de cada car de homem aranha
    const selectedItem = selectedButtonElement.id;

    // pega as informações presentes dentro da classe '.s-cards-carousel'
    // a div 'carousel' com todos os cards
    const carousel = document.querySelector('.s-cards-carousel');

    // se aprofunda nas informações anteriores e coleta o 'style>transform' presente na classe 
    // ou seja, translateZ(-40vw) rotateY(0deg)
    const transform = carousel.style.transform;

    // coleta apenas o rotateY do transform, através de uma expressão regular
    const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i); //expressão regular

    // aqui vai ser calculado quantos graus o card vai girar,
    const rotateYDeg = -120 * (Number(selectedItem) - 1);
    
    // vai trocar o valor presente no rotateY do card selecionado pelo novo 'deg/grau' calculado acima
    const newTransform = transform.replace(rotateY[0],`rotateY(${rotateYDeg}deg)`);
    
    // atribui o novo valor no card selecionado, fazendo assim que o efeito de 'girar' 
    carousel.style.transform = newTransform;

    // faz com que o botão escolhido (entre 01,02,03) fique com um efeito de 'selecionado' alterando as cores
    const activeButtonElement = document.querySelector('.s-controller__button--active');
    activeButtonElement.classList.remove('s-controller__button--active');
    selectedButtonElement.classList.add('s-controller__button--active');
}