(() => {
  const sheet=document.querySelector('#contact-sheet');
  const opener=document.querySelector('#app-contact');
  opener.addEventListener('click',()=>sheet.showModal());
  document.querySelector('#sheet-close').addEventListener('click',()=>sheet.close());
  sheet.addEventListener('click',event=>{if(event.target===sheet){const r=sheet.getBoundingClientRect();if(event.clientY<r.top||event.clientX<r.left||event.clientX>r.right)sheet.close();}});
  sheet.querySelector('.sheet-detail').addEventListener('click',()=>sheet.close());
  const links=[...document.querySelectorAll('[data-app-section]')];
  const sections=[...document.querySelectorAll('main>section[id]')];
  let scheduled=false;
  function update(){scheduled=false;let current='home';for(const section of sections){if(section.getBoundingClientRect().top<=180)current=section.id;}const mapped=['about','industries','construction'].includes(current)?'capabilities':current;links.forEach(link=>{if(link.dataset.appSection===mapped)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');});opener.classList.toggle('active',current==='contact');}
  addEventListener('scroll',()=>{if(!scheduled){scheduled=true;requestAnimationFrame(update);}},{passive:true});update();
  // Keep focused fields clear of browser keyboards and the fixed navigation.
  if(window.visualViewport){const syncKeyboard=()=>{document.querySelector('.app-nav').style.visibility=window.innerHeight-window.visualViewport.height>150&&/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)?'hidden':'';};window.visualViewport.addEventListener('resize',syncKeyboard);document.addEventListener('focusout',()=>requestAnimationFrame(syncKeyboard));}
})();
