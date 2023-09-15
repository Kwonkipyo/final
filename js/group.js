window.addEventListener("load", function () {
  // 글 목록을 담기 위한 부모 리스트 요소
  const contents = document.querySelector(".board-list-title tbody");
  // 페이지 버튼을 담기 위한 부모 리스트 요소
  const buttons = document.querySelector(".paging");

  // 전체 글의 개수
  const numOfContent = document.querySelectorAll(
    ".board-list-title tbody tr"
  ).length;
  // 한 페이지에 보여줄 글의 최대 개수
  const maxContent = 10;
  // 한 화면에 보여줄 페이지 버튼의 최대 개수
  const maxButton = 5;
  // 글을 모두 보여주기 위해 필요한 페이지의 개수
  const maxPage = Math.ceil(numOfContent / maxContent);
  // 현재 페이지 (시작 페이지 = 1)
  let page = 1;

  // 저장된 게시글 배열
  let posts = [];

  // 로컬 스토리지에 저장된 게시글 불러오기
  if (localStorage.getItem("posts")) {
    posts = JSON.parse(localStorage.getItem("posts"));
    // posts 배열의 각 요소를 순환하면서 반복문 내부에서 post 변수를 통해 현재 요소에
    // 접근할 수 있게 함. 반복문을 사용하면 posts 배열의 모든 요소를 차례대로 처리 가능
    for (const post of posts) {
      addPostToDOM(post);
    }
  }

  // 글 목록 추가
});
