const container = document.getElementById('container');

let isDown = false;
let startX;
let scrollLeft;

container.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX - container.scrollLeft;
});

container.addEventListener('mouseleave', () => {
  isDown = false;
});

container.addEventListener('mouseup', () => {
  isDown = false;
});

container.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX;
  container.scrollLeft = startX - x;
});

// Touch support for mobile
let touchStartX = 0;
let touchScrollLeft = 0;

container.addEventListener('touchstart', (e) => {
  touchStartX = e.touches[0].pageX;
  touchScrollLeft = container.scrollLeft;
});

container.addEventListener('touchmove', (e) => {
  const x = e.touches[0].pageX;
  const walk = touchStartX - x;
  container.scrollLeft = touchScrollLeft + walk;
});