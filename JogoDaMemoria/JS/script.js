const grid = document.querySelector('.grid');
const timer = document.querySelector(".timer")
const personagens = [
    'imagem1F',
    'imagem2F',
    'imagem3F',
    'imagem4F',
    'imagem5F',
    'imagem6F'

];

const createElement= (tag, className) =>{
    const element = document.createElement(tag);
    element.className = className;
    return element;
}
let primeiraCarta = "";
let segundaCarta = "";
const verificaFim = () =>{
    const cartasAcerto = document.querySelectorAll('.cartaAcerto');
    if(cartasAcerto.length == 12){
        setTimeout(() => {
            clearInterval(this.loop);
            alert(`você terminou em : ${timer.innerHTML}  segundos `);
        }, 200);   
        
    }
} 
const verificaCarta  = () =>{
    const primeiroPersonagem = primeiraCarta.getAttribute('dataPersonagem');
    const segundoPersonagem = segundaCarta.getAttribute('dataPersonagem');

    if(primeiroPersonagem == segundoPersonagem){

            primeiraCarta.firstChild.classList.add('cartaAcerto');
            segundaCarta.firstChild.classList.add('cartaAcerto');

            primeiraCarta = "";
            segundaCarta = "";

            verificaFim();
        }else{
        setTimeout(() => {

            primeiraCarta.classList.remove('revelaCarta');
            segundaCarta.classList.remove('revelaCarta');

            primeiraCarta = "";
            segundaCarta = "";
        
        }, 500);   
    }

}
const revelaCarta = ({ target }) =>{
    if(target.parentNode.className.includes('revelaCarta')){
        return;
    }
   
    if(primeiraCarta == ""){
        target.parentNode.classList.add('revelaCarta');
        primeiraCarta = target.parentNode;
    }else if(segundaCarta == ""){
        target.parentNode.classList.add('revelaCarta');
        segundaCarta = target.parentNode;

        verificaCarta();
    }
}
const criaCarta = (personagem) =>{
    const card = createElement('div', "card");
    const front = createElement('div', "face front");
    const back = createElement('div', "face back");   

    front.style.backgroundImage = `url('../img/${personagem}.jpg')`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revelaCarta);
    card.setAttribute('dataPersonagem', personagem)

    return card;
}
const loadGame = () =>{

    const duplicaPersonagems = [ ...personagens, ...personagens ];

    const embaralharCartas = duplicaPersonagems.sort(() => Math.random()-0.5);

    embaralharCartas.forEach((personagem) => {
        const card = criaCarta(personagem);
        grid.appendChild(card);
    })
}
const contador = () =>{
    this.loop = setInterval(() =>{
        const tempoAtual = +timer.innerHTML;
        timer.innerHTML = tempoAtual + 1;
    },1000)
}
contador();
loadGame();
