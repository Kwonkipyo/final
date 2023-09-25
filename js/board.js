window.addEventListener("load", function(){
  // 콤마 기능
  function priceToString(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  // data.json을 연결.
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(event){
      const req = event.target;
      if(req.readyState === XMLHttpRequest.DONE){
          const str = req.response;
          // 글자로 온 데이터를 객체로 변환
          // 글자가 json 규칙대로 만들어진 문자열.
          // 그러므로 json 글자를 객체로 변환해서 활용한다.
          let obj = JSON.parse(str);
  
          SEARCH = obj.search;
          SEARCH2 = obj.search2;
          NEW_BOARD = obj.newboard;
          showSearch();
          showSearch2();
          showNewBoard();
      }
  }
  // 자료 호출
  xhttp.open("GET", "data.json")
  // 웹브라우저 기능 실행 할 수 있도록 요청
  xhttp.send();
  
  let SEARCH;
  let SEARCH2;
  let NEW_BOARD;
  let searchTag = document.getElementById("data-search");
  let searchTag2 = document.getElementById("data-search2");
  let newBoardTag = document.getElementById("data-newboard");
  
  
  
  // 게시판 검색어1 화면 출력 기능
  function showSearch(){
    let html = `
      <div class="search-item-box">
    `;
    SEARCH.forEach(function(item){
      let tag = `
      <a href="#" class="search-item">
        <span>${item.ranking}</span>
        <p>${item.name}</p>
      </a>
      `;
      html += tag;
    });
    html += `
      </div>
    `;
    searchTag.innerHTML = html;
  }
  // 게시판 검색어2 화면 출력 기능
  function showSearch2(){
    let html = `
      <div class="search-item-box">
    `;
    SEARCH2.forEach(function(item){
      let tag = `
      <a href="#" class="search-item">
        <span>${item.ranking}</span>
        <p>${item.name}</p>
      </a>
      `;
      html += tag;
    });
    html += `
      </div>
    `;
    searchTag2.innerHTML = html;
  }
  
  
  // 신규 게시글 화면 출력 기능
  function showNewBoard(){
      let html = `
        <div class="new-board-item-box">
      `;
      NEW_BOARD.forEach(function(item){
          let tag = `
            <a href="#" class="new-board-item">
            <div class="board-tag ${item.tagClass}">${item.tag}</div>
              <div class="img" style="background-image: url('../images/${item.pic}');"></div>
              <div class="board-info-txt">
              <div class="board-info-top">
                <div class="board-name">${item.name}</div>
                <div class="board-date">${item.date}</div>
              </div>
                <span class="price">${priceToString(item.price)}원</span>
                <div class="board-info-bottom">
                  <div class="badge-area">
                    <div class="badge">${item.badge}</div>
                    ${item.badge2 ? `<div class="badge2">${item.badge2}</div>` : ''}
                  </div>
                  <div class="go-btn"><i class="fa-solid fa-right-long"></i></div>
                </div>
              </div>
            </a>
          `;
          html += tag;
      });
      html += `
        </div>
      `;
      newBoardTag.innerHTML = html;
    }
  });