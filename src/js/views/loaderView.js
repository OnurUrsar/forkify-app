window.onload = function () {
  const loader = document.getElementById("full-page-loader");

  setTimeout(function () {
    loader.style.opacity = "0";
  }, 3000);

  loader.addEventListener("transitionend", () => {
    loader.style.visibility = "hidden";
    document.body.removeChild(loader);
  });
};
