$(document).ready(function () {
  // 각 섹션의 위치값(세로스크롤 위치)
  const sectionYpos = [1082, 5700, 6600, 8800];

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
      // navLis.removeClass("focus-active");
      // // 클릭된 li 에 focus-active 추가하기
      // navLis.eq(index).addClass("focus-active");
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

  // -----------------------------------------------------
  // HTML 요소를 JavaScript 변수에 할당합니다.
  const quantityElement = document.getElementById("quantity");
  const priceElement = document.getElementById("price");
  const increaseButton = document.getElementById("increaseButton");
  const decreaseButton = document.getElementById("decreaseButton");

  // 초기 수량과 단가를 설정합니다.
  let quantity = 1;
  const unitPrice = 25500;

  // 화면에 초기 수량을 표시합니다.
  quantityElement.textContent = quantity;
  priceElement.textContent = formatPrice(quantity * unitPrice); // "원"을 추가

  // + 버튼을 클릭할 때 이벤트 리스너를 추가합니다.
  increaseButton.addEventListener("click", function () {
    // 수량을 증가시킵니다.
    quantity++;

    // 화면에 업데이트된 수량과 가격을 표시합니다.
    quantityElement.textContent = quantity;
    priceElement.textContent = formatPrice(quantity * unitPrice); // "원"을 추가
  });

  // - 버튼을 클릭할 때 이벤트 리스너를 추가합니다.
  decreaseButton.addEventListener("click", function () {
    // 수량을 감소시킵니다. 수량이 1보다 작아지지 않도록 확인합니다.
    if (quantity > 1) {
      quantity--;

      // 화면에 업데이트된 수량과 가격을 표시합니다.
      quantityElement.textContent = quantity;
      priceElement.textContent = formatPrice(quantity * unitPrice); // "원"을 추가
    }
  });

  // 숫자에 쉼표를 추가하고 "원"을 붙이는 함수
  function formatPrice(price) {
    return price.toLocaleString("ko-KR") + "원";
  }

  // -----------------------------------------------------------
  // 아이콘에 호버했을 때 이벤트 리스너 추가
  $(".we-class-info").hover(
    function () {
      // 호버 시에 보이도록 설정
      $(this).find(".we-class-info-text").css("display", "block");
    },
    function () {
      // 호버를 벗어났을 때 숨김
      $(this).find(".we-class-info-text").css("display", "none");
    }
  );

  // ------------------------------------------------------------
  // 클래스를 클릭했을때 포커스효과
  // 특별 클래스 div 요소에 클릭 이벤트 핸들러를 추가하여 포커스를 설정합니다.
  const specialClass = document.querySelector(".we-class");
  specialClass.addEventListener("click", () => {
    specialClass.classList.add("focused");
    // 개별 클래스 div에서 포커스 스타일을 제거합니다.
    const individualClass = document.querySelector(".me-class");
    individualClass.classList.remove("focused");
  });

  // 개별 클래스 div 요소에 클릭 이벤트 핸들러를 추가하여 포커스를 설정합니다.
  const individualClass = document.querySelector(".me-class");
  individualClass.addEventListener("click", () => {
    individualClass.classList.add("focused");
    // 특별 클래스 div에서 포커스 스타일을 제거합니다.
    const specialClass = document.querySelector(".we-class");
    specialClass.classList.remove("focused");
  });

  // ----------------------------------------------------------
  // 신청하기 버튼넘어가는 과정
  var applyButton = document.getElementById("applyButton");
  var items = document.querySelectorAll("#item");

  // 항목 클릭 시 상태 변경 및 버튼 활성화 여부 검사하는 함수
  function checkSelection() {
    var selectedCount = 0;

    items.forEach(function (item) {
      if (item.classList.contains("selected")) {
        selectedCount++;
      }
    });

    if (selectedCount === 2) {
      // 그 외의 경우 버튼 비활성화
      applyButton.disabled = false;
    } else {
      // 두개의 항목 선택했을 경우 활성화
      applyButton.disabled = true;
    }
  }

  // 각 항목(div) 클릭 시 상태를 변경하고 검사 함수 호출
  items.forEach(function (item) {
    item.addEventListener("click", function () {
      item.classList.toggle("selected");
      checkSelection();
    });
  });

  // 버튼을 클릭했을 때 신청 페이지로 이동
  applyButton.addEventListener("click", function () {
    window.location.href = "payment.html";
  });

  // -----------------------------------------------
});

// ------------------------------------------------------------
// 영상 클릭 시 로그인 창으로 안내
// function showAlert(event) {
//   // 알림 창 표시
//   alert("로그인 후 이용해주세요.");

//   // 이벤트 취소 (링크의 기본 동작 방지)
//   event.preventDefault();

//   // login.html로 이동
//   window.location.href = "login.html";
// }

// 대시보드 화면 표시
showInitialDashboard();
function showInitialDashboard() {
  var params = new URLSearchParams(window.location.search);
  var username = params.get("username");

  if (username) {
    document.getElementById("username-display").textContent = `${username}`;
  } else {
  }
}

// ------------------------------------------------------
//  준비물 selector
function showPreparation() {
  var selectElement = document.getElementById("preparation");
  var customDiv = document.getElementById("customDiv");

  var selectedOption = selectElement.options[selectElement.selectedIndex].text;

  // 선택한 옵션에 따라 커스텀 내용을 표시하거나 숨김
  if (selectedOption === "클래스를 도와줄 당신을 위한 뜨개질 키트") {
    customDiv.style.display = "block";
  } else {
    customDiv.style.display = "none";
  }
}
function showPreparation() {
  // 선택한 준비물 항목에 따라 보이기/감추기를 처리할 수 있습니다.
  const preparationSelect = document.getElementById("preparation");
  const customDiv = document.getElementById("customDiv");

  if (preparationSelect.value === "option") {
    customDiv.style.display = "none"; // 숨김
  } else {
    customDiv.style.display = "block"; // 표시
  }
}

// ----------------------------------------------
// X버튼클릭시 준비물 숨기기
function hidePreparation() {
  // X 버튼을 클릭하면 준비물 항목을 숨깁니다.
  const customDiv = document.getElementById("customDiv");
  customDiv.style.display = "none"; // 숨김
}
function hidePreparation() {
  // X 버튼을 클릭하면 준비물 항목을 숨깁니다.
  const customDiv = document.getElementById("customDiv");
  customDiv.style.display = "none"; // 숨김

  // 선택한 옵션 초기화
  const preparationSelect = document.getElementById("preparation");
  preparationSelect.selectedIndex = 0; // "준비물을 선택하세요"로 초기화
}

// ---------------------------------------------