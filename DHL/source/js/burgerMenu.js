let burger = function () {
  
  // Klick for button
  let burger_bt = document.querySelector(".burger");
  burger_bt.addEventListener("click", function() {
    this.classList.toggle("active");
    document.querySelector(".navbar").classList.toggle("active");
    document.getElementsByTagName("body")[0].classList.toggle("lock");
  })
  
};


burger();
