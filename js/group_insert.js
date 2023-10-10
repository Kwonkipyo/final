window.addEventListener("load", function () {
  // 작성자 닉네임 불러오기
  showInitialDashboard();

  // 대시보드 화면 표시
  function showInitialDashboard() {
    // localStorage에서 사용자 이름 가져오기
    var usernick = localStorage.getItem("usernick");

    if (usernick) {
      document.getElementById("boardWriter").textContent = `${usernick}`;
    } else {
      alert("로그인 후 작성 가능합니다.");
      window.location.href = "login.html";
    }
  }

  // ====================
  // data.json을 로딩. 연결시켜준다.
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function (event) {
    const req = event.target;
    if (req.readyState === XMLHttpRequest.DONE) {
      const str = req.response;
      // 글자로 온 데이터를 객체로 변환
      // 글자가 json 규칙대로 만들어진 문자열.
      // 그러므로 json 글자를 객체로 변환해서 활용한다.
      let obj = JSON.parse(str);

      BEST_CLASS = obj.bestclass;
      AI_CLASS = obj.aiclass;
      NEW_CLASS = obj.newclass;
    }
  };

  // 자료를 호출한다.
  xhttp.open("GET", "data.json");
  // 웹브라우저 기능 실행 할 수 있도록 요청.
  xhttp.send();

  // #searchButton 버튼을 클릭했을 때의 이벤트 리스너 추가
  document
    .getElementById("searchButton")
    .addEventListener("click", function () {
      document.querySelector(".applicant").style.display = "none";
      // #searchClass 입력 필드의 값을 가져옴
      const searchKeyword = document.getElementById("searchClass").value.trim();

      const searchResultsElement = document.getElementById("searchResults");
      searchResultsElement.style.display = "block";

      // data.json 파일에서 클래스 검색
      if (searchKeyword !== "") {
        const searchResults = searchClasses(searchKeyword);
        displaySearchResults(searchResults);
      }

      document.addEventListener("click", function (event) {
        const searchClass = document.getElementById("searchClass");
        const searchBtn = document.getElementById("searchButton");
        const searchBtni = document.querySelector("#searchButton i");
        const searchList = document.getElementById("searchResults");
        if (
          event.target !== searchClass &&
          event.target !== searchBtn &&
          event.target !== searchBtni
        ) {
          searchList.style.display = "none";
        }
      });
    });

  // data.json에서 클래스 검색 함수
  function searchClasses(keyword) {
    const allClasses = BEST_CLASS.concat(AI_CLASS, NEW_CLASS); // AI 클래스와 신규 클래스를 합침
    const results = [];

    // 모든 클래스를 순회하면서 키워드와 일치하는 것을 찾음
    for (const classObj of allClasses) {
      if (classObj.name.toLowerCase().includes(keyword.toLowerCase())) {
        results.push(classObj);
      }
    }
    return results;
  }

  // 검색 결과를 화면에 표시하는 함수
  function displaySearchResults(results) {
    const searchResultsElement = document.getElementById("searchResults");
    searchResultsElement.innerHTML = ""; // 기존 결과를 초기화

    if (results.length === 0) {
      // 검색 결과가 없을 경우 메시지를 출력
      searchResultsElement.innerHTML = "<li>검색 결과가 없습니다.</li>";
    } else {
      // 검색 결과를 리스트로 출력
      for (const classObj of results) {
        const listItem = document.createElement("li");

        // 클래스 이미지를 표시
        const image = document.createElement("img");
        image.src = "images/" + classObj.pic; // classObj에서 이미지 URL을 가져와서 설정
        image.alt = classObj.name; // 이미지의 대체 텍스트 설정
        listItem.appendChild(image); // 이미지를 리스트 아이템에 추가

        const text = document.createElement("p");
        text.textContent = classObj.name;
        listItem.appendChild(text);

        searchResultsElement.appendChild(listItem);

        listItem.addEventListener("click", function () {
          document.getElementById("searchClass").value = classObj.name;
          document.querySelector(".applicant").style.display = "flex";

          const boardNumWrap = document.querySelector(".boardNum-wrap");
          const numPeople = document.createElement("p");

          for (const textNum of NEW_CLASS) {
            if (textNum.name.includes(classObj.name)) {
              numPeople.textContent = "5명";
              break;
            } else {
              numPeople.textContent = "10명";
              break;
            }
          }

          // 이전에 존재하는 내용을 초기화하고 새로운 내용을 추가합니다.
          boardNumWrap.innerHTML = "";
          boardNumWrap.appendChild(numPeople);

          console.log(numPeople.textContent);
        });
      }
    }
  }

  // ====================
  const postTitleInput = document.getElementById("boardTitle"); // 제목
  const postWriterInput = document.getElementById("boardWriter"); // 작성자
  const postClassInput = document.getElementById("searchClass"); // 클래스
  const postContentInput = document.getElementById("boardContent"); // 내용
  const postImageInput = document.getElementById("boardImage"); // 이미지

  var tDate = new Date();
  var today =
    tDate.getFullYear() + "." + (tDate.getMonth() + 1) + "." + tDate.getDate();

  const boardForm = document.getElementById("board_form");

  // 저장된 게시글 배열
  let posts = [];

  // 로컬 스토리지에 저장된 게시글 불러오기
  if (localStorage.getItem("posts")) {
    posts = JSON.parse(localStorage.getItem("posts"));
    // posts 배열의 각 요소를 순환하면서 반복문 내부에서 post 변수를 통해 현재 요소에
    // 접근할 수 있게 함. 반복문을 사용하면 posts 배열의 모든 요소를 차례대로 처리 가능
  }

  // 게시글 작성 버튼 클릭 이벤트 처리
  boardForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const title = postTitleInput.value;
    const writer = postWriterInput.innerText;
    const hobbyClass = postClassInput.value;
    const content = postContentInput.value;
    const imageFile = postImageInput.files[0];
    const date = today;

    // numPeople 값을 가져옵니다.
    const userNum = document.querySelector(".boardNum-wrap p").textContent;

    var count = posts.length + 12632;

    if (title && hobbyClass && userNum && content) {
      const reader = new FileReader();
      reader.onload = function () {
        // 새 게시글 객체 생성
        const newPost = {
          count,
          title,
          writer,
          hobbyClass,
          userNum,
          content,
          image: reader.result,
          date,
        };

        // 배열에 게시글 추가
        posts.push(newPost);
        // 로컬 스토리지에 게시글 저장
        localStorage.setItem("posts", JSON.stringify(posts));
        localStorage.setItem("count", count);
        localStorage.setItem("title", title);
        localStorage.setItem("writer", writer);
        localStorage.setItem("date", date);
        localStorage.setItem("userNum", userNum);

        // 입력 필드 초기화
        postTitleInput.value = "";
        postWriterInput.value = "";
        postClassInput.value = "";
        postContentInput.value = "";
        postImageInput.value = "";

        alert("신청이 완료 되었습니다. 게시판 페이지로 이동합니다.");
        window.location.href =
          "group.html?count=" +
          encodeURIComponent(count) +
          "?title=" +
          encodeURIComponent(title) +
          "?writer=" +
          encodeURIComponent(writer) +
          "?date=" +
          encodeURIComponent(date) +
          "?userNum=" +
          encodeURIComponent(userNum);
      };

      if (imageFile) {
        reader.readAsDataURL(imageFile); // 이미지 파일을 base64로 읽기
      } else {
        // 이미지가 없을 경우도 처리
        reader.onload();
      }
    }
  });

  // ====================
  const appIcon = document.querySelector(".applicant i");
  const appTextInfo = document.querySelector(".app-textInfo");

  appIcon.addEventListener("mouseover", function () {
    appTextInfo.style.display = "block";
  });
  appIcon.addEventListener("mouseout", function () {
    appTextInfo.style.display = "none";
  });
});
