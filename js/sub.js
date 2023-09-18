$(document).ready(function () {
  // 각 섹션의 위치값(세로스크롤 위치)
  const sectionYpos = [1020, 5533, 6433, 8643];

  // 클래스 title-menu 의 li 를 찾아라
  // 저장한다. 재활용하기 위해서
  const navLis = $(".title-menu ul li");

  // li 에 a 태그를 클릭을 해서 스크롤을 이동
  const navLisA = $(".title-menu ul li a");
  // 클릭 기능 구현
  $.each(navLisA, function (index, item) {
    // item 은 a 태그를 말합니다.
    // item 을 클릭을 할 겁니다.
    // item 은 html 태그 (jQuery 용도)
    $(this).click(function (event) {
      // a 태그의 href 막기
      event.preventDefault();
      // li 의 모든 클래스 제거
      navLis.removeClass("focus-active");
      // 클릭된 li 에 focus-active 추가하기
      navLis.eq(index).addClass("focus-active");
      // 2. 클릭하면 스크롤바가 움직인다.
      $("html, body").animate(
        {
          scrollTop: sectionYpos[index],
        },
        "slow"
      );
    });
  });
  // 페이지 로드 시 첫 번째 메뉴 아이템에 포커스 설정
  navLis.eq(0).addClass("focus-active");

// ---------------------------------------------------

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

  // --------------------------------------------------------------

  // 아이콘 색 변경
  const shareIcon = document.getElementById("share-icon");

  shareIcon.addEventListener("click", function () {
    // 색상 변경
    const newColor = "black"; // 원하는 색상으로 변경하세요
    shareIcon.style.color = newColor;

    // 일정 시간(예: 1초) 후에 다시 기본 색상으로 변경
    setTimeout(function () {
      const defaultColor = ""; // 기본 색상으로 변경하세요
      shareIcon.style.color = defaultColor;
    }, 400); // 1000 밀리초(1초) 후에 색상을 기본 색상으로 변경
  });
  const shareIcon2 = document.getElementById("share-icon2");

  shareIcon2.addEventListener("click", function () {
    // 색상 변경
    const newColor = "black"; // 원하는 색상으로 변경하세요
    shareIcon2.style.color = newColor;

    // 일정 시간(예: 1초) 후에 다시 기본 색상으로 변경
    setTimeout(function () {
      const defaultColor = ""; // 기본 색상으로 변경하세요
      shareIcon2.style.color = defaultColor;
    }, 400); // 1000 밀리초(1초) 후에 색상을 기본 색상으로 변경
  });
});
