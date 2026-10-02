/* Local, dependency-free interactions. No analytics, network form submission or uploads. */
(() => {
  'use strict';
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const dictionary = window.UNITY_TRANSLATIONS;
  let language = 'en';
  let currentIndustry = 'automation';
  let selectedFiles = [];
  let lastDraft = '';
  let lastDraftSubject = '';
  let lightboxItems = [];
  let lightboxIndex = 0;
  let lightboxTrigger = null;
  const extra = {
    en: {remove:'Remove', invalid:'Please choose PDF, DXF, DWG, STEP, STP, IGS or IGES files.', draft:'Your email draft is ready. Nothing has been sent. Attach the drawings in your email app, then review and send.', copied:'Quotation details copied. Paste them into your email and attach your drawings.', copyFailed:'Select and copy the quotation details below, then paste them into your email.', previous:'Previous image', next:'Next image', nav:'Main navigation', mobileNav:'Mobile navigation', filter:'Gallery filter', tabs:'Industries', quote:'quotation', files:'Drawings to attach manually', none:'Not specified', noFiles:'No drawings selected', service:'Service', material:'Material', quantity:'Quantity', project:'Project details', name:'Name', company:'Company', email:'Email', phone:'Phone / WhatsApp', instruction:'Please attach the drawing files listed below before sending this email.', subject:'Quotation request', greeting:'Hello UNITY FABRICATE,\n\nI would like to request a quotation for a metal fabrication job.', thanks:'Thank you.'},
    zh: {remove:'移除', invalid:'请选择 PDF、DXF、DWG、STEP、STP、IGS 或 IGES 格式的文件。', draft:'邮件草稿已准备好，尚未发送任何内容。请在邮件应用中添加图纸附件，检查后发送。', copied:'询价内容已复制。请粘贴至邮件并添加图纸附件。', copyFailed:'请选中并复制下方询价内容，再粘贴至您的邮件中。', previous:'上一张图片', next:'下一张图片', nav:'主导航', mobileNav:'移动端导航', filter:'图库分类', tabs:'应用行业', quote:'询价', files:'需手动添加的图纸附件', none:'未填写', noFiles:'未选择图纸', service:'所需服务', material:'材料', quantity:'数量', project:'项目详情', name:'姓名', company:'公司名称', email:'电子邮箱', phone:'电话 / WhatsApp', instruction:'发送前，请手动添加下方列出的图纸文件。', subject:'金属加工询价', greeting:'您好，UNITY FABRICATE 团队：\n\n我想咨询金属加工项目的报价。', thanks:'谢谢。'}
  };
  const industryData = {
    automation: {image:'laser-cut-steel-components', code:'01', en:['PARTS THAT KEEP\nIDEAS MOVING.','Keep brackets, guards and mounting plates in one fabrication brief. Share your design for prototype or batch requirements.',['Custom brackets','Machine guards','Mounting plates','Frames'],'Discuss your automation parts'], zh:['让创意，\n成为运转的设备。','将支架、防护罩与安装板集中对接；按设计沟通样品或批量加工需求。',['定制支架','设备防护罩','安装板','金属框架'],'沟通自动化零件需求']},
    machinery: {image:'precision-machined-components',code:'02',en:['MADE TO FIT.\nREADY TO WORK.','Machined and fabricated components for machinery, packaging equipment and engineered assemblies.',['Shafts & flanges','Bushes & sleeves','Mounting brackets','Sheet metal parts'],'Discuss your machinery parts'],zh:['贴合设计，\n服务设备。','为机械、包装设备及工程组件提供机加工与钣金定制零件。',['轴与法兰','衬套与套筒','安装支架','钣金零件'],'沟通机械零件需求']},
    construction: {image:'cable-tray-corner',code:'03',en:['BUILT AROUND\nYOUR SITE.','Construction metalwork shaped around your drawings, specifications and installation needs.',['Cable trays','Water stop plates','CNC bending parts','Wall ties'],'Discuss your construction products'],zh:['围绕现场，\n配套工程。','按图纸、规格与安装需求，为建筑工程加工金属配套产品。',['电缆桥架','止水钢板','数控折弯件','穿墙丝'],'沟通建筑产品需求']},
    me: {image:'formed-sheet-metal',code:'04',en:['THE SUPPORT\nBEHIND THE SYSTEM.','Metal components for mechanical and electrical installation, building services and equipment support.',['Cable tray accessories','Support brackets','Box covers','Custom bent parts'],'Discuss your M&E requirements'],zh:['为系统，\n提供坚实支撑。','为机电安装、楼宇配套与设备支撑提供金属组件。',['桥架配件','支撑件','箱体盖板','定制折弯件'],'沟通机电配套需求']},
    maintenance: {image:'turned-metal-components',code:'05',en:['KEEP YOUR\nOPERATION MOVING.','Discuss replacement and custom parts for machinery maintenance. Drawings, hand sketches and physical samples can help define the job.',['Replacement shafts','Bushes & sleeves','Custom plates','Equipment brackets'],'Discuss your maintenance parts'],zh:['让设备，\n持续运转。','欢迎咨询设备维修替换件与定制零件，可通过图纸、手绘图或实物样品沟通需求。',['替换轴件','衬套与套筒','定制板件','设备支架'],'沟通维修零件需求']},
    custom: {image:'sheet-metal-component-selection',code:'06',en:['YOUR DRAWING.\nOUR STARTING POINT.','Start with your drawing—even for a small batch. Tell us the material, quantity and the details that matter to your assembly.',['Prototype samples','Custom metal profiles','Bent components','Fabricated assemblies'],'Discuss your custom project'],zh:['您的图纸，\n我们的起点。','从您的图纸开始，小批量也可沟通。告诉我们材料、数量及装配所需的重要细节。',['样品打样','定制金属轮廓件','折弯件','金属加工组件'],'沟通定制项目需求']}
  };
  const assetDimensions = Object.fromEntries(Object.values(industryData).map(data => [data.image, [1536, 1024]]));
  const tr = key => dictionary[language][key] ?? key;
  const ui = key => extra[language][key];

  function updateIndustry() {
    const data = industryData[currentIndustry];
    const [title, description, examples, cta] = data[language];
    $$('.industry-tabs button').forEach(button => {
      const active = button.dataset.industry === currentIndustry;
      button.setAttribute('aria-selected', String(active));
      button.tabIndex = active ? 0 : -1;
    });
    $('#industry-panel').setAttribute('aria-labelledby', `tab-${currentIndustry}`);
    $('#industry-code').textContent = data.code;
    $('#industry-kicker').textContent = tr(`industry_${currentIndustry}`);
    $('#industry-title').textContent = title;
    $('#industry-description').textContent = description;
    $('#industry-examples').replaceChildren(...examples.map(text => {
      const li = document.createElement('li'); li.textContent = text; return li;
    }));
    $('#industry-cta span').textContent = cta;
    const image = $('.industry-visual');
    const [width,height] = assetDimensions[data.image];
    image.src = `assets/images/web-v2/${data.image}.webp`;
    image.srcset = `assets/images/web-v2/${data.image}-480.webp 480w, assets/images/web-v2/${data.image}-800.webp 800w, assets/images/web-v2/${data.image}.webp ${width}w`;
    image.width=width; image.height=height;
    image.dataset.alt = `alt_${data.image}`;
    image.alt = tr(image.dataset.alt);
  }

  function setLanguage(next, save = true) {
    language = next === 'zh' ? 'zh' : 'en';
    document.documentElement.lang = language === 'zh' ? 'zh-Hans' : 'en';
    $$('[data-i18n]').forEach(el => { el.textContent = tr(el.dataset.i18n); });
    $$('[data-alt]').forEach(el => { el.alt = tr(el.dataset.alt); });
    $$('[data-lang]').forEach(el => el.setAttribute('aria-pressed', String(el.dataset.lang === language)));
    $('.desktop-nav').setAttribute('aria-label', ui('nav'));
    $('.mobile-menu nav').setAttribute('aria-label', ui('mobileNav'));
    $('.mobile-menu').setAttribute('aria-label', ui('mobileNav'));
    $('.menu-toggle').setAttribute('aria-label', tr('menu'));
    $('.industry-tabs').setAttribute('aria-label', ui('tabs'));
    $('.gallery-filters').setAttribute('aria-label', ui('filter'));
    $('#lightbox-prev').setAttribute('aria-label', ui('previous'));
    $('#lightbox-next').setAttribute('aria-label', ui('next'));
    $$('.round-link').forEach(link => link.setAttribute('aria-label', `${tr(`${link.dataset.service}title`)} ${ui('quote')}`));
    document.title = language === 'zh' ? 'UNITY FABRICATE 联力金属制造 | 马来西亚激光切割与钣金加工' : 'UNITY FABRICATE | Laser Cutting & Sheet Metal Fabrication Malaysia';
    const description = language === 'zh' ? '联力金属制造位于马来西亚雪兰莪，提供激光切割、钣金加工、CNC 金属零件及定制金属加工服务。' : 'UNITY FABRICATE provides laser cutting, sheet metal fabrication, CNC metal parts and custom metal manufacturing services in Selangor, Malaysia.';
    $('meta[name=description]').content = description;
    $('meta[property="og:title"]').content = document.title;
    $('meta[property="og:description"]').content = description;
    $('meta[property="og:locale"]').content = language === 'zh' ? 'zh_CN' : 'en_MY';
    $('meta[property="og:locale:alternate"]').content = language === 'zh' ? 'en_MY' : 'zh_CN';
    $('meta[name="twitter:title"]').content = document.title;
    $('meta[name="twitter:description"]').content = description;
    updateIndustry(); renderFiles();
    if (!$('#draft-result').hidden) {
      // Regenerate a visible draft from current fields, without reopening the email app.
      prepareDraft(false);
    }
    if ($('#lightbox').open) showLightboxImage();
    if(save) {try {localStorage.setItem('unity-language',language);} catch (_) { /* Storage is optional. */ }}
  }
  $$('[data-lang]').forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
  $$('.industry-tabs button').forEach(button => {
    button.addEventListener('click', () => {currentIndustry=button.dataset.industry;updateIndustry();});
    button.addEventListener('keydown', event => {
      const buttons=$$('.industry-tabs button');let next=buttons.indexOf(button);
      if(event.key==='ArrowRight') next=(next+1)%buttons.length;
      else if(event.key==='ArrowLeft') next=(next-1+buttons.length)%buttons.length;
      else if(event.key==='Home') next=0;
      else if(event.key==='End') next=buttons.length-1;
      else return;
      event.preventDefault(); buttons[next].click(); buttons[next].focus();
    });
  });
  $('#industry-cta').addEventListener('click', () => {
    $('#service').value = ({automation:'sheet',machinery:'cnc',construction:'construction',me:'sheet',maintenance:'cnc',custom:'other'})[currentIndustry];
  });
  $$('[data-service]').forEach(link => link.addEventListener('click', () => {$('#service').value=link.dataset.service;}));

  // Native dialog supplies keyboard focus containment and Escape handling.
  const menu=$('#mobile-menu'); const menuButton=$('.menu-toggle');
  function closeMenu() {menu.close();menuButton.setAttribute('aria-expanded','false');}
  menuButton.addEventListener('click', () => {menu.showModal();menuButton.setAttribute('aria-expanded','true');});
  $('.close-menu').addEventListener('click', closeMenu);
  menu.addEventListener('close', () => menuButton.setAttribute('aria-expanded','false'));
  $$('a',menu).forEach(link=>link.addEventListener('click',()=>{
    closeMenu(); const target=$(link.getAttribute('href'));
    if(target){target.setAttribute('tabindex','-1');target.focus({preventScroll:true});}
  }));
  window.matchMedia('(min-width:901px)').addEventListener('change', e => {if(e.matches && menu.open)closeMenu();});

  $$('.gallery-filters button').forEach(button => button.addEventListener('click', () => {
    const filter=button.dataset.filter;
    $$('.gallery-filters button').forEach(b => b.setAttribute('aria-pressed',String(b===button)));
    $$('.gallery-item').forEach(item => {item.hidden=filter!=='all'&&item.dataset.category!==filter;});
  }));
  const lightbox=$('#lightbox');
  function showLightboxImage() {
    const item=lightboxItems[lightboxIndex];
    $('#lightbox-image').src=`assets/images/web-v2/${item.dataset.lightbox}.webp`;
    $('#lightbox-image').alt=tr(`alt_${item.dataset.lightbox}`);
    $('#lightbox-caption').textContent=tr(item.dataset.caption);
    $('#lightbox-counter').textContent=`${lightboxIndex+1} / ${lightboxItems.length}`;
  }
  $$('.gallery-item').forEach(item => item.addEventListener('click', () => {
    lightboxTrigger=item;lightboxItems=$$('.gallery-item:not([hidden])');lightboxIndex=lightboxItems.indexOf(item);
    showLightboxImage();lightbox.showModal();
  }));
  function moveLightbox(direction){lightboxIndex=(lightboxIndex+direction+lightboxItems.length)%lightboxItems.length;showLightboxImage();}
  $('#lightbox-close').addEventListener('click',()=>lightbox.close());
  $('#lightbox-prev').addEventListener('click',()=>moveLightbox(-1));
  $('#lightbox-next').addEventListener('click',()=>moveLightbox(1));
  lightbox.addEventListener('keydown',event=>{
    if(event.key==='ArrowRight'){event.preventDefault();moveLightbox(1);}
    if(event.key==='ArrowLeft'){event.preventDefault();moveLightbox(-1);}
  });
  lightbox.addEventListener('click',event=>{if(event.target===lightbox){const r=lightbox.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)lightbox.close();}});
  lightbox.addEventListener('close',()=>lightboxTrigger?.focus({preventScroll:true}));

  // Only file metadata is held in memory. File bytes are never read or transmitted.
  const allowed=/\.(pdf|dxf|dwg|step|stp|igs|iges)$/i;
  function acceptFiles(files){
    let invalid=false;
    for(const file of files){
      if(!allowed.test(file.name)){invalid=true;continue;}
      if(!selectedFiles.some(f=>f.name===file.name&&f.size===file.size))selectedFiles.push({name:file.name,size:file.size});
    }
    $('#file-error').textContent=invalid?ui('invalid'):'';
    $('#drawings').value='';renderFiles();
    $('#draft-result').hidden=true;
  }
  function renderFiles(){
    $('#file-list').replaceChildren(...selectedFiles.map((file,index)=>{
      const li=document.createElement('li');const text=document.createElement('span');
      text.textContent=`${file.name} · ${Math.max(1,Math.round(file.size/1024))} KB`;
      const remove=document.createElement('button');remove.type='button';remove.textContent='×';remove.setAttribute('aria-label',`${ui('remove')} ${file.name}`);
      remove.addEventListener('click',()=>{selectedFiles.splice(index,1);renderFiles();$('#draft-result').hidden=true;$('#drawings').focus();});
      li.append(text,remove);return li;
    }));
    if($('#file-error').textContent)$('#file-error').textContent=ui('invalid');
  }
  $('#drawings').addEventListener('change',event=>acceptFiles(event.target.files));
  const drop=$('#file-drop');
  ['dragenter','dragover'].forEach(type=>drop.addEventListener(type,event=>{event.preventDefault();drop.classList.add('dragover');}));
  ['dragleave','drop'].forEach(type=>drop.addEventListener(type,event=>{event.preventDefault();drop.classList.remove('dragover');}));
  drop.addEventListener('drop',event=>acceptFiles(event.dataTransfer.files));
  // Stop the browser from navigating away if a drawing is dropped outside the target.
  window.addEventListener('dragover',e=>{if(e.dataTransfer.types.includes('Files'))e.preventDefault();});
  window.addEventListener('drop',e=>{if(e.dataTransfer.types.includes('Files'))e.preventDefault();});
  function prepareDraft(open){
    const values=Object.fromEntries(new FormData($('#quote-form')).entries());
    const service=tr(`option_service_${values.service}`);const material=values.material?tr(`option_material_${values.material}`):ui('none');
    lastDraftSubject=`${ui('subject')} — ${service}${values.company?' — '+values.company:''}`;
    lastDraft=[ui('greeting'),'',`${ui('name')}: ${values.name}`,`${ui('company')}: ${values.company||ui('none')}`,`${ui('email')}: ${values.email}`,`${ui('phone')}: ${values.phone||ui('none')}`,'',`${ui('service')}: ${service}`,`${ui('material')}: ${material}`,`${ui('quantity')}: ${values.quantity||ui('none')}`,'',`${ui('project')}:`,values.message,'',`${ui('files')}:`,selectedFiles.length?selectedFiles.map(f=>`- ${f.name}`).join('\n'):ui('noFiles'),'',ui('instruction'),'',ui('thanks')].join('\n');
    const mailto=`mailto:unityfabricate@gmail.com?cc=ericong8882%40gmail.com&subject=${encodeURIComponent(lastDraftSubject)}&body=${encodeURIComponent(lastDraft)}`;
    $('#draft-link').href=mailto;$('#draft-preview').textContent=lastDraft;$('#draft-status').textContent=ui('draft');$('#draft-result').hidden=false;
    if(open){$('#draft-status').focus({preventScroll:true});window.location.href=mailto;}
  }
  $('#quote-form').addEventListener('submit',event=>{event.preventDefault();if($('#quote-form').reportValidity())prepareDraft(true);});
  $('#quote-form').addEventListener('input',()=>{$('#draft-result').hidden=true;});
  $('#copy-draft').addEventListener('click',async()=>{
    try{await navigator.clipboard.writeText(`${lastDraftSubject}\n\n${lastDraft}`);$('#draft-status').textContent=ui('copied');}
    catch(_){$('#draft-status').textContent=ui('copyFailed');const selection=window.getSelection();const range=document.createRange();range.selectNodeContents($('#draft-preview'));selection.removeAllRanges();selection.addRange(range);}
  });

  if('IntersectionObserver' in window){
    const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if(!reduced){
      document.documentElement.classList.add('js');
      const reveals=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.remove('pending');reveals.unobserve(entry.target);}}),{threshold:.07});
      $$('.reveal').forEach(el=>{el.classList.add('pending');reveals.observe(el);});
    }
    const navObserver=new IntersectionObserver(entries=>{
      const active=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
      if(active)$$('.desktop-nav a').forEach(link=>{const selected=link.hash===`#${active.target.id}`;link.classList.toggle('active',selected);if(selected)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');});
    },{rootMargin:'-15% 0px -60% 0px',threshold:0});
    $$('main section[id]').forEach(section=>navObserver.observe(section));
  }
  try{const saved=localStorage.getItem('unity-language');if(saved==='zh')language='zh';}catch(_){/* File URLs and private sessions may disallow storage. */}
  setLanguage(language,false);
})();
