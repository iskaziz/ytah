const header = document.getElementById('siteHeader');
const menuBtn = document.querySelector('.menu-toggle');
const nav = document.getElementById('primaryNav');

function updateHeader(){ header?.classList.toggle('scrolled', window.scrollY > 40 || header.classList.contains('inner-header')); }
updateHeader();
window.addEventListener('scroll', updateHeader, {passive:true});
function closeMenu(returnFocus = false){
  nav?.classList.remove('open');
  menuBtn?.setAttribute('aria-expanded', 'false');
  menuBtn?.setAttribute('aria-label', 'Open navigation');
  if(returnFocus) menuBtn?.focus();
}
menuBtn?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(open));
  menuBtn.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => closeMenu()));
document.addEventListener('keydown', e => {if(e.key === 'Escape' && nav?.classList.contains('open')) closeMenu(true);});
document.addEventListener('click', e => {if(header && !header.contains(e.target)) closeMenu();});
header?.addEventListener('focusout', () => {setTimeout(() => {if(!header.contains(document.activeElement)) closeMenu();},0);});
window.matchMedia('(min-width:1101px)').addEventListener('change', () => closeMenu());
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => { if(entry.isIntersecting){ entry.target.classList.add('in-view'); revealObserver.unobserve(entry.target); } });
  },{threshold:0,rootMargin:'0px 0px 30px 0px'});
  document.querySelectorAll('.reveal').forEach(el => {el.classList.add('reveal-pending');revealObserver.observe(el);});
}

const timelineData = {
  1955:['Called to the English Bar','Tun Abdul Hamid was called to the English Bar as a Barrister-at-Law of The Honourable Society of Lincoln’s Inn, London.'],
  1968:['Appointed to the High Court','Tun Abdul Hamid was appointed a judge of the High Court of Malaya.'],
  1994:['Retirement as Chief Justice','He retired as Chief Justice of the Federal Court of Malaysia after a distinguished judicial career.'],
  1996:['YTAH established','Yayasan Tun Abdul Hamid was established on 9 November 1996 to honour its founder and further legal education, alongside humanitarian objectives.'],
  1997:['CLP prize sponsorship begins','YTAH began its long-running sponsorship of the Best Overall Student prize for the Certificate in Legal Practice examinations.'],
  2006:['Continuity recorded','A letter composed and signed by Tun Abdul Hamid recorded his intention that his eldest son, Azizuddin, join the Board to help ensure continuity of the Yayasan’s work and objects.'],
  2009:['A legacy carried forward','Tun Abdul Hamid died on 1 September 2009 after chairing YTAH from its inception. The foundation continued under the stewardship of the next generation.'],
  2026:['Thirty years of service','YTAH marks three decades of legal education, academic recognition and practical charitable assistance.']
};
const yearEl = document.getElementById('timelineYear');
const headingEl = document.getElementById('timelineHeading');
const textEl = document.getElementById('timelineText');
const tabs = [...document.querySelectorAll('.timeline-dot')];
const panel = document.querySelector('.timeline-detail');
if(panel){panel.id='timelinePanel';panel.setAttribute('role','tabpanel');panel.tabIndex=0;}
function selectYear(btn){
  tabs.forEach(b => {const active=b===btn;b.classList.toggle('active',active);b.setAttribute('aria-selected',String(active));b.tabIndex=active?0:-1;});
  const y=btn.dataset.year;const [h,t]=timelineData[y];
  yearEl.textContent=y;headingEl.textContent=h;textEl.textContent=t;
  panel?.setAttribute('aria-labelledby',btn.id);
}
tabs.forEach((btn,i) => {
  btn.id='year-'+btn.dataset.year;btn.setAttribute('aria-controls','timelinePanel');
  btn.tabIndex=btn.classList.contains('active')?0:-1;
  if(btn.tabIndex===0) panel?.setAttribute('aria-labelledby',btn.id);
  btn.addEventListener('click',()=>selectYear(btn));
  btn.addEventListener('keydown',e=>{
    let next;
    if(e.key==='ArrowRight')next=(i+1)%tabs.length;
    if(e.key==='ArrowLeft')next=(i+tabs.length-1)%tabs.length;
    if(e.key==='Home')next=0;
    if(e.key==='End')next=tabs.length-1;
    if(next!==undefined){e.preventDefault();selectYear(tabs[next]);tabs[next].focus();}
  });
});
const filters = document.querySelectorAll('.filter');
const stories = document.querySelectorAll('.story');
filters.forEach(btn => {
  btn.setAttribute('aria-pressed',String(btn.classList.contains('active')));
  btn.addEventListener('click', () => {
    filters.forEach(b=>{b.classList.toggle('active',b===btn);b.setAttribute('aria-pressed',String(b===btn));});
    const filter=btn.dataset.filter;
    stories.forEach(s=>{const hide=filter!=='all' && s.dataset.category!==filter;s.classList.toggle('hidden',hide);s.hidden=hide;});
  });
});
