window.sr = ScrollReveal( { reset: true });

sr.reveal('.animation', { duration: 3000 });

const buttonMobileMenuIcon = document.querySelector('.mobile-icon button');
const buttonMobileMenuItens = document.querySelector('.mobile-menu-itens');
const iconImg = document.querySelector('.mobile-icon button img');

buttonMobileMenuIcon.addEventListener('click', () => {
    if(buttonMobileMenuItens.classList.contains('open')) {
        buttonMobileMenuItens.classList.remove('open');
        iconImg.src = "img/menu_white_36dp.svg";
        
    } else {
        buttonMobileMenuItens.classList.add('open');
        iconImg.src = "img/close_white_36dp.svg";
    }
});