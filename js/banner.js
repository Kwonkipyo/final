window.addEventListener("load", function(){
    var swiper = new Swiper(".sw-banner", {
        spaceBetween: 0,
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 10000000,
            disableOnInteraction: true,
        },
        pagination: {
            el: ".banner .swiper-pagination",
            clickable: true,
        },
    });
    
    let $slides = document.querySelectorAll('.banner .swiper-slide');
for (let i of $slides) {
    i.addEventListener('mouseover', function(){
        swiper.autoplay.stop();
    });
    i.addEventListener('mouseout', function(){
        swiper.autoplay.start();
    });
}
});
