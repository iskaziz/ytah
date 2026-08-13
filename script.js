const header = document.getElementById('siteHeader');
const menuBtn = document.querySelector('.menu-toggle');
const nav = document.getElementById('primaryNav');

function updateHeader(){ header.classList.toggle('scrolled', window.scrollY > 40); }
updateHeader();
window.addEventListener('scroll', updateHeader, {passive:true});

menuBtn?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(open));
  menuBtn.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  menuBtn?.setAttribute('aria-expanded','false');
}));

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => { if(entry.isIntersecting){ entry.target.classList.add('in-view'); revealObserver.unobserve(entry.target); } });
},{threshold:.12,rootMargin:'0px 0px -40px 0px'});
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

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
document.querySelectorAll('.timeline-dot').forEach(btn => btn.addEventListener('click', () => {
  document.querySelectorAll('.timeline-dot').forEach(b => {b.classList.remove('active');b.setAttribute('aria-selected','false')});
  btn.classList.add('active');btn.setAttribute('aria-selected','true');
  const y=btn.dataset.year; const [h,t]=timelineData[y];
  yearEl.textContent=y; headingEl.textContent=h; textEl.textContent=t;
}));

const filters = document.querySelectorAll('.filter');
const stories = document.querySelectorAll('.story');
filters.forEach(btn => btn.addEventListener('click', () => {
  filters.forEach(b=>b.classList.remove('active')); btn.classList.add('active');
  const filter=btn.dataset.filter;
  stories.forEach(s=>s.classList.toggle('hidden',filter!=='all' && s.dataset.category!==filter));
}));
