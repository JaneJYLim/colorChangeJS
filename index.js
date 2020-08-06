
let width = document.querySelector("body");

const RESIZE_CLASS = "resize";

function widthResize() {
    
    const hasClass = width.classList.contains(RESIZE_CLASS);
    if (hasClass) {
      width.classList.remove(RESIZE_CLASS);
    } else {
      width.classList.add(RESIZE_CLASS);
    }

}

function init() {
  window.addEventListener("resize", widthResize);
}
init();