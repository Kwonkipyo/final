window.addEventListener("load", function () {
  const loginForm = document.getElementById("login-form");
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    var params = new URLSearchParams(window.location.search);
    var username = params.get("username");

    const useremail = document.getElementById("login-email").value; // Email
    const userpw = document.getElementById("login-password").value; // password

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const authenticatedUser = users.find(
      (user) => user.useremail === useremail && user.userpassword === userpw
    );

    if (authenticatedUser) {
      alert("로그인이 성공하였습니다.");
      window.location.href =
        "index.html?username=" + encodeURIComponent(username);
    } else {
      alert("로그인 정보가 올바르지 않습니다. 다시 시도해주세요.");
      loginForm.reset();
    }
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
});
