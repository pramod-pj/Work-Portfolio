document.getElementById('year').textContent = new Date().getFullYear();

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// Lightbox for project images
document.querySelectorAll('.project-card img').forEach(img => {
  img.onclick = () => {
    const overlay = document.createElement('div');
    overlay.style.cssText = `
      position:fixed;
      inset:0;
      background:rgba(0,0,0,0.8);
      display:flex;
      align-items:center;
      justify-content:center;
      z-index:1000;
    `;
    const clone = img.cloneNode();
    clone.style.maxWidth = '90%';
    clone.style.maxHeight = '90%';
    overlay.appendChild(clone);
    overlay.onclick = () => overlay.remove();
    document.body.appendChild(overlay);
  };
});
