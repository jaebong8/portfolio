window.addEventListener("mousemove", function (e) {
  let x = e.pageX;
  let y = e.pageY;
  let cx = -x / 20;
  let cy = -y / 20;
  let layer = document.querySelectorAll(".parallax svg");

  layer.forEach((v) => {
    v.style.transform = `translate3d(${cx}px,${cy}px,0px)`;
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

console.log(progressbar);
progressbar.onload = function () {
  progressbar.style.width = "50%";
};
