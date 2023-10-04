window.addEventListener("load", function(){
  const navLis = $(".title-menu ul li");

  const navLisA = $(".title-menu ul li a");

  navLisA.click(function (event) {
    event.preventDefault();
    const targetId = $(this).attr("href"); 
    const targetPosition = $(targetId).offset().top; 
    $("html, body").animate(
      {
        scrollTop: targetPosition,
      },
      "slow"
    );
  });
  navLis.eq(0).addClass("focus-active");
});