
let select = function () {
  let select_header = document.querySelectorAll(".select-header");
  let select_item = document.querySelectorAll(".select-item");
  let input_field = document.querySelectorAll(".curent");
  let last_active_select;

  // Delete all active class if click on not select element
  document.addEventListener("click", function (e) {
    if (e.target.closest(".select") || e.target.closest(".service-form")) {
    } else {
      document.querySelectorAll(".search-box").forEach((item) => {
        item.value = "";
      });
      removeActive();
    }
  });

  // Add click event on head
  select_header.forEach((item) => {
    item.addEventListener("click", addActive);
  });

  //Add click event on item
  select_item.forEach((item) => {
    item.addEventListener("click", changeCurentValue);
  });

  input_field.forEach((item) => {
    item.addEventListener("keyup", function (e) {
      let curent_text = e.target.value.toLowerCase();
      let select_list = e.target
        .closest(".select")
        .querySelectorAll(".select-item");
      select_list.forEach((item) => {
        let item_text = item.innerText.toLowerCase();
        if (item_text.indexOf(curent_text) != -1) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });

  // ---------- General function ----------

  // Add Active class
  function addActive() {
    if (typeof last_active_select == "undefined") {
      last_active_select = this;
    }
    if (last_active_select.closest(".select") !== this.closest(".select")) {
      removeActive();
      document.querySelectorAll(".search-box").forEach((item) => {
        item.value = "";
      });
    }
    last_active_select = this;
    let select_block = this.closest(".select");

    select_block.classList.toggle("active");
    if (
      select_block.classList.contains("form") &&
      select_block.classList.contains("active")
    ) {
      select_block.querySelectorAll(".select-item").forEach((item) => {
        item.style.display = "block";
      });
      select_block.querySelector(".curent").focus();
    }
    if (select_block.querySelector(".curent") == document.activeElement) {
      select_block.classList = "select form active";
    }
    changeArrowDirection(select_block);
  }

  //Add click event on item
  function changeCurentValue() {
    if (window.innerWidth > 840 || this.closest(".select").classList.contains("form")) {
      let text = this.innerText;
      let select_block = this.closest(".select");
      let curent = select_block.querySelector(".curent");
      if (select_block.classList.contains("form")) {
        curent.value = text;
      } else {
        curent.firstElementChild.innerText = text;
      }
      select_block.classList.toggle("active");
      changeArrowDirection(select_block);
    }
  }

  // Change select arrow direction
  function changeArrowDirection(select_block) {
    if (select_block.classList.contains("active")) {
      select_block.querySelector(".fas").classList = "fas fa-chevron-up fa-xs";
    } else {
      select_block.querySelector(".fas").classList =
        "fas fa-chevron-down fa-xs";
    }
  }

  // Remove all active class
  function removeActive() {
    document.querySelectorAll(".select").forEach((item) => {
      item.classList.remove("active");
      changeArrowDirection(item);
    });
  }
};

select();

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
