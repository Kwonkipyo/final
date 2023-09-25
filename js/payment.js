window.addEventListener("load", function () {
  // JavaScript로 드롭다운 메뉴 열기/닫기 및 선택 항목 변경 및 표시 기능 추가
  // var dropdown = document.querySelector(".dropdown");
  // var dropdownContent = dropdown.querySelector(".dropdown-list");
  // var dropbtn = dropdown.querySelector(".dropdown-selected p");
  // var selectedItem = document.getElementById("selectedItem");

  // // 기본 선택 항목 설정
  // var defaultOption = dropdownContent.querySelector("input:checked").value;
  // dropbtn.textContent = defaultOption;
  // selectedItem.textContent = "선택한 항목: " + defaultOption;

  // dropdown.addEventListener("click", function () {
  //   dropdownContent.classList.toggle("show");
  // });

  // dropdownContent.addEventListener("click", function (e) {
  //   if (e.target.tagName === "INPUT") {
  //     var selectedOption = e.target.value;
  //     dropbtn.textContent = selectedOption;
  //     selectedItem.textContent = "선택한 항목: " + selectedOption;
  //     dropdownContent.classList.remove("show");
  //   }
  // });

  // window.onclick = function (event) {
  //   if (!event.target.matches(".dropdown-selected p")) {
  //     var dropdowns = document.getElementsByClassName("dropdown-list");
  //     for (var i = 0; i < dropdowns.length; i++) {
  //       var openDropdown = dropdowns[i];
  //       if (openDropdown.classList.contains("show")) {
  //         openDropdown.classList.remove("show");
  //       }
  //     }
  //   }
  // };

  // ====================
  const paymentWrap = document.querySelector(".payment-wrap");
  paymentWrap.addEventListener("submit", function (e) {
    e.preventDefault();

    const payCheckbox = document.getElementById("pay-check");

    if (!payCheckbox.checked) {
      alert("이용 약관을 선택해주세요!");
      return;
    }

    alert("결제가 완료되었습니다. 당신의 취미 생활을 응원합니다.");
    window.location.href = "index.html";
  });
});
