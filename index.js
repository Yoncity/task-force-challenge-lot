window.addEventListener("scroll", (event) => {
  let scroll = this.scrollY;

  const navbar = document.querySelector("#navbar");
  const menuIcon = document.querySelector("#menuIcon");
  if (scroll > 500) {
    navbar.className = "nav background_white";
    menuIcon.className = "fas fa-bars menu_icon gray_text";
  } else {
    navbar.className = "nav";
    menuIcon.className = "fas fa-bars menu_icon white_text";
  }
});

let active = 1;
const showActivePartner = () => {
  const slides = [
    "first_partner_slide",
    "second_partner_slide",
    "third_partner_slide",
    "fourth_partner_slide",
    "fifth_partner_slide",
  ];
  document
    .querySelector(`#${slides[active]}`)
    .scrollIntoView({ inline: "center", block: "center", behavior: "smooth" });

  active = active + 1 >= slides.length ? 0 : active + 1;
};

const showSlideShow = (id) => {
  const slides = ["slide_1", "slide_2", "slide_3", "slide_4", "slide_5"];

  document.querySelector(`#${slides[id]}`).scrollIntoView({
    inline: "center",
    block: "center",
    behavior: "smooth",
  });

  //   setInterval(() => {
  //     console.log("Ola");
  //   }, 2000);
};

let showNavbar = 0;
const toggleMenu = () => {
  const navbar = document.querySelector(".nav_links");
  console.log("clicked", showNavbar);

  if (showNavbar === 0) {
    showNavbar = 1;
    navbar.classList = "nav_links show_navbar";
  } else {
    showNavbar = 0;
    navbar.classList = "nav_links";
  }
};
