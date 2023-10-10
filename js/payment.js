window.addEventListener("load", function () {
  showInitialDashboard();

  // 대시보드 화면 표시
  function showInitialDashboard() {
    // localStorage에서 사용자 이름 가져오기
    var username = localStorage.getItem("username");
    var useremail = localStorage.getItem("useremail");

    if (username && useremail) {
      document.getElementById("username").value = `${username}`;
      document.getElementById("useremail").value = `${useremail}`;
    } else {
    }
  }

  // ====================
  // #searchButton 버튼을 클릭했을 때의 이벤트 리스너 추가
  document
    .querySelector(".dropdown-selected")
    .addEventListener("click", function () {
      const dropdownList = document.querySelector(".dropdown-list");
      const dropdownSelectedI = document.querySelector(".dropdown-selected i");

      dropdownList.style.display = "block";
      dropdownSelectedI.classList.add("active");

      document.addEventListener("click", function (event) {
        const dropdownList = document.querySelector(".dropdown-list");
        const dropdownSelected = document.querySelector(".dropdown-selected");

        if (event.target !== dropdownSelected) {
          dropdownList.style.display = "none";
          dropdownSelectedI.classList.remove("active");
        }
      });
    });

  // .coupon-dropdown-list-item를 클릭했을 때 이벤트 핸들러 추가
  const couponListItems = document.querySelectorAll(
    ".coupon-dropdown-list-item"
  );

  couponListItems.forEach(function (item) {
    item.addEventListener("click", function () {
      // 선택한 아이템의 값을 가져와서 dropdown-selected p에 적용
      const selectedTitle = item.querySelector(
        ".coupon-dropdown-title"
      ).textContent;
      document.querySelector(".dropdown-selected p").textContent =
        selectedTitle;
    });
  });

  const dropdownListItem = document.querySelector(".dropdown-list-item");
  dropdownListItem.addEventListener("click", function () {
    document.querySelector(".dropdown-selected p").textContent =
      "사용가능 쿠폰 ";
    let addSpan = document.createElement("span");
    addSpan.innerHTML = "3장";
    document.querySelector(".dropdown-selected p").appendChild(addSpan);
  });

  // ====================
  const paymentWrap = document.querySelector(".payment-wrap");
  paymentWrap.addEventListener("submit", function (e) {
    e.preventDefault();

    const payCheckbox = document.getElementById("pay-check");

    if (!payCheckbox.checked) {
      alert("이용 약관을 선택해주세요!");
      return;
    }

    alert("결제가 완료되었습니다. 즐거운 취미 생활 되세요!");
    window.location.href = "index.html";
  });

});
