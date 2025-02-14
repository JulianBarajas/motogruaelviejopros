document.addEventListener("DOMContentLoaded", function () {
  const scrollButton = document.querySelector(".scroll-to-top");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      scrollButton.style.opacity = "1";
      scrollButton.style.visibility = "visible";
    } else {
      scrollButton.style.opacity = "0";
      scrollButton.style.visibility = "hidden";
    }
  });
});
