window.alert('Este conteúdo foi criado focado para a criação de um projeto para a MapaDevWeek.') //alerta ao abrir a página

const btAvancar = document.getElementById('bt-avancar');
const btVoltar = document.getElementById('bt-voltar')
const atributo = document.querySelectorAll('.card');
let cardNow = 0;

function esconderCard() {
    const cardselect = document.querySelector('.select');
    cardselect.classList.remove('select')
}
function mostrarCard() {
    atributo[cardNow].classList.add('select')
}

btAvancar.addEventListener('click', function(){
    if(cardNow === atributo.length - 1) return;

    esconderCard();

    cardNow++;
    mostrarCard();
});

btVoltar.addEventListener('click', function(){
    if(cardNow === 0) return;

    esconderCard();

    cardNow--;
    mostrarCard(); 
});