$(document).ready(function () {
  // HTML 요소를 JavaScript 변수에 할당합니다.
  const quantityElement = document.getElementById("md-quantity");
  const priceElement = document.getElementById("md-price");
  const increaseButton = document.getElementById("md-increaseButton");
  const decreaseButton = document.getElementById("md-decreaseButton");

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
  $(".md-we-class-info").hover(
    function () {
      // 호버 시에 보이도록 설정
      $(this).find(".md-we-class-info-text").css("display", "block");
    },
    function () {
      // 호버를 벗어났을 때 숨김
      $(this).find(".md-we-class-info-text").css("display", "none");
    }
  );

  // ------------------------------------------------------------

  // 클래스를 클릭했을때 포커스효과
  // 특별 클래스 div 요소에 클릭 이벤트 핸들러를 추가하여 포커스를 설정합니다.
  const specialClass = document.querySelector(".md-we-class");
  specialClass.addEventListener("click", () => {
    specialClass.classList.add("focused");
    // 개별 클래스 div에서 포커스 스타일을 제거합니다.
    const individualClass = document.querySelector(".md-me-class");
    individualClass.classList.remove("focused");
  });

  // 개별 클래스 div 요소에 클릭 이벤트 핸들러를 추가하여 포커스를 설정합니다.
  const individualClass = document.querySelector(".md-me-class");
  individualClass.addEventListener("click", () => {
    individualClass.classList.add("focused");
    // 특별 클래스 div에서 포커스 스타일을 제거합니다.
    const specialClass = document.querySelector(".md-we-class");
    specialClass.classList.remove("focused");
  });

  // ----------------------------------------------------------

  // 푸터의 위치를 확인하고 "fix-menu"를 숨기도록 JavaScript를 작성합니다.
  window.addEventListener("scroll", function () {
    var newFixMenu = document.querySelector(".new-fix-menu-box");
    var footer = document.querySelector(".footer");

    if (newFixMenu && footer) {
      var footerTop = footer.getBoundingClientRect().top;

      if (footerTop > window.innerHeight - 100) {
        // 푸터를 만나기 300px 전까지는 newFixMenu를 보여줍니다.
        newFixMenu.style.display = "flex";
      } else {
        // 푸터를 만나기 300px 이전에는 newFixMenu를 숨깁니다.
        newFixMenu.style.display = "none";
      }
    }
  });
});

// ------------------------------------------------

//  준비물 selector
function showPreparationAnother() {
  const preparationSelect = document.getElementById("md-preparation");
  const customDiv = document.getElementById("md-customDiv");

  if (preparationSelect.value === "md-option") {
    customDiv.style.display = "none"; // 숨김
  } else {
    customDiv.style.display = "block"; // 표시
  }
}

// X버튼클릭시 준비물 숨기기
function hidePreparationAnother() {
  // X 버튼을 클릭하면 준비물 항목을 숨깁니다.
  const customDiv = document.getElementById("md-customDiv");
  customDiv.style.display = "none"; // 숨김

  // 선택한 옵션 초기화
  const preparationSelect = document.getElementById("md-preparation");
  preparationSelect.selectedIndex = 0; // "준비물을 선택하세요"로 초기화
}

// -----------------------------------------------

// 화면 크기 변경 이벤트에 대한 이벤트 리스너 추가
window.addEventListener("resize", function () {
  var fixModal = document.getElementById("fix-modal");
  if (window.innerWidth > 1024) {
    fixModal.style.display = "none";
  }
});

// 초기 페이지 로드 시 모달 처리
window.addEventListener("load", function () {
  var fixModal = document.getElementById("fix-modal");
  if (window.innerWidth > 1024) {
    fixModal.style.display = "none";
  }
});
// 모달 열기
function fixopenModal() {
  var fixModal = document.getElementById("fix-modal");
  fixModal.style.display = "block";
}
// 모달 닫기
function fixcloseModal() {
  var fixModal = document.getElementById("fix-modal");
  fixModal.style.display = "none";
}

// 모달 외부를 클릭했을 때 모달 닫기
window.onclick = function (event) {
  var fixModal = document.getElementById("fix-modal");
  if (event.target == fixModal) {
    fixModal.style.display = "none";
  }
};
