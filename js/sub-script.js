window.addEventListener("load", function () {
  showInitialDashboard();

  var path = window.location.pathname;
  var page = path.split("/").pop();

  if (page === "login.html" || page === "signup.html") {
  } else {
    document
      .getElementById("logout-button")
      .addEventListener("click", function () {
        // Logout logic: clear user data and display the login section
        clearUserData(); // Clear login data
        clearUsernameParam(); // Clear or reset the username parameter
        showInitialDashboard(); // Show the initial dashboard screen
      });
  }

  function clearUserData() {
    localStorage.removeItem("username");
  }

  function clearUsernameParam() {
    var url = new URL(window.location.href);
    url.searchParams.delete("username");
    window.history.replaceState({}, "", url.toString());
  }

  // 대시보드 화면 표시
  function showInitialDashboard() {
    // localStorage에서 사용자 이름 가져오기
    // var username = localStorage.getItem("username");
    var usernick = localStorage.getItem("usernick");

    if (usernick) {
      var path = window.location.pathname;
      var page = path.split("/").pop();

      if (page === "index.html") {
        document.getElementById("login-section").style.display = "none";
        document.getElementById("signup-section").style.display = "none";
        document.getElementById("dashboard-section").style.display = "flex";
        document.getElementById("username-display").textContent = `${usernick}`;
        document.getElementById(
          "username-display2"
        ).textContent = `${usernick}`;
      } else if (page === "login.html" || page === "signup.html") {
      } else {
        document.getElementById("login-section").style.display = "none";
        document.getElementById("signup-section").style.display = "none";
        document.getElementById("dashboard-section").style.display = "flex";
        document.getElementById("username-display").textContent = `${usernick}`;
      }
    } else {
      document.getElementById("login-section").style.display = "block";
      document.getElementById("signup-section").style.display = "block";
      document.getElementById("dashboard-section").style.display = "none";
    }
  }

  // top 버튼 스크롤 기능
  const topBtnBox = document.getElementById("top-button");
  const topBtn = document.getElementById("top-btn");
  const topBtnImg = document.getElementById("top-btn-img");
  let bannerBoxTop = document
    .querySelector(".class-info-banner-box")
    .getBoundingClientRect().top;

  topBtn.addEventListener("click", function (event) {
    event.preventDefault();
    if (window.scrollY === 0) {
      window.scrollTo({
        top: bannerBoxTop - 100,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  });
  // top 버튼 이미지 회전, 스크롤 효과
  window.addEventListener("scroll", function () {
    if (window.scrollY === 0) {
      topBtnImg.style.transform = "rotate(0deg)";
    } else {
      topBtnImg.style.transform = "rotate(180deg)";
    }

    // 미디어 쿼리를 사용하여 화면 너비가 1024px 이하일 때만 bottom 값을 80px로 설정
    if (window.innerWidth <= 1024) {
      topBtnBox.style.bottom = "90px";
    } else {
      topBtnBox.style.bottom = "30px";
    }
  });
});
