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

  // ---------------------------------------------------------
  const fixMenu = document.querySelector(".fix-menu");
  let lastScrollY = 0;

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    if (scrollY > lastScrollY) {
      // 스크롤 다운 중일 때는 항상 숨김
      fixMenu.style.display = "none";
    } else {
      // 스크롤 업 중일 때는 브라우저 창 크기에 따라 결정
      if (window.innerWidth <= 1024) {
        fixMenu.style.display = "none";
      } else {
        fixMenu.style.display = "block";
      }
    }
    lastScrollY = scrollY;
  });

  // 창 크기 변경 이벤트를 처리하여 창 크기에 따라 초기 설정을 변경합니다.
  window.addEventListener("resize", () => {
    if (window.innerWidth <= 1024) {
      fixMenu.style.display = "none";
    } else {
      fixMenu.style.display = "block";
    }
  });
  // 페이지 로드 시 초기 설정
  window.addEventListener("load", () => {
    if (window.innerWidth <= 1024) {
      fixMenu.style.display = "none";
    }
  });
  // ------------클래스 신청하기 버튼 클릭 시 효과--------------------

  function setFocusOnClick() {
    var div1 = document.getElementById("weClass");
    var div2 = document.getElementById("meClass");

    div1.addEventListener("click", function () {
      div1.focus();
      div1.classList.add("focused");
      div2.classList.remove("focused");
    });

    div2.addEventListener("click", function () {
      div2.focus();
      div2.classList.add("focused");
      div1.classList.remove("focused");
    });
  }

  function navigateToPaymentPage() {
    if (
      document.getElementById("weClass").classList.contains("focused") ||
      document.getElementById("meClass").classList.contains("focused")
    ) {
      window.location.href = "payment.html";
    } else {
      alert("수강권과 준비물을 선택해 주세요.");
    }
  }

  function showInitialDashboard() {
    var usernick = localStorage.getItem("usernick");

    if (usernick) {
      document.getElementById("boardWriter").textContent = `${usernick}`;
    } else {
      alert("로그인 후 이용해 주세요.");
      window.location.href = "login.html";
    }
  }

  setFocusOnClick();

  var applyButton = document.getElementById("applyButton");
  applyButton.addEventListener("click", function () {
    navigateToPaymentPage();
    showInitialDashboard();
  });
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
