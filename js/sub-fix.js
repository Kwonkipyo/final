$(document).ready(function () {
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

  // 모달 외부를 클릭했을 때 모달 닫기
  var modal = document.getElementById("imageModal");
  modal.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
});

// -------------------------제이쿼리-----------------------------

//  준비물 selector
function showPreparation() {
  const preparationSelect = document.getElementById("preparation");
  const customDiv = document.getElementById("customDiv");

  if (preparationSelect.value === "option") {
    customDiv.style.display = "none"; // 숨김
  } else {
    customDiv.style.display = "block"; // 표시
  }
}
// 모달 열기
function imgOpenModal(imgElement) {
  var modal = document.getElementById("imageModal");
  var modalImg = document.getElementById("modalImage");
  modal.style.display = "block";
  modalImg.src = imgElement.src;
}

// 모달 닫기
function imgCloseModal() {
  var modal = document.getElementById("imageModal");
  modal.style.display = "none";
}

// ----------------------------------------------

// X버튼클릭시 준비물 숨기기
function hidePreparation() {
  // X 버튼을 클릭하면 준비물 항목을 숨깁니다.
  const customDiv = document.getElementById("customDiv");
  customDiv.style.display = "none"; // 숨김

  // 선택한 옵션 초기화
  const preparationSelect = document.getElementById("preparation");
  preparationSelect.selectedIndex = 0; // "준비물을 선택하세요"로 초기화
}
