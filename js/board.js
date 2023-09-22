window.addEventListener("load", function(){
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
    
            BEST_BOARD = obj.bestboard;
            NEW_BOARD = obj.newboard;
            showBestBoard(); // 맞춤 클래스 화면에 배치
            showNewBoard(); // 신규 클래스 화면에 배치
        }
    }
    // 자료 호출
    xhttp.open("GET", "data.json")
    // 웹브라우저 기능 실행 할 수 있도록 요청
    xhttp.send();
    
    let BEST_BOARD;
    let NEW_BOARD;
    
    let bestBoardTag = document.getElementById("data-bestboard");
    let newBoardTag = document.getElementById("data-newboard");
    
    
    // 맞춤 클래스 화면 출력 기능
    function showBestBoard(){
        BEST_BOARD.forEach(function(item){
            let tag = `
                <div class="board-item">
                    <div class="ranking">1</div>
                    <div class="board-card">
                    <div class="img" style="background-image: ;"></div>
                    <div class="board-info-txt">
                        <div class="board-title"></div>
                        <span class="price"></span>
                        <div class="go-btn"></div>
                    </div>
                    </div>
                </div>
            `;
            html += tag;
        });
    }
    
    // 신규 클래스 화면 출력 기능
    function showNewBoard(){
        NEW_BOARD.forEach(function(item){
            let tag = `
            `;
            html += tag;
        });
    }
});