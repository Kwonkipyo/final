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
    <td>${post.writer}<img src="images/grade-silver.png" alt="등급-실버"></td>
    <td>${post.date}</td>
    <td>${post.userNum}</td>
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
  // const postsPerPage = 10; // 페이지당 게시물 수
  // const totalPosts = 100; // 전체 게시물 수
  // let currentPage = 1;

  // function displayPosts(page) {
  //   const postList = document.getElementById("postList");
  //   postList.innerHTML = ''; // 게시판 초기화

  //   const start = (page - 1) * postsPerPage;
  //   const end = start + postsPerPage;
  //   for (let i = start; i < end; i++) {
  //     if (i < totalPosts) {
  //         const postElement = document.createElement('div');
  //         postElement.textContent = `게시물 ${i + 1}`;
  //         postList.appendChild(postElement);
  //     }
  //   }
  // }

  // function displayPagination() {
  //   const pagination = document.getElementById("paging");
  //   pagination.innerHTML = ''; // 페이징 초기화

  //   const totalPages = Math.ceil(totalPosts / postsPerPage);
  //   for (let i = 1; i <= totalPages; i++) {
  //     const pageButton = document.createElement('button');
  //     pageButton.textContent = i;
  //     pageButton.addEventListener('click', () => {
  //       currentPage = i;
  //       displayPosts(currentPage);
  //       displayPagination();
  //     });
  //     if (i === currentPage) {
  //       pageButton.disabled = true;
  //     }
  //     pagination.appendChild(pageButton);
  //   }
  // }

  // displayPosts(currentPage);
  // displayPagination();
});
