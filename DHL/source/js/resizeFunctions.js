// All functions that triger by resize window
let mainResizeFunction = function () {
  let windowWidth = window.innerWidth;
  checkWindowSize(windowWidth);
  window.addEventListener("resize", () => {
    windowWidth = window.innerWidth;
    checkWindowSize(windowWidth);
  });
};

function checkWindowSize(windowWidth) {
 
  // Move elements from prenavbar to navbar when screensize is smaller then 840px
    // Move lang from langBody (prenavbar) to langBox (navbar-panel)
    let langsPrenavbar = document.querySelector(".prenavbar").querySelector(".select-body"),
    langsNavbar = document.querySelector(".lang-items"),
    LangsPrenavbarChilds = langsPrenavbar.children,
    langsNavbarChilds = langsNavbar.children;
    if (windowWidth <= 840) {
      let langsLenght = LangsPrenavbarChilds.length;
      for (let i = 0; i < langsLenght; i++) {
        langsNavbar.insertBefore(LangsPrenavbarChilds[0], langsNavbarChilds[0]);
      }
    }else {
      let langsLenght = langsNavbarChilds.length;
      for (let i = 0; i < langsLenght; i++) {
        langsPrenavbar.insertBefore(langsNavbarChilds[0], LangsPrenavbarChilds[0])
      }
    }

  // Locate scroll x to center position
  if (windowWidth <= 1205) {
    let scrollBox = document.querySelector(".scrollbox");
    scrollBox.scrollLeft = 180;
  }

  if (windowWidth <= 375) {
    let scrollBox = document.querySelector(".brands").querySelector(".wrap-1170");
    scrollBox.scrollLeft = 180;
  }

  // console.log(windowWidth)
  // console.log(document.querySelector(".international-service").offsetWidth)
  // Insert br tag to element with br class
  if (windowWidth <= 940) {
    let brElement = document.querySelector(".br");
    brElement.innerHTML = "One of the best international" + "<br />" + "service provider"
  }
  else{
    let brElement = document.querySelector(".br");
    brElement.innerHTML = "One of the best international service provider"
  }
  
  
}

mainResizeFunction();
