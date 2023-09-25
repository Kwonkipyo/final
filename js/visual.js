window.addEventListener("load", function(){
    const btn6 = document.querySelector(".visual-button");

  btn6.addEventListener("mouseenter", function(e) {
    const parentOffset = this.getBoundingClientRect();
    const relX = e.pageX - parentOffset.left;
    const relY = e.pageY - parentOffset.top;

    this.querySelector("span").style.top = relY + "px";
    this.querySelector("span").style.left = relX + "px";
  });

  btn6.addEventListener("mouseout", function(e) {
    const parentOffset = this.getBoundingClientRect();
    const relX = e.pageX - parentOffset.left;
    const relY = e.pageY - parentOffset.top;

    this.querySelector("span").style.top = relY + "px";
    this.querySelector("span").style.left = relX + "px";
  });
})