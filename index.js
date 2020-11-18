// Your code here
function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}
document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});

// Your code here
function moveDodgerRight() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left + 1}px`;
  }
}
document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});
///////////////////////////////////////////
function moveDodgerUp() {
  let leftNumbers = dodger.style.bottom.replace("px", "");
  let bottom = parseInt(leftNumbers, 10);

  if (bottom >= 0) {
    dodger.style.bottom = `${bottom + 1}px`;
  }
}
document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowUp") {
    moveDodgerUp();
  }
});
//////////////////////////
function moveDodgerDown() {
  let leftNumbers = dodger.style.bottom.replace("px", "");
  let bottom = parseInt(leftNumbers, 10);

  if (bottom >= 0) {
    dodger.style.bottom = `${bottom - 1}px`;
  }
}
document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowDown") {
    moveDodgerDown();
  }
});
