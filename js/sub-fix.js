window.addEventListener("load", function () {
  const quantityElement = document.getElementById("quantity");
  const priceElement = document.getElementById("price");
  const increaseButton = document.getElementById("increaseButton");
  const decreaseButton = document.getElementById("decreaseButton");

  let quantity = 1;
  const unitPrice = 25500;

  quantityElement.textContent = quantity;
  priceElement.textContent = formatPrice(quantity * unitPrice);

  increaseButton.addEventListener("click", function () {
    quantity++;
    quantityElement.textContent = quantity;
    priceElement.textContent = formatPrice(quantity * unitPrice);
  });

  decreaseButton.addEventListener("click", function () {
    if (quantity > 1) {
      quantity--;
      quantityElement.textContent = quantity;
      priceElement.textContent = formatPrice(quantity * unitPrice);
    }
  });

  function formatPrice(price) {
    return price.toLocaleString("ko-KR") + "원";
  }

  // -----------------------------------------------------------

  $(".we-class-info").hover(
    function () {
      $(this).find(".we-class-info-text").css("display", "block");
    },
    function () {
      $(this).find(".we-class-info-text").css("display", "none");
    }
  );

  // ------------------------------------------------------------

  const specialClass = document.querySelector(".we-class");
  specialClass.addEventListener("click", () => {
    specialClass.classList.add("focused");
    const individualClass = document.querySelector(".me-class");
    individualClass.classList.remove("focused");
  });

  const individualClass = document.querySelector(".me-class");
  individualClass.addEventListener("click", () => {
    individualClass.classList.add("focused");
    const specialClass = document.querySelector(".we-class");
    specialClass.classList.remove("focused");
  });

  // ----------------------------------------------------------

  var modal = document.getElementById("imageModal");
  modal.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });

  // ------------------------------------------------------------

  var button = document.getElementById("applyButton");
  button.addEventListener("click", function () {
    window.location.href = "payment.html";
  });

  // ------------클래스 신청하기 버튼 클릭 시 효과--------------------

  // 대시보드 버튼 엘리먼트 가져오기
  var dashboardButton = document.getElementById("applyButton");

  // 버튼 클릭 이벤트 리스너 추가
  dashboardButton.addEventListener("click", function () {
    showInitialDashboard();
  });

  // 대시보드 화면 표시
  function showInitialDashboard() {
    // localStorage에서 사용자 이름 가져오기
    var usernick = localStorage.getItem("usernick");

    if (usernick) {
      document.getElementById("boardWriter").textContent = `${usernick}`;
    } else {
      alert("로그인 후 이용해주세요.");
      window.location.href = "login.html";
    }
  }
  
});

// -------------------------제이쿼리-----------------------------

function showPreparation() {
  const preparationSelect = document.getElementById("preparation");
  const customDiv = document.getElementById("customDiv");

  if (preparationSelect.value === "option") {
    customDiv.style.display = "none";
  } else {
    customDiv.style.display = "block";
  }
}
function imgOpenModal(imgElement) {
  var modal = document.getElementById("imageModal");
  var modalImg = document.getElementById("modalImage");
  modal.style.display = "block";
  modalImg.src = imgElement.src;
}

function imgCloseModal() {
  var modal = document.getElementById("imageModal");
  modal.style.display = "none";
}

// ----------------------------------------------

function hidePreparation() {
  const customDiv = document.getElementById("customDiv");
  customDiv.style.display = "none";

  const preparationSelect = document.getElementById("preparation");
  preparationSelect.selectedIndex = 0;
}
