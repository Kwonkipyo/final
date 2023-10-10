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
  
  // 480px 미만일 때만 JavaScript에서 bottom 값을 설정
  if (window.innerWidth <= 480) {
    topBtnBox.style.bottom = "80px"; // 480px 미만에서는 90px로 설정
  }

  topBtn.addEventListener("click", function (event) {
    event.preventDefault();
    if (window.scrollY === 0) {
      window.scrollTo({
        top: countingTop -50,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  });
  
  // 초기 로드 시 스크롤 값을 검사하여 .top-btn을 조작
  if (window.scrollY === 0 && window.innerWidth <= 480) {
    topBtn.style.display = "none"; // 스크롤 값이 0일 때 숨김
  } else {
    topBtn.style.display = "flex"; // 스크롤 값이 0이 아닐 때 보이도록 설정
  }
  
  window.addEventListener("scroll", function () {
    if (window.innerWidth <= 480) {
      // 스크롤 값이 0일 때 숨김
      if (window.scrollY === 0) {
        topBtn.style.display = "none";
      } else {
        topBtn.style.display = "flex";
      }
    }
  
    // top 버튼 이미지 회전, 스크롤 효과
    if (window.scrollY === 0) {
      topBtnImg.style.transform = "rotate(0deg)";
    } else {
      topBtnImg.style.transform = "rotate(180deg)";
    }
    
    let footer = document.querySelector(".footer");
    let footerTop = footer.getBoundingClientRect().top;
    
    if (window.innerHeight >= footerTop) {
      topBtnBox.style.bottom = "392px";
      if (window.innerWidth <= 768) {
        topBtnBox.style.bottom = "30px"; 
      }
      if (window.innerWidth <= 480) {
        topBtnBox.style.bottom = "30px"; // 480px 미만에서는 80px로 설정
      }
    } else {
      topBtnBox.style.bottom = "30px";
      if (window.innerWidth <= 768) {
        topBtnBox.style.bottom = "30px"; 
      }
      if (window.innerWidth <= 480) {
        topBtnBox.style.bottom = "30px"; // 480px 미만에서는 80px로 설정
      }
    }
  });
});