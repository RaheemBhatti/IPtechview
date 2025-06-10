function handleToggle() {
    const sideBar = document.querySelector(".head_nav_clmn");
    const toggler = document.querySelector(".nav-toggle");
    const overlay = document.querySelector(".nv-ovrlay");
    const closer = document.querySelector(".nv-close");
  
    toggler.addEventListener("click", function () {
      toggler.classList.toggle("active");
      sideBar.classList.toggle("active");
    });
  
    [overlay, closer].forEach(function (item) {
      item.addEventListener("click", function () {
        toggler.classList.remove("active");
        sideBar.classList.remove("active");
      });
    });
  }
  handleToggle();