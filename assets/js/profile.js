(() => {
  const filters = document.querySelectorAll('[data-filter]');
  filters.forEach(button => button.addEventListener('click', () => {
    filters.forEach(other => { const active = other === button; other.classList.toggle('active',active); other.setAttribute('aria-pressed',String(active)); });
    let count=0;
    document.querySelectorAll('[data-category]').forEach(card => {
      const show=button.dataset.filter==='all'||card.dataset.category===button.dataset.filter||card.dataset.degree===button.dataset.filter;
      card.hidden=!show; if(show) count++;
    });
    const status=document.querySelector('.filter-feedback');
    if(status) status.textContent=`${count} project${count===1?'':'s'} shown`;
  }));
  document.querySelectorAll('.copy-citation').forEach(button => button.addEventListener('click', async () => {
    const status=document.querySelector('.citation-feedback');
    try { await navigator.clipboard.writeText(button.dataset.citation); status.textContent='Citation copied to clipboard.'; }
    catch { button.closest('article').querySelector('details').open=true; status.textContent='Select and copy the citation shown below the article.'; }
  }));
})();
