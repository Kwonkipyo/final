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

    mustCheckboxes.forEach(function (checkbox) {
      if (!checkbox.checked) {
        isAllChecked = false;
      }
    });

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
    alert("가입이 완료 되었습니다. 로그인 페이지로 이동합니다.");
    window.location.href =
      "login.html?username=" + encodeURIComponent(username);
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
});
