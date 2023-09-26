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
    var username = localStorage.getItem("username");

    if (username) {
      var path = window.location.pathname;
      var page = path.split("/").pop();

      if (page === "index.html") {
        document.getElementById("login-section").style.display = "none";
        document.getElementById("signup-section").style.display = "none";
        document.getElementById("dashboard-section").style.display = "flex";
        document.getElementById("username-display").textContent = `${username}`;
        document.getElementById(
          "username-display2"
        ).textContent = `${username}`;
        document.getElementById("bestclass-title").style.display = "none";
        document.getElementById("aiclass-title").style.display = "flex";
      } else if (page === "login.html" || page === "signup.html") {
      } else {
        document.getElementById("login-section").style.display = "none";
        document.getElementById("signup-section").style.display = "none";
        document.getElementById("dashboard-section").style.display = "flex";
        document.getElementById("username-display").textContent = `${username}`;
      }
    } else {
      document.getElementById("login-section").style.display = "block";
      document.getElementById("signup-section").style.display = "block";
      document.getElementById("dashboard-section").style.display = "none";

      document.getElementById("bestclass-title").style.display = "flex";
      document.getElementById("aiclass-title").style.display = "none";
    }
  }

  // top 버튼 스크롤 기능
  const topBtnBox = document.getElementById("top-button");
  const topBtn = document.getElementById("top-btn");
  const topBtnImg = document.getElementById("top-btn-img");
  let countingTop = document.querySelector(".counting").getBoundingClientRect().top;

  topBtn.addEventListener("click", function (event) {
    event.preventDefault();
    if (window.scrollY === 0) {
      window.scrollTo({
        top: countingTop - 50,
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
    
    let footer = document.querySelector(".footer");
    let footerTop = footer.getBoundingClientRect().top;
    
    if (window.innerHeight >= footerTop) {
      topBtnBox.style.bottom = "180px";
    } else {
      topBtnBox.style.bottom = "30px";
    }
  });

  
  
  // ============보수중============건들지마시옹==========
  // .counting 요소의 top 위치를 저장할 변수
  // let countingTop = document
  //   .querySelector(".counting")
  //   .getBoundingClientRect().top;

  // // 스크롤 이벤트 리스너 추가
  // window.addEventListener("scroll", function () {
  //   if (window.scrollY == 1) {
  //     window.scrollTo({
  //       top: countingTop - 50,
  //       behavior: "smooth",
  //     });
  //     window.removeEventListener("scroll", arguments.callee);
  //   }
  //   if (window.scrollY <= countingTop) {
  //     window.scrollTo({
  //       top: 0,
  //       behavior: "smooth",
  //     });
  //     window.removeEventListener("scroll", arguments.callee);
  //   }
  // });
});
