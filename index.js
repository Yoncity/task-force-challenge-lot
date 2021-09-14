window.addEventListener("scroll", (event) => {
  let scroll = this.scrollY;

  const navbar = document.querySelector("#navbar");
  if (scroll > 500) {
    navbar.className = "nav background_white";
  } else navbar.className = "nav";
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
