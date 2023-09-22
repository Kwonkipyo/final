window.addEventListener("load", function () {
  showInitialDashboard();

  // 대시보드 화면 표시
  function showInitialDashboard() {
    // localStorage에서 사용자 이름 가져오기
    var username = localStorage.getItem("username");

    if (username) {
      document.getElementById("boardWriter").textContent = `${username}`;
    } else {
    }
  }

  // ====================
  const postTitleInput = document.getElementById("boardTitle"); // 제목
  const postWriterInput = document.getElementById("boardWriter"); // 작성자
  const postNumInput = document.getElementById("boardNum"); // 신청자수
  const postClassInput = document.getElementById("boardClass"); // 클래스
  const postContentInput = document.getElementById("boardContent"); // 내용
  const postImageInput = document.getElementById("boardImage"); // 이미지

  const addPostBtn = document.getElementById("addPostBtn"); // 제안하기 버튼
  const postList = document.getElementById("postList"); // 리스트 출력 부분

  const searchInput = document.getElementById("searchInput"); // 검색창
  const searchBtn = document.getElementById("searchBtn"); // 검색 버튼
  const clearBtn = document.getElementById("clearBtn"); // 닫기 버튼

  showInitialDashboard();

  // 대시보드 화면 표시
  // function showInitialDashboard() {
  //   var params = new URLSearchParams(window.location.search);
  //   var username = params.get("username");

  //   if (username) {
  //     document.getElementById("username-display").textContent = `${username}`;
  //   } else {
  //   }
  // }

  // ====================
  // 최소값과 최대값 설정
  var minValue = 5;
  var maxValue = 10;

  // boardNum 엘리먼트와 버튼 엘리먼트 가져오기
  var boardNum = document.getElementById("boardNum");
  var downBtn = document.querySelector(".boardNum-btn.down");
  var upBtn = document.querySelector(".boardNum-btn.up");

  // Down 버튼 클릭 시
  downBtn.addEventListener("click", function () {
    var currentValue = parseInt(boardNum.value);
    if (currentValue > minValue) {
      boardNum.value = currentValue - 1;
    }
  });

  // Up 버튼 클릭 시
  upBtn.addEventListener("click", function () {
    var currentValue = parseInt(boardNum.value);
    if (currentValue < maxValue) {
      boardNum.value = currentValue + 1;
    }
  });

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
      // #searchClass 입력 필드의 값을 가져옴
      const searchKeyword = document.getElementById("searchClass").value.trim();

      // const searchResultsElement = document.getElementById("searchResults");
      // searchResultsElement.style.display = "block";

      // data.json 파일에서 클래스 검색
      if (searchKeyword !== "") {
        const searchResults = searchClasses(searchKeyword);
        displaySearchResults(searchResults);
      }
    });

  // data.json에서 클래스 검색 함수
  function searchClasses(keyword) {
    const allClasses = AI_CLASS.concat(NEW_CLASS); // AI 클래스와 신규 클래스를 합침
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
        listItem.textContent = classObj.name;
        searchResultsElement.appendChild(listItem);
      }
    }
  }

  const searchButton = document.getElementById("searchButton");
  const searchClassInput = document.getElementById("searchClass");
  const searchResultss = document.getElementById("searchResults");
  // 검색 버튼 클릭 시 검색 결과 표시/숨김 토글
  searchClassInput.addEventListener("click", function (event) {
    event.stopPropagation(); // 이벤트 전파 방지

    const isResultsVisible = searchResultss.style.display === "block";
    if (!isResultsVisible) {
      // 검색 결과가 숨겨져 있다면 표시
      searchResultss.style.display = "block";
    } else {
      // 검색 결과가 표시된 상태면 숨김
      searchResultss.style.display = "none";
    }
  });

  // 다른 곳을 클릭하면 검색 결과 숨김
  document.addEventListener("click", function () {
    searchResultss.style.display = "none";
  });

  // ====================
  // const searchButton = document.getElementById("searchButton");
  // const searchClassInput = document.getElementById("searchClass");
  // const searchResults = document.getElementById("searchResults");

  // 검색 버튼 클릭 시 검색 결과 표시/숨김 토글
  // searchButton.addEventListener("click", function (event) {
  //   event.stopPropagation(); // 이벤트 전파 방지

  //   const isResultsVisible = searchResults.style.display === "block";
  //   if (!isResultsVisible) {
  //     // 검색 결과가 숨겨져 있다면 표시
  //     searchResults.style.display = "block";
  //   } else {
  //     // 검색 결과가 표시된 상태면 숨김
  //     searchResults.style.display = "none";
  //   }
  // });

  // 검색창 클릭 시 검색 결과 표시
  // searchClassInput.addEventListener("click", function (event) {
  //   event.stopPropagation(); // 이벤트 전파 방지

  //   // 검색 결과 표시
  //   searchResults.style.display = "block";
  // });

  // 다른 곳을 클릭하면 검색 결과 숨김
  // document.addEventListener("click", function () {
  //   searchResults.style.display = "none";
  // });

  // 검색창 클릭 시 이벤트 전파 방지
  // searchClassInput.addEventListener("click", function (event) {
  //   event.stopPropagation();
  // });

  // 검색 결과 리스트 아이템 클릭 시 검색어 입력
  // searchResults.addEventListener("click", function (event) {
  //   const clickedItem = event.target;
  //   if (clickedItem.tagName === "LI") {
  //     const className = clickedItem.textContent;
  //     searchClassInput.value = className;
  //     searchResults.style.display = "none"; // 선택한 후에 검색 결과 숨김
  //   }
  // });
});
