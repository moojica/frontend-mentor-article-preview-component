const tooltip = document.querySelector('.tooltip');

tooltip.addEventListener('click', function (e) {
  e.stopPropagation();
  this.classList.toggle('active');
});

document.addEventListener('click', function (e) {
  // Check if the click was outside the tooltip
  if (!tooltip.contains(e.target)) {
    // If it was outside, remove the active class
    tooltip.classList.remove('active');
  }
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    tooltip.classList.remove('active');
  }
});
