window.addEventListener("load", function () {
  let isLiked = false;

  $(".fa-heart").click(function () {
    const currentColor = $(this).css("color");
    if (currentColor === "rgb(255, 0, 0)") {
      $(this).css("color", "");
      isLiked = false; 
    } else {
      $(this).css("color", "red");
      isLiked = true; 
    }
    let currentCount = parseInt($(".heart-count").text());

    if (isLiked) {
      currentCount++;
    } else {
      currentCount--;
    }

    $({ count: currentCount }).animate(
      { count: currentCount },
      {
        duration: 100,
        step: function () {
          $(".heart-count").text(Math.ceil(this.count));
        },
      }
    );
    $(this).addClass("heart-pulse");

    setTimeout(() => {
      $(this).removeClass("heart-pulse");
    }, 2000);
  });
});
