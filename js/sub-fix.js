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
