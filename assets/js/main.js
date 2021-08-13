
//swiprer main
new Swiper(".swiper-photo", {
    slidesPerView: 'auto',
    spaceBetween: 0,
    clickable: true,
    navigation: {
        clickable: true,
        nextEl: ".nav-photo-next",
        prevEl: ".nav-photo-prev",
    },
});

//swiprer main
new Swiper(".swiper-infographic", {
    slidesPerView: 4,
    spaceBetween: 12,
    navigation: {
        nextEl: ".block-swiper-main-next",
        prevEl: ".block-swiper-main-prev",
    },
});

//swiprer main
new Swiper(".swiper-blog", {
    slidesPerView: 4,
    spaceBetween: 12,
    observer: true,
    observeParents: true,
    navigation: {
        nextEl: ".nav-blog-next",
        prevEl: ".nav-blog-prev",
    },
});
new Swiper(".swiper-main-2", {
    slidesPerView: 'auto',
    spaceBetween: 0,
    observer: true,
    observeParents: true,
    navigation: {
        nextEl: ".nav-main-2-next",
        prevEl: ".nav-main-2-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    },
});


//swiprer main
new Swiper(".swiper-event", {
    slidesPerView: 2,
    spaceBetween: 34,
    navigation: {
        nextEl: ".block-swiper-event-next",
        prevEl: ".block-swiper-event-prev",
    },
});
