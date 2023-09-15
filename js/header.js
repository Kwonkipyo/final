$(document).ready(function() {
    // 초기에는 fa-chevron-down 아이콘만 보이도록 설정
    $(".fa-chevron-up").hide();
    $(".header-catemenu").hide();
    // gnb-cate를 클릭했을 때 header-catemenu를 토글하여 보이고 사라지게 함
    $(".gnb-cate").click(function(e) {
      e.preventDefault();
      // 다른 gnb-cate의 밑줄을 제거하고 현재 클릭한 gnb-cate에 밑줄을 추가
      $(".gnb-cate").removeClass("active");
      $(this).toggleClass("active");
      $(".header-catemenu").slideToggle(300);
      
      // fa-chevron-down 및 fa-chevron-up 아이콘의 표시 여부를 제어
      $(this).find(".fa-chevron-down, .fa-chevron-up").toggle();
    });
  
    // catemenu-close를 클릭했을 때 header-catemenu를 숨김
    $(".catemenu-close a").click(function(e) {
      e.preventDefault();
      $(".gnb-cate").removeClass("active"); // 모든 밑줄 제거
      $(".header-catemenu").slideUp(300);
      // 모든 gnb-cate의 fa-chevron-down 아이콘을 보이게 하고 fa-chevron-up 아이콘을 숨김
      $(".gnb-cate .fa-chevron-down").show();
      $(".gnb-cate .fa-chevron-up").hide();
    });
    // 헤더 스크롤 이벤트
    const header = $(".header");
    const headerTop = $(".header-top");
    const headerCatemenu = $(".header-catemenu");
    const userIcon = $(".fa-circle-user");

    // 스크롤 이벤트 리스너 추가
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            // 스크롤 위치가 50px 이상인 경우
            header.css("height", "50px");
            headerTop.hide();
            userIcon.show();
        } else {
            // 스크롤 위치가 50px 미만인 경우
            header.css("height", "auto");
            headerTop.show();
            userIcon.hide();
        }

        // header-catemenu 위치 조정
        const headerHeight = header.height();
        if ($(this).scrollTop() > headerHeight) {
            headerCatemenu.addClass("sticky");
        } else {
            headerCatemenu.removeClass("sticky");
        }
    });    
    // 헤더 검색창 js
       // 검색 아이콘과 검색창 요소 선택
       var searchIcon = $('#search-icon');
       var searchContainer = $('#search-container');
       var closeSearchIcon = $('#close-search');
   
       // 검색 아이콘 클릭 이벤트 핸들러 추가
       searchIcon.click(function () {
           // 검색창을 나타나게 하고, close-search 아이콘을 보이게 함
           searchContainer.show();
           closeSearchIcon.show();
       });
   
       // close-search 아이콘 클릭 이벤트 핸들러 추가
       closeSearchIcon.click(function () {
           // 검색창을 숨기고, close-search 아이콘을 숨김
           searchContainer.hide();
           closeSearchIcon.hide();
       });
       
       // 페이지 로드 시 검색창과 close-search 아이콘 숨기기
       searchContainer.hide();
       closeSearchIcon.hide();
  });