const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');

toggle?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('is-open');
  toggle.setAttribute('aria-expanded', String(isOpen));
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    toggle?.setAttribute('aria-expanded', 'false');
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();

const isChineseSite = document.documentElement.lang.toLowerCase().startsWith('zh');
const churchName = isChineseSite ? '馨香之家华人浸信会' : 'Aroma Chinese Baptist Church';
document.title = document.title.replace(/晨光教会|Morning Light Church/g, churchName);
const favicon = document.querySelector('link[rel~="icon"]') || document.createElement('link');
favicon.rel = 'icon';
favicon.type = 'image/png';
favicon.href = '/assets/aroma-church-logo.png';
document.head.append(favicon);
document.querySelectorAll('.brand > span:last-child').forEach((name) => { name.textContent = churchName; });
document.querySelectorAll('.brand').forEach((brand) => { brand.setAttribute('aria-label', isChineseSite ? `${churchName}首页` : `${churchName} home`); });
const welcome = document.querySelector('.utility-content p');
if (welcome) { welcome.textContent = isChineseSite ? `愿你平安，欢迎来到${churchName}` : `Welcome to ${churchName}`; }
const copyright = document.querySelector('.footer-grid p:last-child');
if (copyright) { copyright.innerHTML = `© ${new Date().getFullYear()} ${churchName}`; }
