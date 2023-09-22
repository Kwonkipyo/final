window.addEventListener("load", function () {
    // Swiper 초기화
    var swiper = new Swiper(".sw-banner", {
        spaceBetween: 0,
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: true,
        },
        pagination: {
            el: ".banner .swiper-pagination",
            clickable: true,
        },
    });

    // 각 슬라이드 요소를 가져옴
    let $slides = document.querySelectorAll('.banner .swiper-slide');

    // 각 슬라이드를 클릭할 때 페이지 이동 처리
    $slides.forEach(function (slide, index) {
        slide.addEventListener("click", function () {
            // 각 슬라이드를 클릭할 때 다른 페이지로 이동하는 로직을 여기에 추가
            switch (index) {
            case 0:
                window.location.href = "detail.html"; // 첫 번째 슬라이드를 클릭하면 page1.html로 이동
                break;
            case 1:
                window.location.href = "detail.html"; // 두 번째 슬라이드를 클릭하면 page2.html로 이동
                break;
            case 2:
                window.location.href = "detail.html"; // 세 번째 슬라이드를 클릭하면 page3.html로 이동
                break;
            // 필요한 만큼 슬라이드에 대한 이동 로직을 추가할 수 있습니다.
            }
        });
    });

    // 마우스 오버 시 자동 재생 정지, 마우스 아웃 시 다시 재생
    $slides.forEach(function (slide) {
        slide.addEventListener("mouseover", function () {
            swiper.autoplay.stop();
        });
        slide.addEventListener("mouseout", function () {
            swiper.autoplay.start();
        });
    });
});