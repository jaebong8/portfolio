let random = Math.random() * 5;
window.addEventListener("mousemove", function (e) {
  let x = e.pageX;
  let y = e.pageY;
  let cx = -x / 20;
  let cy = -y / 20;
  let layer = document.querySelectorAll(".parallax svg");

  layer.forEach((v) => {
    v.style.transform = `translate3d(${cx}px,${cy}px,${random}px)`;
  });
});
const textRotatingHandler = () => {
  const textRotating = document.querySelector(".text-rotating");

  setTimeout(() => {
    textRotating.innerText = "Good Person";
    textRotating.animate(
      [
        { transform: "translateY(0px)", opacity: "0" },
        { transform: "translateY(-10px)" },
        { transform: "translateY(5px)" },
        { transform: "translateY(-5px)" },
        { transform: "translateY(1px)" },
        { transform: "translateY(0px)", opacity: "1" },
      ],
      1000
    );
  }, 3000);
  setTimeout(() => {
    textRotating.innerText = "Passionate developer";
    textRotating.animate(
      [
        { transform: "translateY(0px)", opacity: "0" },
        { transform: "translateY(-10px)" },
        { transform: "translateY(5px)" },
        { transform: "translateY(-5px)" },
        { transform: "translateY(1px)" },
        { transform: "translateY(0px)", opacity: "1" },
      ],
      1000
    );
  }, 6000);
  setTimeout(() => {
    textRotating.innerText = "Front-End developer";
    textRotating.animate(
      [
        { transform: "translateY(0px)", opacity: "0" },
        { transform: "translateY(-10px)" },
        { transform: "translateY(5px)" },
        { transform: "translateY(-5px)" },
        { transform: "translateY(1px)" },
        { transform: "translateY(0px)", opacity: "1" },
      ],
      1000
    );
  }, 9000);
};

textRotatingHandler();
setInterval(() => {
  textRotatingHandler();
}, 9000);

const contactBtn = document.querySelector(".contact-btn");

contactBtn.addEventListener("mouseenter", () => {
  contactBtn.animate(
    [{ transform: "scale(1)" }, { transform: "scale(0.8)" }],
    300
  );
});

const progressbar = document.querySelector(".progress-bar");
const progressbar2 = document.querySelector(".progress-bar.bg-warning");
const progressbar3 = document.querySelector(".progress-bar.bg-success");
const aboutMe = document.querySelector(".about-me h1");
const projectH1 = document.querySelector(".project--h1");
const contactH1 = document.querySelector(".contact--h1");

document.addEventListener("scroll", () => {
  let scrollRatio =
    (window.pageYOffset / (document.body.scrollHeight - window.innerHeight)) *
    100;
  console.log(scrollRatio);
  if (scrollRatio < 4) {
    aboutMe.animate([{ transform: "translateY(-30px)" }], 1000);
  }

  if (scrollRatio > 7) {
    aboutMe.animate([{ transform: "translateY(0)", opacity: "1" }], 1000);
  }
  if (scrollRatio > 30) {
    progressbar.style.width = "30%";
  }
  if (scrollRatio > 40) {
    progressbar2.style.width = "30%";
  }
  if (scrollRatio > 50) {
    progressbar3.style.width = "30%";
  }
  if (scrollRatio < 49) {
    projectH1.animate([{ transform: "translateY(-30px)" }], 1000);
  }

  if (scrollRatio > 53) {
    projectH1.animate([{ transform: "translateY(0)", opacity: "1" }], 1000);
  }
  if (scrollRatio < 79) {
    contactH1.animate([{ transform: "translateY(-30px)" }], 1000);
  }

  if (scrollRatio > 82) {
    contactH1.animate([{ transform: "translateY(0)", opacity: "1" }], 1000);
  }
});

const loadMoreBtn = document.querySelector(".load-more");
const gridItem = document.querySelectorAll(".grid-container div");
loadMoreBtn.addEventListener("click", () => {
  gridItem.forEach((Item) => {
    Item.style.display = "flex";
  });
  loadMoreBtn.style.display = "none";
});

loadMoreBtn.addEventListener("mouseenter", () => {
  loadMoreBtn.animate(
    [{ transform: "scale(1)" }, { transform: "scale(0.8)" }],
    300
  );
});
