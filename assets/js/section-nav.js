(() => {
  const headings = [...document.querySelectorAll('main h2')];
  if (!headings.length) return;
  const labels = {
    '/': ['Featured projects', 'About me', 'Engineering skills', 'Experience', 'Education', 'Publications', 'Contact'],
    '/about/': ['Profile', 'Engineering approach', 'Skills in practice', 'Education', 'Teaching & communication', 'Contact'],
    '/experience/': ['University of Tennessee', 'CSIR–CMERI', 'SKUAST-K', 'Barnstorm Agtech', 'IIT Bombay', 'Industry training', 'Certifications', 'Contact'],
    '/publications/': ['Digital twin review', 'SRI nursery research', 'Research interests', 'Contact'],
    '/projects/': ['Pest trap service robot', 'CO₂ sensor', 'Rice transplanting', 'Precision agriculture', 'Tractor linkage', 'Litchi decorticator', 'Contact'],
    '/projects/pest-trap-robot/': ['The problem', 'My contribution', 'Perception pipeline', 'Progress & next steps', 'Photos & videos', 'Related project'],
    '/projects/ghg-sensor/': ['The problem', 'My contribution', 'System design', 'Validation', 'Photos & videos', 'Related project'],
    '/projects/earlier-work/': ['Rice transplanting', 'Precision agriculture', 'Tractor linkage', 'Litchi decorticator', 'Industry training', 'Engineering tools']
  };
  const path = location.pathname.replace(/index\.html$/, '');
  const rail = document.createElement('aside');
  rail.className = 'section-nav';
  rail.setAttribute('aria-label', 'Page sections');
  const toggle = document.createElement('button');
  toggle.className = 'section-nav-toggle';
  toggle.textContent = 'On this page';
  toggle.setAttribute('aria-controls', 'section-nav-links');
  const title = document.createElement('p');
  title.className = 'section-nav-title';
  title.textContent = 'On this page';
  const list = document.createElement('ul');
  list.id = 'section-nav-links';
  const top = document.createElement('li');
  const topLink = document.createElement('a');
  const hero = document.querySelector('main h1');
  if (hero && !hero.id) hero.id = 'page-overview';
  topLink.href = '#' + (hero?.id || 'main');
  topLink.textContent = 'Overview';
  top.append(topLink); list.append(top);
  const links = headings.map((heading, i) => {
    if (!heading.id) heading.id = 'topic-' + (i + 1);
    const li = document.createElement('li');
    const link = document.createElement('a');
    link.href = '#' + heading.id;
    link.textContent = labels[path]?.[i] || heading.textContent;
    li.append(link); list.append(li);
    return link;
  });
  rail.append(title, toggle, list);
  document.querySelector('main').before(rail);
  document.body.classList.add('has-section-nav');
  const desktop = matchMedia('(min-width: 1200px)');
  function close() { rail.classList.remove('expanded'); toggle.setAttribute('aria-expanded', 'false'); }
  close();
  toggle.addEventListener('click', () => {
    const open = rail.classList.toggle('expanded');
    toggle.setAttribute('aria-expanded', String(open));
  });
  rail.addEventListener('keydown', e => { if (e.key === 'Escape') { close(); toggle.focus(); } });
  const allLinks = [topLink, ...links];
  allLinks.forEach(link => link.addEventListener('click', () => {
    if (!desktop.matches) close();
    const target = document.getElementById(link.hash.slice(1));
    if (target) { target.setAttribute('tabindex', '-1'); target.focus({preventScroll: true}); }
  }));
  let pending = false;
  function update() {
    const visible = headings.filter(h => h.getClientRects().length);
    let active = hero;
    visible.forEach(h => { if (h.getBoundingClientRect().top <= 180) active = h; });
    if (innerHeight + scrollY >= document.documentElement.scrollHeight - 8 && visible.length) active = visible.at(-1);
    allLinks.forEach(link => {
      const selected = link.hash === '#' + active?.id;
      if (selected) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current');
      const target = document.getElementById(link.hash.slice(1));
      link.parentElement.hidden = !target?.getClientRects().length;
    });
    pending = false;
  }
  addEventListener('scroll', () => { if (!pending) { pending = true; requestAnimationFrame(update); } }, {passive:true});
  addEventListener('resize', update);
  document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => requestAnimationFrame(update)));
  update();
})();
