let menu = document.querySelector(".menu__icon"),
  menu__body = document.querySelector(".menu-body");

menu.addEventListener("click", () => {
  menu.classList.toggle("active");
  menu__body.classList.toggle("active");
  if (menu__body.classList.contains('active')) {
    document.body.style.overflowY = 'hidden';
  } else {
    document.body.style.overflowY = 'visible';
  }
});

$('.slider__body').slick({
	arrows: false,
	dots: true,
});

function ibg() {
  let ibg = document.querySelectorAll(".ibg");
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector("img")) {
      ibg[i].style.backgroundImage =
        "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
    }
  }
}

ibg();
