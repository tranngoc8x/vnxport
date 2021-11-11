//swiprer main
new Swiper(".swiper-menu", {
    slidesPerView: 'auto',
    spaceBetween: 0,
    clickable: true,
    navigation: {
        clickable: true,
        nextEl: ".nav-menu-next",
        prevEl: ".nav-menu-prev",
    },
});
//swiprer potto
// swiprer main
new Swiper(".swiper-main-banner", {
    slidesPerView: 'auto',
    spaceBetween: 0,
    clickable: true,
    navigation: {
        clickable: true,
        nextEl: ".nav-menu-next",
        prevEl: ".nav-menu-prev",
    },
});
//swiprer potto

var x = document.getElementsByClassName("swiper-photo");

for (var i = 0; i < x.length; i++) {

    let el = x[i];

    let nx = el.getElementsByClassName("swiper-button-next")[0];
    let pr = el.getElementsByClassName("swiper-button-prev")[0];
    console.log(pr)

    new Swiper(el, {
        slidesPerView: 'auto',
        spaceBetween: 0,
        clickable: true,
        hashNavigation: {
            replaceState: true,
        },
        navigation: {
            clickable: true,

            nextEl: nx,
            prevEl: pr,
        },
    });
}


//swiprer main
new Swiper(".swiper-infographic", {
    slidesPerView: 4,
    spaceBetween: 12,
    navigation: {
        nextEl: ".block-swiper-main-next",
        prevEl: ".block-swiper-main-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 12,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 12,
        },
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
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 12,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 12,
        },
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
    slidesPerView: 3,
    spaceBetween: 34,
    navigation: {
        nextEl: ".block-swiper-event-next",
        prevEl: ".block-swiper-event-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 34,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 34,
        },
    },
});

$('.toggle-comment').on('click', function () {
    $('#comment-block').toggle()
})
$(".btn-reply-comment").on("click", function () {
    let id = $(this).data('id')
    $("#" + id).show()
})


$(".close-reply").on("click", function () {
    $(this).parent().parent().hide()
})
