import './assets/scss/all.scss';
// bootstrap js
import 'bootstrap';


// 引入 Swiper 核心
import Swiper from 'swiper';
// 引入 Navigation 和 Pagination 模組
import { Navigation, Pagination } from 'swiper/modules';

// 引入 Swiper 的基本樣式
import 'swiper/css';
// 引入 Navigation 和 Pagination 的樣式
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

const cardSwiper = new Swiper('.cardSwiper', {
    // 配置 Swiper 使用的模組
    modules: [Navigation, Pagination],
    // 其他 Swiper 配
    slidesPerView: 1,
    spaceBetween: 24,
    slidesPerGroup: 1,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },

    navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
    },
    breakpoints: {
        991: {
            slidesPerView: 2,
            spaceBetween: 48,
        },
    },
});

const imgGoupSwiper = new Swiper('.imgGoupSwiper', {
    // 配置 Swiper 使用的模組
    modules: [Navigation, Pagination],
    // 其他 Swiper 配
    slidesPerView: 1,
    spaceBetween: 0,
    slidesPerGroup: 1,
    loop: true,
    breakpoints: {
        991: {
            slidesPerView: 4,
            spaceBetween: 4,
        },
    },
});

const tabsSwiper = new Swiper('.tabsSwiper', {
    modules: [Pagination],
    slidesPerView: 1.1,
    spaceBetween: 24,
    slidesPerGroup: 1,
    loop: true,
});


const cardStyleSwiper = new Swiper('.cardStyleSwiper', {
    modules: [Pagination],
    slidesPerView: 1.1,
    spaceBetween: 24,
    slidesPerGroup: 1,
    loop: true,
});

const readCardSwiper = new Swiper('.readCardSwiper', {
    modules: [Pagination],
    slidesPerView: 1.1,
    spaceBetween: 24,
    slidesPerGroup: 1,
    loop: true,
});





console.log('hi');