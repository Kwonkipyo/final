window.addEventListener("load", function () {
  const quantityElement = document.getElementById("md-quantity");
  const priceElement = document.getElementById("md-price");
  const increaseButton = document.getElementById("md-increaseButton");
  const decreaseButton = document.getElementById("md-decreaseButton");

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

  $(".md-we-class-info").hover(
    function () {
      $(this).find(".md-we-class-info-text").css("display", "block");
    },
    function () {
      $(this).find(".md-we-class-info-text").css("display", "none");
    }
  );

  // ------------------------------------------------------------

  const specialClass = document.querySelector(".md-we-class");
  specialClass.addEventListener("click", () => {
    specialClass.classList.add("focused");
    const individualClass = document.querySelector(".md-me-class");
    individualClass.classList.remove("focused");
  });

  const individualClass = document.querySelector(".md-me-class");
  individualClass.addEventListener("click", () => {
    individualClass.classList.add("focused");
    const specialClass = document.querySelector(".md-we-class");
    specialClass.classList.remove("focused");
  });

  // ----------------------------------------------------------
  
  // 하단 픽스메뉴 footer에 도착하면 사라지는 코드
  // window.addEventListener("scroll", function () {
  //   var newFixMenu = document.querySelector(".new-fix-menu-box");
  //   var footer = document.querySelector(".footer");

  //   if (newFixMenu && footer) {
  //     var footerTop = footer.getBoundingClientRect().top;

  //     if (footerTop > window.innerHeight - 100) {
  //       newFixMenu.style.display = "flex";
  //     } else {
  //       newFixMenu.style.display = "none";
  //     }
  //   }
  // });

  // ----------------------------------------------------------

  function setFocusOnClick() {
    var div1 = document.getElementById("md-weClass");
    var div2 = document.getElementById("md-meClass");

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
      document.getElementById("md-weClass").classList.contains("focused") ||
      document.getElementById("md-meClass").classList.contains("focused")
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

  var applyButton = document.getElementById("md-applyButton");
  applyButton.addEventListener("click", function () {
    navigateToPaymentPage();
    showInitialDashboard();
  });
});

// ------------------------제이쿼리----------------------------

function showPreparationAnother() {
  const preparationSelect = document.getElementById("md-preparation");
  const customDiv = document.getElementById("md-customDiv");

  if (preparationSelect.value === "md-option") {
    customDiv.style.display = "none";
  } else {
    customDiv.style.display = "block";
  }
}

function hidePreparationAnother() {
  const customDiv = document.getElementById("md-customDiv");
  customDiv.style.display = "none";

  const preparationSelect = document.getElementById("md-preparation");
  preparationSelect.selectedIndex = 0;
}

function openImageModal(clickedImg) {
  const enlargedImage = document.getElementById("enlarged-image");
  const imageModal = document.getElementById("image-modal");

  enlargedImage.src = clickedImg.getAttribute("data-src");
  imageModal.style.display = "block";
}

function closeImageModal() {
  const imageModal = document.getElementById("image-modal");
  imageModal.style.display = "none";
}

// -----------------------------------------------

window.addEventListener("resize", function () {
  var fixModal = document.getElementById("fix-modal");
  if (window.innerWidth > 1024) {
    fixModal.style.display = "none";
  }
});

window.addEventListener("load", function () {
  var fixModal = document.getElementById("fix-modal");
  if (window.innerWidth > 1024) {
    fixModal.style.display = "none";
  }
});

function fixopenModal() {
  var fixModal = document.getElementById("fix-modal");
  fixModal.style.display = "block";
}
function fixcloseModal() {
  var fixModal = document.getElementById("fix-modal");
  fixModal.style.display = "none";
}

window.onclick = function (event) {
  var fixModal = document.getElementById("fix-modal");
  if (event.target == fixModal) {
    fixModal.style.display = "none";
  }
};
