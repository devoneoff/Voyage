let btnToy1 = document.getElementById('toy1');
let btnToy2 = document.getElementById('toy2');
let btnToy3 = document.getElementById('toy3');
let btnToy4 = document.getElementById('toy4');
let btnToy5 = document.getElementById('toy5');
let btnToy6 = document.getElementById('toy6');

let valueToy = '';

const contactForm = document.querySelector('.contact');

btnToy1.addEventListener('click', () => {
    document.querySelector('#toy1 i').classList.toggle('bx-plus');
    document.querySelector('#toy1 i').classList.toggle('bx-check');
    setTimeout(() => {
        valueToy = 'Китти с клубничкой';
        document.getElementById('toy').value = valueToy;
        window.scrollTo(0, contactForm.offsetTop);
    }, 250);
});
btnToy2.addEventListener('click', () => {
    document.querySelector('#toy2 i').classList.toggle('bx-plus');
    document.querySelector('#toy2 i').classList.toggle('bx-check');
    setTimeout(() => {
        valueToy = 'Шпиц в кофточке';
        document.getElementById('toy').value = valueToy;
        window.scrollTo(0, contactForm.offsetTop);
    }, 250);
});
btnToy3.addEventListener('click', () => {
    document.querySelector('#toy3 i').classList.toggle('bx-plus');
    document.querySelector('#toy3 i').classList.toggle('bx-check');
    setTimeout(() => {
        valueToy = 'Котёнок в костюме акулы';
        document.getElementById('toy').value = valueToy;
        window.scrollTo(0, contactForm.offsetTop);
    }, 250);
});
btnToy4.addEventListener('click', () => {
    document.querySelector('#toy4 i').classList.toggle('bx-plus');
    document.querySelector('#toy4 i').classList.toggle('bx-check');
    setTimeout(() => {
        valueToy = 'Капибара - клубничка';
        document.getElementById('toy').value = valueToy;
        window.scrollTo(0, contactForm.offsetTop);
    }, 250);
});
btnToy5.addEventListener('click', () => {
    document.querySelector('#toy5 i').classList.toggle('bx-plus');
    document.querySelector('#toy5 i').classList.toggle('bx-check');
    setTimeout(() => {
        valueToy = 'Паучок';
        document.getElementById('toy').value = valueToy;
        window.scrollTo(0, contactForm.offsetTop);
    }, 250);
});
btnToy6.addEventListener('click', () => {
    document.querySelector('#toy6 i').classList.toggle('bx-plus');
    document.querySelector('#toy6 i').classList.toggle('bx-check');
    setTimeout(() => {
        valueToy = 'Пингвинчики';
        document.getElementById('toy').value = valueToy;
        window.scrollTo(0, contactForm.offsetTop);
    }, 250);
});

    

const btnSend = document.getElementById('btnSend');
btnSend.addEventListener('click', () => {
    event.preventDefault();
    window.scrollTo(0, contactForm.offsetTop);

    const nameUser = document.getElementById('name');
    const phoneUser = document.getElementById('phone');
    const toySelect = document.getElementById('toy');
    const agreement = document.getElementById('agree');
    let nameModal;
    let textModal;

    if (nameUser.value.trim() !== '' && phoneUser.value.trim() !== '' && toySelect.value.trim() !== '' && agreement.checked) {
        nameModal = 'Успешно!';
        textModal = 'Ваша заявка успешно отправлена. Мы скоро свяжемся с Вами!';
    }
    
    document.querySelector('.modal_title').innerHTML = nameModal;
    document.querySelector('.modal_text').innerHTML = textModal;
    
    document.querySelector('body').classList.add('bodyWithModal');
    document.querySelector('.modal').classList.add('active');
    
    return true;
});



function closeModal() {
        document.querySelector('body').classList.remove('bodyWithModal');
        document.querySelector('.modal').classList.remove('active');
        document.querySelector('form').reset();
}