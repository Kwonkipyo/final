// 대시보드 화면 표시
showInitialDashboard();
function showInitialDashboard() {
  var params = new URLSearchParams(window.location.search);
  var username = params.get("username");

  if (username) {
    document.getElementById("username-display").textContent = `${username}`;
  } else {
  }
}

// ---------------------------------------------------

// 영상 클릭 시 로그인 창으로 안내

// function showAlert(event) {
//   // 알림 창 표시
//   alert("로그인 후 이용해주세요.");

//   // 이벤트 취소 (링크의 기본 동작 방지)
//   event.preventDefault();

//   // login.html로 이동
//   window.location.href = "login.html";
// }
