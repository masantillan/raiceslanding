  // --- Nav: fondo sólido al scrollear ---
  const header = document.getElementById('site-header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  });

  // --- Menú mobile (checkbox + sincronizado con el botón hamburguesa) ---
  const menuToggle = document.getElementById('menuToggle');
  const burgerBtn = document.getElementById('burgerBtn');
  burgerBtn.addEventListener('click', () => {
    menuToggle.checked = !menuToggle.checked;
    burgerBtn.setAttribute('aria-expanded', menuToggle.checked);
  });
  document.querySelectorAll('#navLinks a').forEach(a => a.addEventListener('click', () => {
    menuToggle.checked = false;
    burgerBtn.setAttribute('aria-expanded', false);
  }));

  // --- Filtro de categorías en Viandas ---
  const tabs = document.querySelectorAll('#tabs .cat-tab');
  const cards = document.querySelectorAll('#viandasGrid .card');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const filter = tab.dataset.filter;
      cards.forEach(card => {
        const show = filter === 'all' || card.dataset.cat === filter;
        card.classList.toggle('hide', !show);
      });
    });
  });

  // --- Botón "Pedir por WhatsApp" de cada card: arma el link con el nombre del plato ---
  function pedir(nombrePlato){
    const texto = encodeURIComponent('Hola! Quiero pedir: ' + nombrePlato);
    window.open('https://wa.me/5491100000000?text=' + texto, '_blank', 'noopener');
  }

  // --- Reveal on scroll ---
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('in'));
  }
