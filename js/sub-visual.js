$(document).ready(function () {
  // jQuery 코드
  $(".fa-heart").click(function () {
    // 현재 하트 아이콘의 색상 가져오기
    const currentColor = $(this).css("color");
    if (currentColor === "rgb(255, 0, 0)") {
      // 현재 색상이 빨간색이면 클릭 시 색상 제거
      $(this).css("color", "");
      // 숫자 감소 애니메이션
      let currentCount = parseInt($(".heart-count").text());
      $({ count: currentCount }).animate(
        { count: currentCount - 1 },
        {
          duration: 1000, // 애니메이션 지속 시간 (1초)
          step: function () {
            $(".heart-count").text(Math.ceil(this.count));
          },
        }
      );
    } else {
      // 현재 색상이 빨간색이 아니면 클릭 시 색상을 빨간색으로 변경
      $(this).css("color", "red");
      // 숫자 증가 애니메이션
      let currentCount = parseInt($(".heart-count").text());
      $({ count: currentCount }).animate(
        { count: currentCount + 1 },
        {
          duration: 1000, // 애니메이션 지속 시간 (1초)
          step: function () {
            $(".heart-count").text(Math.ceil(this.count));
          },
        }
      );
    }
    // 하트 애니메이션 클래스 추가 및 제거
    $(this).addClass("heart-pulse");
    setTimeout(() => {
      $(this).removeClass("heart-pulse");
    }, 1000); // 애니메이션 지속 시간 (1초)
  });
});
