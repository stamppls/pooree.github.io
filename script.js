const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Language switch (EN / TH) ---------- */
const I18N_EN = {
  'meta.title': document.title,
  'resume': 'Resume-Pooree-English.pdf',
  'mail.subject': 'Project inquiry from',
};
document.querySelectorAll('[data-i18n]').forEach(el => {
  I18N_EN[el.dataset.i18n] ??= el.innerHTML;
});
let currentLang = 'en';

const t = key => (currentLang === 'th' ? I18N_TH[key] : undefined) ?? I18N_EN[key];

// Swapping text mid-typewriter would break the measured widths, so a
// user-triggered switch skips straight to the finished hero.
function setLang(lang, { initial = false } = {}) {
  currentLang = lang;

  if (!initial) finishTyping();
  document.documentElement.lang = lang;
  document.title = t('meta.title');
  document.querySelectorAll('[data-i18n]').forEach(el => { el.innerHTML = t(el.dataset.i18n); });
  document.querySelectorAll('[data-resume]').forEach(a => { a.href = t('resume'); });
  document.querySelectorAll('[data-lang]').forEach(b => b.setAttribute('aria-pressed', b.dataset.lang === lang));
  if (!initial) {
    try { localStorage.setItem('lang', lang); } catch (e) { /* storage unavailable */ }
  }
}

document.querySelectorAll('[data-lang]').forEach(b => {
  b.addEventListener('click', () => { if (b.dataset.lang !== currentLang) setLang(b.dataset.lang); });
});

let savedLang = null;
try { savedLang = localStorage.getItem('lang'); } catch (e) { /* storage unavailable */ }
const initialLang = savedLang || ((navigator.language || '').toLowerCase().startsWith('th') ? 'th' : 'en');
if (initialLang !== 'en') setLang(initialLang, { initial: true });

/* ---------- Hero typewriter (lines 01-03, then the comment) ---------- */
let typingDone = false;
function finishTyping() {
  if (typingDone) return;
  typingDone = true;
  document.querySelectorAll('.editor .line').forEach(l => {
    const h2 = l.querySelector('h2');
    if (h2) {
      l.classList.remove('typing');
      l.classList.add('typed');
      h2.style.transition = '';
      h2.style.width = '';
    }
  });
  const comment = document.querySelector('.editor .comment');
  comment.style.transition = 'opacity 800ms ease';
  comment.style.opacity = 1;
}

function typeLines() {
  const lines = [...document.querySelectorAll('.editor .line')];
  const headings = lines.filter(l => l.querySelector('h2'));
  const comment = document.querySelector('.editor .comment');

  if (reduceMotion) {
    finishTyping();
    return;
  }

  const typeOne = (i) => {
    if (typingDone) return;
    if (i >= headings.length) {
      typingDone = true;
      comment.style.transition = 'opacity 800ms ease';
      comment.style.opacity = 1;
      return;
    }
    const line = headings[i];
    const h2 = line.querySelector('h2');
    const target = h2.scrollWidth;
    const chars = h2.textContent.trim().length;
    const duration = Math.max(chars * 55, 500);

    line.classList.add('typing');
    h2.style.transition = `width ${duration}ms steps(${chars}, end)`;
    requestAnimationFrame(() => { h2.style.width = target + 'px'; });

    setTimeout(() => {
      line.classList.remove('typing');
      line.classList.add('typed');
      h2.style.transition = '';
      h2.style.width = '';
      typeOne(i + 1);
    }, duration + 150);
  };

  setTimeout(() => typeOne(0), 400);
}
document.fonts ? document.fonts.ready.then(typeLines) : window.addEventListener('load', typeLines);

/* ---------- Reveal on scroll ---------- */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ---------- Active nav link ---------- */
const navLinks = [...document.querySelectorAll('.nav-link')];
const sections = navLinks.map(a => document.querySelector(a.getAttribute('href')));
const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id));
  });
}, { rootMargin: '-45% 0px -50% 0px' });
sections.forEach(s => s && navObserver.observe(s));

/* ---------- Mobile menu ---------- */
const burger = document.querySelector('.burger');
burger.addEventListener('click', () => {
  const open = document.body.classList.toggle('menu-open');
  burger.setAttribute('aria-expanded', open);
});
navLinks.forEach(a => a.addEventListener('click', () => {
  document.body.classList.remove('menu-open');
  burger.setAttribute('aria-expanded', false);
}));

/* ---------- Contact panel ---------- */
const contact = document.querySelector('.contact');
const setContact = (open) => {
  document.body.classList.toggle('contact-open', open);
  document.body.classList.toggle('no-scroll', open);
  contact.setAttribute('aria-hidden', !open);
  if (open) setTimeout(() => document.getElementById('cEmail').focus(), 350);
};
document.querySelectorAll('[data-open-contact]').forEach(b => b.addEventListener('click', () => setContact(true)));
document.querySelectorAll('[data-close-contact]').forEach(b => b.addEventListener('click', () => setContact(false)));
document.addEventListener('keydown', e => { if (e.key === 'Escape') setContact(false); });

document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('cEmail').value;
  const name = document.getElementById('cName').value;
  const msg = document.getElementById('cMsg').value;
  const subject = encodeURIComponent(`${t('mail.subject')} ${name}`);
  const body = encodeURIComponent(`${msg}\n\n— ${name} (${email})`);
  window.location.href = `mailto:pooree.limskun@gmail.com?subject=${subject}&body=${body}`;
});

/* ---------- Project slider buttons ---------- */
const cards = document.getElementById('cards');
document.querySelectorAll('.slide-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const step = cards.querySelector('.card').offsetWidth + 26;
    cards.scrollBy({ left: step * Number(btn.dataset.dir), behavior: 'smooth' });
  });
});

/* ---------- "Currently learning" typer ---------- */
const learningEl = document.getElementById('learning');
const learning = ['React', 'PostgreSQL', 'GraphQL', 'Go'];
if (reduceMotion) {
  learningEl.textContent = learning.join(', ');
} else {
  let w = 0, c = 0, deleting = false;
  const tick = () => {
    const word = learning[w];
    c += deleting ? -1 : 1;
    learningEl.textContent = word.slice(0, c);
    let delay = deleting ? 50 : 110;
    if (!deleting && c === word.length) { deleting = true; delay = 1400; }
    else if (deleting && c === 0) { deleting = false; w = (w + 1) % learning.length; delay = 300; }
    setTimeout(tick, delay);
  };
  tick();
}

document.getElementById('year').textContent = new Date().getFullYear();
