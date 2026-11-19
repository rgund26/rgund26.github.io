(() => {
  const menu = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#navigation');
  function closeMenu() { nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); }
  menu.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && nav.classList.contains('open')) { closeMenu(); menu.focus(); }
  });
  const modal = document.querySelector('#lightbox');
  let opener;
  document.querySelectorAll('[data-lightbox]').forEach(button => {
    button.addEventListener('click', () => {
      opener = button;
      const image = button.querySelector('img');
      modal.querySelector('img').src = image.src;
      modal.querySelector('img').alt = image.alt;
      modal.querySelector('p').textContent = button.closest('figure').querySelector('figcaption').childNodes[0].textContent;
      modal.showModal();
    });
  });
  modal.querySelector('.close').addEventListener('click', () => modal.close());
  modal.addEventListener('click', e => { if (e.target === modal) modal.close(); });
  modal.addEventListener('close', () => opener?.focus());
})();
