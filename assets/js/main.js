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
  document.addEventListener('click', event => {
    const button = event.target.closest('[data-lightbox]');
    if (!button) return;
    opener = button;
    const image = button.querySelector('img');
    modal.querySelector('img').src = image.src;
    modal.querySelector('img').alt = image.alt;
    modal.querySelector('p').textContent = button.closest('figure').querySelector('figcaption')?.textContent || image.alt;
    modal.showModal();
  });
  modal.querySelector('.close').addEventListener('click', () => modal.close());
  modal.addEventListener('click', e => { if (e.target === modal) modal.close(); });
  modal.addEventListener('close', () => opener?.focus());
})();
