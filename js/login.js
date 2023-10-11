window.addEventListener("load", function () {
  const loginForm = document.getElementById("login-form");
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    var params = new URLSearchParams(window.location.search);
    var username = params.get("username");
    // var useremail = params.get("useremail");

    const useremail = document.getElementById("login-email").value; // Email
    const userpw = document.getElementById("login-password").value; // password

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const authenticatedUser = users.find(
      (user) => user.useremail === useremail && user.userpassword === userpw
    );

    if (authenticatedUser) {
      // 사용자 이름을 localStorage에 저장
      localStorage.setItem("username", authenticatedUser.username);
      localStorage.setItem("usernick", authenticatedUser.usernick);
      alert(`반갑습니다, ${authenticatedUser.username}님!\n오늘도 즐거운 취미 생활을 Class&가 함께하겠습니다.`);
      // localStorage.setItem("useremail", authenticatedUser.useremail);
      window.location.href = "index.html";
    } else {
      alert("로그인 정보가 올바르지 않습니다. 다시 시도해주세요.");
      loginForm.reset();
    }
  });

  // ====================
  const signWrap = document.querySelector(".login-wrap");
  const signInput = document.querySelectorAll("#login-form input");

  for (let i = 0; i < signInput.length; i++) {
    signInput[i].addEventListener("focus", function () {
      signWrap.style.background =
        "radial-gradient(circle, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 1)), url('/images/sign-bg-click.gif') no-repeat center center";
      signWrap.style.backgroundSize = "cover";
    });

    signInput[i].addEventListener("blur", function () {
      signWrap.style.background =
        "radial-gradient(circle, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.6)), url('/images/sign-bg.jpg') no-repeat center center";
      signWrap.style.backgroundSize = "cover";
    });
  }
});
