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
