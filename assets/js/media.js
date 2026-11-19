(() => {
  const script=document.querySelector('script[src$="media-config.js"]');
  if(!script) return;
  const root=new URL('../../',script.src);
  function url(value){
    if(typeof value!=='string'||!value.trim()) return null;
    const result=new URL(value,root);
    return ['https:','http:','file:'].includes(result.protocol)?result.href:null;
  }
  document.querySelectorAll('[data-media-slot]').forEach(slot=>{
    const config=(window.PORTFOLIO_MEDIA||{})[slot.dataset.mediaSlot];
    if(!config) return;
    let content;
    if(config.type==='image'&&url(config.src)){
      const image=document.createElement('img');image.src=url(config.src);image.alt=config.alt||config.caption||'Project photograph';image.loading='lazy';image.width=1600;image.height=1000;
      content=document.createElement('button');content.className='zoom';content.dataset.lightbox='';content.setAttribute('aria-label','Enlarge '+image.alt);content.append(image);
    } else if(config.type==='video'&&url(config.src)){
      content=document.createElement('video');content.controls=true;content.preload='none';content.playsInline=true;content.className='media-video';content.src=url(config.src);if(url(config.poster)) content.poster=url(config.poster);
      if(url(config.captions)){const track=document.createElement('track');track.kind='captions';track.src=url(config.captions);track.srclang='en';track.label='English';content.append(track);}
    } else if(config.type==='youtube'&&/^[a-zA-Z0-9_-]{11}$/.test(config.id)){
      content=document.createElement('button');content.className='video-facade';content.setAttribute('aria-label','Load video: '+(config.caption||'Project demonstration'));
      if(url(config.poster)){const poster=document.createElement('img');poster.src=url(config.poster);poster.alt='';content.append(poster);}
      const label=document.createElement('span');label.textContent='Play demonstration';content.append(label);
      content.addEventListener('click',()=>{const frame=document.createElement('iframe');frame.src='https://www.youtube-nocookie.com/embed/'+config.id;frame.title=config.caption||'Project demonstration';frame.allowFullscreen=true;frame.allow='encrypted-media; picture-in-picture';content.replaceWith(frame);});
    } else return;
    slot.replaceChildren(content);slot.className='diagram';slot.removeAttribute('data-placeholder');
    const caption=document.createElement('figcaption');caption.textContent=config.caption||config.alt||'Project media';slot.append(caption);
  });
})();
