window.addEventListener("load", function () {
  showInitialDashboard();

  document
    .getElementById("logout-button")
    .addEventListener("click", function () {
      // Logout logic: clear user data and display the login section
      clearUserData(); // Clear login data
      clearUsernameParam(); // Clear or reset the username parameter
      showInitialDashboard(); // Show the initial dashboard screen
    });

  document
    .getElementById("login-form")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      var params = new URLSearchParams(window.location.search);
      var username = params.get("username");

      if (username) {
        window.location.href =
          "index.html?username=" + encodeURIComponent(username);
      }
    });
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
      document.getElementById("login-section").style.display = "none";
      document.getElementById("dashboard-section").style.display = "flex";
      document.getElementById("username-display").textContent = `${username}`;
      // document.getElementById("username-display2").textContent = `${username}`;
      document.getElementById("signup-section").style.display = "none";
    } else {
      document.getElementById("login-section").style.display = "block";
      document.getElementById("signup-section").style.display = "block";
      document.getElementById("dashboard-section").style.display = "none";
    }
  }
});