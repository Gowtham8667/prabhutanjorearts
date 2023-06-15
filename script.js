var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay:{
        delay:2500,
    },
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

/*img-zoom*/

$(function(){
    $(".xzoom, .xzoom-gallery").xzoom({
        zoomWidth:400,
        tint:"#333",
        Xoffset:15,
    });
});