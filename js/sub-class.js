$(document).ready(function () {
  // 클래스 title-menu 의 li 를 찾아라
  const navLis = $(".title-menu ul li");

  // 클래스 title-menu 의 li a 를 찾아라
  const navLisA = $(".title-menu ul li a");

  // 클릭 기능 구현
  navLisA.click(function (event) {
    event.preventDefault();
    const targetId = $(this).attr("href"); // 클릭한 메뉴 항목의 href 값을 가져옴
    const targetPosition = $(targetId).offset().top; // 해당 div의 상단 위치를 가져옴
    $("html, body").animate(
      {
        scrollTop: targetPosition,
      },
      "slow"
    );
  });
  // 페이지 로드 시 첫 번째 메뉴 아이템에 포커스 설정
  navLis.eq(0).addClass("focus-active");
});
