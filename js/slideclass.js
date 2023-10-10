window.addEventListener("load", function(){
    // 콤마 기능
    function priceToString(price) {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    // data.json을 연결.
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(event){
        const req = event.target;
        if(req.readyState === XMLHttpRequest.DONE){
            const str = req.response;
            // 글자로 온 데이터를 객체로 변환
            // 글자가 json 규칙대로 만들어진 문자열.
            // 그러므로 json 글자를 객체로 변환해서 활용한다.
            let obj = JSON.parse(str);
    
            BEST_CLASS = obj.bestclass;
            AI_CLASS = obj.aiclass;
            NEW_CLASS = obj.newclass;
            showBestClass(); // 공동구매 인기 클래스 화면에 배치
            showAiClass(); // 맞춤 클래스 화면에 배치
            showNewClass(); // 신규 클래스 화면에 배치
        }
    }
    // 자료 호출
    xhttp.open("GET", "data.json")
    // 웹브라우저 기능 실행 할 수 있도록 요청
    xhttp.send();
    
    let BEST_CLASS;
    let AI_CLASS;
    let NEW_CLASS;
    let bestClassTag = document.getElementById("data-bestclass");
    let aiClassTag = document.getElementById("data-aiclass");
    let newClassTag = document.getElementById("data-newclass");
    
    
    // 공동구매 인기 클래스 화면 출력 기능
    function showBestClass(){
        let html = `
        <div class="swiper sw-bestclass">
        <div class="swiper-wrapper">
        `;
        
        BEST_CLASS.forEach(function(item){
            let tag = `
            <div class="swiper-slide class-slide">
                <p class="class-txt-top class-count">
                    <i class="fa-solid fa-bullhorn"></i>
                    <span>${item.count}</span>건이 진행되었어요!
                </p>
                <div class="class-ranking">${item.ranking}</div>
                <a href="${item.link}" class="class-box" style="background-image: url('images/${item.pic}')">
                    <span class="class-type ${item.class}">${item.tag}</span>
                    <div class="class-txt">
                        <!-- 제품정보 -->
                        <p class="class-info">${item.name}</p>
                        <!-- 제품가격 -->
                        <div class="class-txt-bottom">
                            <span class="class-teacher">${item.teacher}</span>
                            <p class="class-price">~ ${priceToString(item.price)}원</p>
                        </div>
                    </div>
                </a>
            </div>
            `;
            html += tag;
        });
        html += `
        </div>
        </div>
        `;
        // 공동구매 인기 클래스 Swiper
        bestClassTag.innerHTML = html;
        var swiper = new Swiper(".sw-bestclass", {
            slidesPerView: 'auto',
            speed: 10000,
            spaceBetween: 130,
            freeMode: true,
            autoplay: {     //자동슬라이드 (false-비활성화)
                delay: 0, // 시간 설정
                disableOnInteraction: false, // false-스와이프 후 자동 재생
            },
            loop : true,   // 슬라이드 반복 여부
            loopAdditionalSlides : 1,
            centeredSlides: true
        });
        // 슬라이드 호버시 일시정지
        let $slides = document.querySelectorAll('.bestclass .class-slide');
            for (let i of $slides) {
            i.addEventListener('mouseover', function(){
                swiper.autoplay.stop();
            });
            i.addEventListener('mouseout', function(){
                swiper.autoplay.start();
            });
            i.addEventListener('click', function(){
                swiper.autoplay.start();
            });
        }
    }
    
    // 맞춤 클래스 화면 출력 기능
    function showAiClass(){
        let html = `
        <div class="swiper sw-aiclass">
        <div class="swiper-wrapper">
        `;
        
        AI_CLASS.forEach(function(item){
            let tag = `
            <div class="swiper-slide class-slide">
                <p class="class-txt-top class-grade">
                    !평점이 <span>${item.grade}</span>점이에요
                    <i class="fa-solid fa-bullhorn"></i>
                </p>
                <a href="${item.link}" class="class-box" style="background-image: url('images/${item.pic}')">
                    <span class="class-type ${item.class}">${item.tag}</span>
                    <div class="class-txt">
                        <!-- 제품정보 -->
                        <p class="class-info">${item.name}</p>
                        <!-- 제품가격 -->
                        <div class="class-txt-bottom">
                            <span class="class-teacher">${item.teacher}</span>
                            <p class="class-price">${priceToString(item.price)}원&nbsp;~</p>
                        </div>
                    </div>
                </a>
            </div>
            `;
            html += tag;
        });
        html += `
        </div>
        </div>
        `;
        // 맞춤 클래스 Swiper
        aiClassTag.innerHTML = html;
        var swiper = new Swiper(".sw-aiclass", {
            slidesPerView: 'auto',
            speed: 10000,
            spaceBetween: 50,
            freeMode: true,
            autoplay: {     //자동슬라이드 (false-비활성화)
                delay: 0, // 시간 설정
                disableOnInteraction: false, // false-스와이프 후 자동 재생
            },
            loop : true,   // 슬라이드 반복 여부
            loopAdditionalSlides : 1,
            centeredSlides: true
        });
        // 슬라이드 호버시 일시정지
        let $slides = document.querySelectorAll('.aiclass .class-slide');
            for (let i of $slides) {
            i.addEventListener('mouseover', function(){
                swiper.autoplay.stop();
            });
            i.addEventListener('mouseout', function(){
                swiper.autoplay.start();
            });
            i.addEventListener('click', function(){
                swiper.autoplay.start();
            });
        }
    }
    
    // 신규 클래스 화면 출력 기능
    function showNewClass(){
        let html = `
        <div class="swiper sw-newclass">
        <div class="swiper-wrapper">
        `;
        
        NEW_CLASS.forEach(function(item){
            let tag = `
            <div class="swiper-slide class-slide">
                <p class="class-txt-top class-new">
                    <i class="fa-solid fa-bullhorn"></i>
                    <span>${item.date}</span> 오픈했어요!
                </p>
                <a href="${item.link}" class="class-box" style="background-image: url('images/${item.pic}')">
                    <span class="class-type ${item.class}">${item.tag}</span>
                    <div class="class-txt">
                        <!-- 제품정보 -->
                        <p class="class-info">${item.name}</p>
                        <!-- 제품가격 -->
                        <div class="class-txt-bottom">
                            <span class="class-teacher">${item.teacher}</span>
                            <p class="class-price">~ ${priceToString(item.price)}원</p>
                        </div>
                    </div>
                </a>
            </div>
            `;
            html += tag;
        });
        html += `
        </div>
        </div>
        `;
        // 신규 클래스 Swiper
        newClassTag.innerHTML = html;
        var swiper = new Swiper(".sw-newclass", {
            slidesPerView: 'auto',
            speed: 10000,
            spaceBetween: 50,
            freeMode: true,
            autoplay: {     //자동슬라이드 (false-비활성화)
                delay: 0, // 시간 설정
                disableOnInteraction: false, // false-스와이프 후 자동 재생
            },
            loop : true,   // 슬라이드 반복 여부
            loopAdditionalSlides : 1,
            centeredSlides: true
        });
        // 슬라이드 호버시 일시정지
        let $slides = document.querySelectorAll('.newclass .class-slide');
            for (let i of $slides) {
            i.addEventListener('mouseover', function(){
                swiper.autoplay.stop();
            });
            i.addEventListener('mouseout', function(){
                swiper.autoplay.start();
            });
            i.addEventListener('click', function(){
                swiper.autoplay.start();
            });
        }
    }
    });