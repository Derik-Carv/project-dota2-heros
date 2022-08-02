/*  avançar
1 - clica na seta avançançar para ir para o próximo card pegar o elemento html da seta avançar 
2 - identificar o clique do usuário na seta avançar
3 - fazer aparecer o prox card da lista
4 - buscar o cartão selecionado e esconder
*/

/*voltar
1 - clica na seta voltar para ir para o próximo card
pegar o elemento html da seta voltar
2 - identificar o clique do usuário na seta voltar
3 - fazer aparecer o prox card da lista
4 - buscar o cartão selecionado e esconder
*/
//
window.alert('Este conteúdo foi criado focado para a criação de um projeto para a MapaDevWeek.') //alerta ao abrir a página

const btAvancar = document.getElementById('bt-avancar');
const btVoltar = document.getElementById('bt-voltar')
const atributo = document.querySelectorAll('.card');
let cardNow = 0;

btAvancar.addEventListener('click', function(){
    if(cardNow === atributo.length - 1) return;

    const cardselect = document.querySelector('.select');
    cardselect.classList.remove('select')

    cardNow++;
    atributo[cardNow].classList.add('select')
});

btVoltar.addEventListener('click', function(){
    if(cardNow === 0) return;

    const cardselect = document.querySelector('.select');
    cardselect.classList.remove('select')

    cardNow--;
    atributo[cardNow].classList.add('select')

    
});