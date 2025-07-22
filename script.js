
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.progress').forEach(bar => {
        const skill = bar.getAttribute('data-skill');
        bar.style.width = skill + '%';
    });
});
const toggleBtn = document.getElementById('menu-toggle');
  const navList = document.querySelector('nav ul');

  toggleBtn.addEventListener('click', () => {
      navList.classList.toggle('active');
  });
