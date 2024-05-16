function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function showInfo() {
  const businessImage = document.querySelector(".businessImage");
  const businessLocationInfo = document.querySelector(".businessLocationInfo");
  if (isElementInViewport(businessImage)) {
    setTimeout(() => {
      businessImage.classList.add("activateAnimation");
      businessLocationInfo.classList.add("activateAnimation");
      businessLocationInfo.classList.add("show");

    }, 500);
    window.removeEventListener("scroll", showInfo);
  }
}

window.onload = () => {
  showInfo();
  window.addEventListener("scroll", showInfo);
};
