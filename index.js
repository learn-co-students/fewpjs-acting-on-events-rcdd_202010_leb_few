// Your code here
let dodger = document.getElementById('dodger');

function moveDodgerLeft() {
  let nmb = dodger.style.left.replace('px', '');
  let left = parseInt(nmb, 10)
  if (left > 0) {
    dodger.style.left = `${left - 1}px`
  }
}

function moveDodgerRight() {
  let nmb = dodger.style.left.replace('px', '');
  let left = parseInt(nmb, 10)
  if (left > 0) {
    dodger.style.left = `${left + 1}px`
  }
}

document.addEventListener('keydown', (e) => {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft()
  }
})

document.addEventListener('keydown', (e) => {
  if (e.key === "ArrowRight") {
    moveDodgerRight()
  }
})