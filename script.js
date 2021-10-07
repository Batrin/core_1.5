let brandList = document.querySelector('.repair__list');
let swiperBlock = document.querySelector('.mySwiper');
let showButton = document.querySelector('.repair__button');
let closeButton = document.querySelector('.repair__button--close');

function initSwiper() {
    brandList.classList.add('swiper-wrapper');
    swiperBlock.classList.add('swiper');
    const swiper = new Swiper('.swiper', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination',
        },
    });
}

showButton.onclick = function showMore() {
    swiperBlock.classList.add('show-more');
}

closeButton.onclick = function  closeList() {
    swiperBlock.classList.remove('show-more');
}

window.onload = function () {
    if (window.innerWidth <= 600) {
        initSwiper();
    }
}
