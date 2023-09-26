window.addEventListener("load", function () {
  const signupForm = document.getElementById("signup-form");
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("signup-name").value;
    const usernick = document.getElementById("signup-nickname").value;
    const useremail = document.getElementById("signup-email").value;
    const userpw = document.getElementById("signup-password").value;
    const userpwck = document.getElementById("signup-password-check").value;

    const mustCheckboxes = document.querySelectorAll(".normal.must");
    let isAllChecked = true;

    // 필수 이용약관들이 체크가 안 됐다면 전체 동의 체크 해제
    mustCheckboxes.forEach(function (checkbox) {
      if (!checkbox.checked) {
        isAllChecked = false;
      }
    });

    // 필수 이용약관들이 체크가 안 됐다면 알림창으로 체크해달라고 알림
    if (!isAllChecked) {
      alert("이용 약관을 선택해주세요!");
      return;
    }

    const newUser = {
      username: username,
      usernickname: usernick,
      useremail: useremail,
      userpassword: userpw,
      userpasswordcheck: userpwck,
    };

    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    // 사용자 이름을 localStorage에 저장
    localStorage.setItem("username", username);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("useremail", useremail);
    alert("가입이 완료 되었습니다. 로그인 페이지로 이동합니다.");
    window.location.href =
      "login.html?username=" +
      encodeURIComponent(username) +
      "?useremail=" +
      encodeURIComponent(useremail);
  });

  const checkAllCheckbox = document.getElementById("check_all");
  const normalCheckboxes = document.querySelectorAll(".normal");
  const checkAll_m_Checkbox = document.getElementById("check_m_all");
  const m_normalCheckboxes = document.querySelectorAll(".m_normal");

  checkAllCheckbox.addEventListener("change", function () {
    const isChecked = checkAllCheckbox.checked;

    normalCheckboxes.forEach(function (checkbox) {
      checkbox.checked = isChecked;
    });
  });

  normalCheckboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", function () {
      const areAllChecked = Array.from(normalCheckboxes).every(function (cb) {
        return cb.checked;
      });

      checkAllCheckbox.checked = areAllChecked;
    });
  });

  checkAll_m_Checkbox.addEventListener("change", function () {
    const isChecked = checkAll_m_Checkbox.checked;

    m_normalCheckboxes.forEach(function (checkbox) {
      checkbox.checked = isChecked;
    });
  });

  m_normalCheckboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", function () {
      const areAllChecked = Array.from(m_normalCheckboxes).every(function (cb) {
        return cb.checked;
      });

      checkAll_m_Checkbox.checked = areAllChecked;
    });
  });

  // ====================
  var pw1 = document.getElementById("signup-password");
  var pw2 = document.getElementById("signup-password-check");

  // 글자가 입력해서 바꼈을 때
  pw1.onchange = checkPw;
  pw2.onchange = comparePw;

  function checkPw() {
    if (pw1.value.length < 8) {
      alert("비밀번호는 8자리 이상 입력하셔야 합니다.");
      pw1.value = ""; // 비밀번호 필드 지움
      pw1.focus(); // 비밀번호를 다시 입력할 수 있게 포커싱
    }
  }

  function comparePw() {
    if (pw1.value != pw2.value) {
      alert("암호가 다릅니다. 다시 입력하세요.");
      pw2.value = "";
      pw2.focus();
    }
  }

  // ====================
  const checkNick = document.getElementById("check-nickname-button");

  // 중복확인 버튼 클릭 시 모달 열기
  checkNick.addEventListener("click", function () {
    nickNull();

    function nickNull() {
      const signnick = document.getElementById("signup-nickname");

      if (signnick.value === "") {
        alert("닉네임을 작성해주세요");
      } else {
        var modal = document.getElementById("signup-modal-wrap");
        modal.style.display = "block";
      }
    }

    const signnick = document.getElementById("signup-nickname");
    var nickStatus = document.getElementById("nicknameStatus");

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const authenticatedUser = users.find(
      (user) => user.usernick === signnick.value
    );

    if (authenticatedUser) {
      nickStatus.style.color = "red";
      nickStatus.textContent =
        signnick.value + "은 사용할 수 없는 닉네임입니다.";
    } else {
      nickStatus.style.color = "blue";
      nickStatus.textContent =
        signnick.value + "은 사용할 수 있는 닉네임입니다.";
    }
  });

  // 모달 닫기 버튼 클릭 시 모달 닫기
  document.querySelector(".close").addEventListener("click", function () {
    var modal = document.getElementById("signup-modal-wrap");
    modal.style.display = "none";
  });
  document.querySelector(".close-btn").addEventListener("click", function () {
    var modal = document.getElementById("signup-modal-wrap");
    modal.style.display = "none";
  });

  // 모달 외부 클릭 시 모달 닫기
  window.onclick = function (event) {
    var modal = document.getElementById("signup-modal-wrap");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  // ====================
  const signWrap = document.querySelector(".signup-wrap");
  const signBox = document.querySelector(".signup-box");
  const signInput = document.querySelectorAll("#signup-form input");

  document.addEventListener("click", function (event) {
    for (i = 0; i < signInput.length; i++) {
      if (event.target === signInput[i]) {
        console.log(signInput[i]);
        signWrap.style.background =
          "url('/images/sign-bg-click.gif') no-repeat center center";
        signWrap.style.backgroundSize = "cover";
      } else {
        signWrap.style.background =
          "url('/images/sign-bg.jpg') no-repeat center center";
        signWrap.style.backgroundSize = "cover";
      }
    }

    if (event.target == signBox) {
      signWrap.style.background =
        "url('/images/sign-bg-click.gif') no-repeat center center";
      signWrap.style.backgroundSize = "cover";
    } else {
      signWrap.style.background =
        "url('/images/sign-bg.jpg') no-repeat center center";
      signWrap.style.backgroundSize = "cover";
    }
  });
});
