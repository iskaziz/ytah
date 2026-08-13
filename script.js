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

const translations = {
  bm:{
    nav_about:'Tentang',nav_work:'Usaha Kami',nav_impact:'Impak',nav_legacy:'Legasi',nav_archive:'Arkib',nav_governance:'Tadbir Urus',
    hero_kicker:'YAYASAN TUN ABDUL HAMID · 1996—2026',hero_title:'Legasi Khidmat.<br><em>Masa Depan Penuh Peluang.</em>',hero_deck:'Memajukan pendidikan undang-undang, mengiktiraf kecemerlangan akademik dan menghulurkan bantuan bermakna kepada mereka yang memerlukan.',discover_work:'Terokai usaha kami',our_story:'Kisah kami',
    intro_kicker:'TIGA PULUH TAHUN BERKHIDMAT',intro_title:'Ditubuhkan untuk menghormati kehidupan yang diabdikan kepada undang-undang dan khidmat awam.',intro_body:'Ditubuhkan pada 9 November 1996, Yayasan Tun Abdul Hamid memajukan pendidikan undang-undang melalui bantuan kewangan, anugerah akademik dan kerjasama institusi, di samping misi kemanusiaan untuk meringankan penderitaan dan meningkatkan taraf hidup.',read_history:'Baca sejarah kami',
    stat_established:'Ditubuhkan',stat_students:'Pelajar undang-undang dibantu sejak 2010',stat_clp_since:'Tajaan hadiah CLP bermula',stat_clp_value:'Hadiah tahunan Pelajar Terbaik Keseluruhan CLP',
    work_kicker:'USAHA KAMI',work_title:'Mewujudkan peluang.<br>Mengiktiraf kecemerlangan.',work_intro:'Program kami berasaskan prinsip mudah: pendidikan mampu mengubah kehidupan, dan bantuan bermakna harus memelihara maruah.',
    work_education_label:'PENDIDIKAN UNDANG-UNDANG',work_education_title:'Membuka ruang untuk mempelajari undang-undang.',work_education_body:'Bursari tunai, komputer riba dan bantuan pendidikan untuk mahasiswa undang-undang yang memerlukan sokongan.',
    work_awards_label:'KECEMERLANGAN AKADEMIK',work_awards_title:'Menghargai mereka yang cemerlang.',work_awards_body:'Anugerah bersama Lembaga Kelayakan Profesion Undang-Undang, UUM dan UniSZA mengiktiraf pencapaian cemerlang dalam bidang undang-undang.',
    work_small_label:'SMALL STEPS',work_small_title:'Amal yang disampul dengan maruah.',work_small_body:'Bantuan praktikal yang dilaksanakan dengan lembut, dengan publisiti diminimumkan bagi memelihara maruah dan privasi penerima.',
    clp_kicker:'MENYOKONG KECEMERLANGAN SEJAK 1997',clp_title:'Pelajar Terbaik Keseluruhan Sijil Amalan Guaman.',clp_body:'YTAH menaja hadiah tahunan berprestij yang kini bernilai RM10,000 untuk calon CLP layak yang mencapai keputusan terbaik.',view_recipients:'Lihat arkib penerima',
    small_kicker:'SMALL STEPS',small_quote:'“Amal yang disampul dengan maruah.”',small_body:'Tidak setiap amal memerlukan perhatian umum. Small Steps mencerminkan kepercayaan YTAH bahawa bantuan boleh diberikan secara bermakna, peribadi dan senyap. Gambar serta publisiti sengaja diminimumkan.',discover_small:'Terokai Small Steps',
    legacy_kicker:'PENGASAS',legacy_title:'Kehidupan yang didedikasikan kepada undang-undang, khidmat awam dan tanggungjawab yang berkekalan.',legacy_body:'Tun Dato’ Seri Haji Abdul Hamid bin Haji Omar diterima masuk ke English Bar pada 1955, dilantik sebagai Hakim Mahkamah Tinggi pada 1968 dan bersara sebagai Ketua Hakim Negara pada 1994. Beliau mempengerusikan YTAH sejak penubuhannya pada 1996 hingga 2009.',legacy_signoff:'Kepercayaannya terhadap kesinambungan kekal sebagai sebahagian daripada kisah yayasan.',
    timeline_kicker:'1996—2026',timeline_title:'Tiga puluh tahun, satu tujuan yang berterusan.',archive_kicker:'KISAH & ARKIB',archive_title:'Memori institusi, bukan sekadar suapan berita.',archive_intro:'Laman akhir boleh memindahkan catatan WordPress bersejarah YTAH ke dalam arkib yang bersih dan boleh dicari mengikut tahun serta program.',
    gov_kicker:'TADBIR URUS',gov_title:'Amanah merentas generasi.',gov_body:'Laman baharu memisahkan kepimpinan semasa, ahli dan penasihat daripada rekod sejarah sambil memastikan maklumat tadbir urus mudah dicari.',gov_board:'Lembaga semasa',gov_history:'Sejarah kepimpinan',gov_records:'Rekod tadbir urus',closing_title:'Legasi diteruskan.<br><em>Peluang diwariskan.</em>',contact_us:'Hubungi yayasan',footer_tag:'Legasi Khidmat. Masa Depan Penuh Peluang.'
  }
};
const original = new Map();
document.querySelectorAll('[data-i18n],[data-i18n-html]').forEach(el=>original.set(el,el.innerHTML));
let language='en';
const langToggle=document.querySelector('.language-toggle');
langToggle?.addEventListener('click',()=>{
  language=language==='en'?'bm':'en'; document.documentElement.lang=language==='bm'?'ms':'en';
  document.querySelectorAll('[data-i18n],[data-i18n-html]').forEach(el=>{
    const key=el.dataset.i18n || el.dataset.i18nHtml;
    el.innerHTML=language==='bm'?(translations.bm[key] ?? original.get(el)):original.get(el);
  });
  langToggle.innerHTML=language==='en'?'<span class="lang-active">EN</span><span>/</span><span>BM</span>':'<span>EN</span><span>/</span><span class="lang-active">BM</span>';
});
