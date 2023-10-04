window.addEventListener("load", function(){
  $(".fa-heart").click(function () {
    const currentColor = $(this).css("color");
    if (currentColor === "rgb(255, 0, 0)") {
      $(this).css("color", "");
      let currentCount = parseInt($(".heart-count").text());
      $({ count: currentCount }).animate(
        { count: currentCount - 1 },
        {
          duration: 1000, 
          step: function () {
            $(".heart-count").text(Math.ceil(this.count));
          },
        }
      );
    } else {
      $(this).css("color", "red");
      let currentCount = parseInt($(".heart-count").text());
      $({ count: currentCount }).animate(
        { count: currentCount + 1 },
        {
          duration: 1000, 
          step: function () {
            $(".heart-count").text(Math.ceil(this.count));
          },
        }
      );
    }
    $(this).addClass("heart-pulse");
    setTimeout(() => {
      $(this).removeClass("heart-pulse");
    }, 1000);
  });
});
