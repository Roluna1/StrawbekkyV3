const burgerList = document.querySelector<HTMLImageElement>('.hamburger-list');
const burgerShowList = document.querySelector<HTMLDivElement>('.top-section-link-phone');
if (burgerList && burgerShowList) {
  burgerList.addEventListener('click', () => {
    if (burgerList.classList.contains('close')) {
        burgerList.classList.remove('close');
        burgerList.src = './src/assets/img/hamburger.png';
        burgerShowList.style.display = 'none'
    } else {
        burgerList.classList.add('close')
        burgerList.src = './src/assets/img/close.png';
        burgerShowList.style.display = 'flex'
    };
  });
}
