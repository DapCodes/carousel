const container = document.getElementById('container');
const indicator = document.getElementById('swipe-indicator');

// SWIPE scroll
let isDragging = false;
let startX;
let scrollLeft;

container.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.pageX - container.offsetLeft;
  scrollLeft = container.scrollLeft;
});

container.addEventListener('mouseleave', () => {
  isDragging = false;
});

container.addEventListener('mouseup', () => {
  isDragging = false;
});

container.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - container.offsetLeft;
  const walk = (x - startX) * 1;
  container.scrollLeft = scrollLeft - walk;
});

// TOUCH
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

// Hilangkan indikator swipe
setTimeout(() => {
  indicator.style.opacity = "0";
  indicator.style.transition = "opacity 0.5s ease-out";
}, 4000);

// EVENT stiker klik
const stickers = document.querySelectorAll('.sticker');
stickers.forEach((sticker) => {
  sticker.addEventListener('click', () => {
    // Tambahkan animasi
    sticker.classList.add('clicked');
    setTimeout(() => {
      sticker.classList.remove('clicked');
    }, 400);

    // Tampilkan alert dengan data-info
    const info = sticker.getAttribute('data-info');
    alert(info);
  });
});
