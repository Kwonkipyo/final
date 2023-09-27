window.addEventListener("load", function () {
  // 저장된 게시글 배열
  let posts = [];

  // 로컬 스토리지에서 게시글 불러오기 또는 초기화
  if (localStorage.getItem("posts")) {
    posts = JSON.parse(localStorage.getItem("posts"));
  }

  // 페이지 로드 시 게시글을 화면에 표시
  function displayPosts() {
    const postList = document.getElementById("postList");

    // 기존 게시글을 제거
    const existingPosts = postList.getElementsByClassName("post");
    while (existingPosts.length > 0) {
      postList.removeChild(existingPosts[0]);
    }

    // 모든 게시글을 화면에 추가
    for (const post of posts) {
      addPostToDOM(post);
    }
  }

  // 게시글 추가 함수
  function addPostToDOM(post) {
    const postList = document.getElementById("postList");
    const postElement = document.createElement("tr");
    postElement.classList.add("post");
    postElement.innerHTML = `
    <td>${post.count}</td>
    <td>${post.title}</td>
    <td>${post.writer}</td>
    <td>${post.date}</td>
    <td>${post.userNum}명</td>
    <td><div class="group-tag">진행 중</div></td>
  `;

    // 새 게시글을 화면에 추가
    postList.prepend(postElement);
  }

  // 게시글 추가 함수
  function addPost(count, title, writer, date, userNum) {
    // 새 게시글을 생성하고 배열에 추가
    const newPost = { count, title, writer, date, userNum };
    posts.push(newPost);

    // 배열을 localStorage에 저장
    localStorage.setItem("posts", JSON.stringify(posts));

    // 게시글을 화면에 추가
    addPostToDOM(newPost);
  }

  // 초기 게시글 표시
  displayPosts();

  // ====================
  /*
  totalPage : 총 게시글 수
  page_num : 한 페이지 당 출력되는 게시글 갯수
  block_num : 한번에 출력될 수 있는 최대 블록 수
  total_block : 블록의 총 수
  current_block : 현재 블록 위치
  data: 게시글 데이터를 담고 있는 객체 배열
  post_data_print(block) : 게시글 데이터 출력하기 / 매개변수 : 선택 블럭 
  block_print(front_block) : 블럭 출력하기 / 매개변수 : 가장 앞에 오는 블럭
  */
  // 총 게시글 수
  let totalPage = 50;
  // 한 페이지 당 출력되는 게시글 갯수
  let page_num = 10;
  // 한번에 출력될 수 있는 최대 블록 수
  // ex ) [1][2][3][4][5] -> 블록
  let block_num = 5;
  // 블록의 총 수를 계산한다.
  let total_block =
    totalPage % page_num == 0 ? totalPage / page_num : totalPage / page_num + 1;
  // 현재 블록 위치를 알려준다
  let current_block = 1;
  /*
  게시글 데이터를 담고 있는 객체 배열
  번호 : data[게시글 번호].notice_num
  제목 : data[게시글 번호].title
  작성자 : data[게시글 번호].writer
  작성일 : data[게시글 번호].date_created
  조회 : data[게시글 번호].Lookkup_num
  좋아요 : data[게시글 번호].like
  */
  let data = new Array();

  // 게시글 데이터를 담고 있는 객체를 1000개 추가한다.
  for (let i = 1; i <= totalPage; i++) {
    data[i] = {
      notice_num: i,
      title: "제목" + i,
      writer: "작성자" + i,
      date_created: "2022-10-07",
      Lookkup_num: i,
      like: i,
    };
  }
  // 게시글 데이터 출력하기
  // 매개변수 : 선택 블럭
  function post_data_print(block) {
    // 초기화
    // 게시글 title 제외하고 모두 제거
    let post_list = document.querySelectorAll(".data_row");
    post_list.forEach(function (item) {
      item.remove();
    });

    // 게시글 출력 공간
    // let notice_board = document.querySelector(".notice_board");
    let notice_board = document.querySelector(".board-list-title tbody");
    // 출력 첫 페이지 번호
    let start = totalPage - page_num * (block - 1);
    for (let i = start; i >= 1 && i > start - page_num; i--) {
      // 게시글 데이터 가져와서 게시글 요소 생성 및 추가
      // 번호, 제목, 작성자, 작성일, 조회수, 좋아요
      // data[i].notice_num data[i].title data[i].writer data[i].date_created data[i].Lookkup_num data[i].like

      let post = document.createElement("ul");
      post.className = "board_row";
      post.className = "data_row";

      let classname = ["w70", "w500", "w120", "w100", "w100", "w100"];

      let post_data = [
        data[i].notice_num,
        data[i].title,
        data[i].writer,
        data[i].date_created,
        data[i].Lookkup_num,
        data[i].like,
      ];

      //게시글 생성
      for (let j = 0; j < classname.length; j++) {
        let li = document.createElement("li");
        li.className = classname[j];
        li.textContent = post_data[j];
        post.appendChild(li);
      }

      // 게시글 추가
      notice_board.appendChild(post);
    }
  }

  // 블럭 출력하기
  // 매개변수 : 가장 앞에 오는 블럭
  function block_print(front_block) {
    /*
    1. 이전, 다음 블럭 속성 처리
    2. 기존 블럭 모두 삭제
    3. 범위 안의 블럭 생성 및 추가
    */
    current_block = front_block;

    // 이전으로 갈 블럭이 없으면
    if (front_block <= 1) {
      document.querySelector(".before_move").style.visibility = "hidden";
    } else {
      document.querySelector(".before_move").style.visibility = "visible";
    }

    // 다음으로 갈 블럭이 없으면
    if (front_block + block_num >= total_block) {
      document.querySelector(".next_move").style.visibility = "hidden";
    } else {
      document.querySelector(".next_move").style.visibility = "visible";
    }

    // 블럭을 추가할 공간
    // let block_box = document.querySelector(".block");
    let block_box = document.querySelector(".paging-num");
    // 기존 블럭 모두 삭제
    block_box.replaceChildren();

    console.log("remove");

    //front_block부터 total_block 또는 block_num까지 생성 및 추가
    for (
      let i = front_block;
      i <= total_block && i < front_block + block_num;
      i++
    ) {
      console.log("add element");

      // 버튼을 생성한다.
      let button = document.createElement("button");
      button.textContent = i;
      // 버튼을 클릭하면 게시글이 변경되는 이벤트 추가
      button.addEventListener("click", function (event) {
        post_data_print(i);
      });
      // 블럭에 추가한다.
      block_box.appendChild(button);
    }
  }

  function before() {
    block_print(current_block - block_num);
    console.log("이전");
  }

  function next() {
    block_print(current_block + block_num);
    console.log("다음");
  }
  // 화면 로드 시 실행되는 이벤트
  window.onload = function () {
    // 게시글 데이터 출력하기
    post_data_print(1);

    // 블럭 출력하기
    block_print(1);
  };
});
