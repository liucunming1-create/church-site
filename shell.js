const sharedHeader = `<header class="site-header"><div class="utility-bar"><div class="header-wrap utility-content"><p>愿你平安，欢迎来到晨光教会</p><nav aria-label="快捷导航"><a href="gatherings.html">线上聚会</a><a href="contact.html">代祷需要</a><a href="contact.html">支持教会</a></nav></div></div><div class="main-nav-row"><div class="header-wrap nav-content"><a class="brand" href="index.html" aria-label="晨光教会首页"><span class="brand-mark" aria-hidden="true">✦</span><span>晨光教会</span></a><button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-nav"><span></span><span></span><span></span><b>菜单</b></button><nav id="site-nav" class="site-nav" aria-label="主要导航"><details class="nav-group"><summary>认识我们</summary><div class="dropdown-menu"><a href="about.html">教会简介</a><a href="team.html">牧者与团队</a><a href="visit.html">初次来访</a></div></details><details class="nav-group"><summary>信仰生活</summary><div class="dropdown-menu"><a href="gatherings.html">主日与聚会</a><a href="ministries.html">小组与事工</a><a href="contact.html">祷告与关怀</a></div></details><a href="ministries.html">服事社区</a><a href="contact.html">联系教会</a><a class="nav-button" href="visit.html">计划来访</a></nav></div></div></header>`;
const sharedFooter = `<footer class="site-footer"><div class="wrap footer-grid"><a class="brand" href="index.html"><span class="brand-mark" aria-hidden="true">✦</span><span>晨光教会</span></a><p>愿你平安，并在这里找到同行的人。</p><p>© <span id="year"></span> 晨光教会 · 网站模板</p></div></footer>`;
document.querySelector('[data-site-header]')?.replaceWith(document.createRange().createContextualFragment(sharedHeader));
document.querySelector('[data-site-footer]')?.replaceWith(document.createRange().createContextualFragment(sharedFooter));

const chinesePage = location.pathname.split('/').pop() || 'index.html';
document.querySelector('.language-toggle')?.setAttribute('href', `en/${chinesePage}`);

const languageToggle = document.createElement('a');
languageToggle.className = 'language-toggle';
languageToggle.href = `en/${chinesePage}`;
languageToggle.textContent = 'EN';
document.querySelector('.nav-button')?.before(languageToggle);
