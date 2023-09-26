$(document).ready(function () {
  // 초기에는 fa-chevron-down 아이콘만 보이도록 설정
  $(".fa-chevron-up").hide();
  $(".header-catemenu").hide();
  // gnb-cate를 클릭했을 때 header-catemenu를 토글하여 보이고 사라지게 함
  $(".gnb-cate").click(function (e) {
    e.preventDefault();
    // 다른 gnb-cate의 밑줄을 제거하고 현재 클릭한 gnb-cate에 밑줄을 추가
    $(".gnb-cate").removeClass("active");
    $(this).toggleClass("active");
    $(".header-catemenu").slideToggle(300);

    // fa-chevron-down 및 fa-chevron-up 아이콘의 표시 여부를 제어
    $(this).find(".fa-chevron-down, .fa-chevron-up").toggle();
  });
  // catemenu-close를 클릭했을 때 header-catemenu를 숨김
  $(document).on("click", function (e) {
    const headerCatemenu = $(".header-catemenu");
    const gnbCate = $(".gnb-cate");
    if (!headerCatemenu.is(e.target) && headerCatemenu.has(e.target).length === 0
      && !gnbCate.is(e.target) && gnbCate.has(e.target).length === 0) {
      headerCatemenu.slideUp(300);
      gnbCate.removeClass("active"); // 모든 밑줄 제거
      $(".gnb-cate .fa-chevron-down").show(); // fa-chevron-down 아이콘 보이기
      $(".gnb-cate .fa-chevron-up").hide(); // fa-chevron-up 아이콘 숨기기
    }
  });
  // 헤더 스크롤 이벤트
  const header = $(".header");
  const headerTop = $(".header-top");
  const headerCatemenu = $(".header-catemenu");
  const userIcon = $(".fa-circle-user");

  // 스크롤 이벤트를 바인딩하기 전에 창 너비를 확인하는 조건 추가
  if ($(window).width() > 480) {
    // 480px보다 넓은 화면에 대해서만 스크롤 이벤트 리스너를 추가합니다
    $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
        header.css({
          "height": "50px",
          "box-shadow": "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
          "background-color": "#111"
        });
        headerTop.hide();
        userIcon.show();
      } else {
        header.css({
          "height": "auto",
          "box-shadow": "none",
          "background-color": "transparent"
        });
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
  }
  $("#inpt_search").on('focus', function () {
    $(this).parent('label').addClass('active');
  });
  
  $("#inpt_search").on('blur', function () {
    if($(this).val().length == 0)
      $(this).parent('label').removeClass('active');
  });
  // 페이지 새로고침할때마다 스크롤 제일 위로 이동하는 코드
  $(document).keydown(function(event) {
    if (event.which == 116) { // F5 키의 keyCode는 116입니다
        // event.preventDefault(); // 기본 동작을 중지합니다 (페이지 새로 고침을 막음)
        // $(window).scrollTop(0); // 스크롤을 페이지의 맨 위로 이동
    }
  });

  $('#mobile-menu').hide();

  // 모바일 메뉴 열기
  $('#toggle-menu').click(function() {
    $('#mobile-menu').slideToggle();
    $('body').toggleClass('menu-open');  // Toggle the class
  });

  // 모바일 메뉴 닫기
  $('#close-menu').click(function() {
    $('#mobile-menu').slideUp();
    $('body').removeClass('menu-open');  // Remove the class
  });

  $(".mb-cate-depth").slideUp(); // 처음에 숨겨두기
  
  $(".mb-cate-click").click(function(){
    $(".mb-cate-depth").slideToggle();
    isOpen = !isOpen;  // Toggle the state
  });
});