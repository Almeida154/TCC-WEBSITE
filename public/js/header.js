const btnMobile = document.getElementById("btn-mobile");
const navactive = document.getElementById("nav");
const hamb = document.getElementById("hamburguer");
const navbar = document.getElementsByClassName("menu-item");

for (var i = 0; i < navbar.length; i++) {
  navbar.item(i).addEventListener("click", toggleMenu);
  navbar.item(i).addEventListener("touchstart", toggleMenu);
}
btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchsatart", toggleMenu);

function toggleMenu(event) {
  if (event.type == "touchstart") event.preventDefault();
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
  const active = nav.classList.contains("active");
  event.currentTarget.setAttribute("aria-expanded", active);
  if (navactive.classList.contains("active")) {
    hamb.style = "::after {transform: rotate(45deg);}";
  } else {
    hamb.style = "transform: rotate(0deg);";
  }
}

const header = document.querySelector(".header");

window.onscroll = () => {
  this.scrollY > 30
    ? header.classList.add("active")
    : header.classList.remove("active");
};

$(window).scroll(function () {
  var scrollTop = $(this).scrollTop();

  $(".logoFull").css({
    opacity: function () {
      var elementHeight = $(this).height(),
        opacity = (1 - (elementHeight - scrollTop) / elementHeight) * 0.1 + 0;

      return opacity;
    },
  });
});

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $("html, body").animate(
          {
            scrollTop: target.offset().top,
          },
          1000,
          function () {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) {
              // Checking if the target was focused
              return false;
            } else {
              $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            }
          }
        );
      }
    }
  });
