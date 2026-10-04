// Portfolio | Toshiyuki SHIMAZAKI
(() => {
  const root = document.documentElement;
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.getElementById('nav-menu');
  const navLinks = [...document.querySelectorAll('.nav-menu a')];

  /* =========================================================
     日英切り替え
     日本語はHTMLに書かれた内容をそのまま使い、英語だけここで定義
     ========================================================= */
  const EN = {
    meta: {
      title: 'Toshiyuki SHIMAZAKI, Ph.D. | Institute of Science Tokyo',
      description: 'Portfolio of Toshiyuki Shimazaki, Associate Professor at the Center for Innovative Teaching and Learning, Institute of Science Tokyo. Research and practice in learning support robots, educational DX, and smart campus.'
    },
    skip: 'Skip to main content',
    navLabel: 'Main navigation',
    langLabel: '日本語に切り替え',
    themeLabel: 'Toggle color theme',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    navAbout: 'Profile',
    navResearch: 'Research',
    navAchievements: 'Publications & Teaching',
    navContact: 'Contact',

    heroName: 'Toshiyuki SHIMAZAKI, Ph.D.',
    heroSub: '島崎 俊介',
    heroLead: 'Associate Professor and Institute Management Officer and Head of Advanced Technology Integration Office, Center for Innovative Teaching and Learning, Institute of Science Tokyo.<br class="br-pc"> My research and practice focus on learning support robots and educational DX through AI and VR.',

    linkCenter: 'Center for Innovative Teaching and Learning',
    linkOffice: 'Advanced Technology Integration Office',

    aboutTitle: 'Profile',
    careerTitle: 'Career',
    career1: 'Associate Professor and Institute Management Officer and Head of Advanced Technology Integration Office,<br>Center for Innovative Teaching and Learning, Institute of Science Tokyo',
    career2: 'Academic Engineer, The University of Electro-Communications',
    degreeTitle: 'Education',
    degree1: '<span class="degree">Ph.D. in Engineering</span>The University of Electro-Communications<small>Graduate School of Informatics and Engineering (withdrew from the doctoral program after completing coursework)</small>',
    degree2: '<span class="degree">Master of Management of Technology (Professional)</span>Tokyo University of Agriculture and Technology<small>Graduate School of Engineering</small>',
    degree3: '<span class="degree">Master of Education</span>Tokyo Gakugei University<small>Graduate School of Education</small>',
    degree4: '<span class="degree">Bachelor of Engineering</span>The University of Electro-Communications<small>Department of Information and Communication Engineering</small>',
    societyTitle: 'Academic Societies',
    society1: 'Japanese Society for Information and Systems in Education (JSiSE)',
    society2: 'Japan Society for Educational Technology (JSET)',
    society3: 'Japanese Society for Artificial Intelligence (JSAI)',
    society4: 'The Institute of Electronics, Information and Communication Engineers (IEICE)',
    society5: 'Information Processing Society of Japan (IPSJ)',

    trainingTitle: 'Professional Development in Higher Education',
    trainingNote: 'All programs completed',
    training1: '<b>University of Tsukuba</b>University Management Professional Development Program',
    training2: '<b>Chiba University</b>Professional Development Program for Teaching and Learning Support Specialists',
    training3: '<b>Osaka University</b>Admission Officer Training Program',
    training4: '<b>Kumamoto University</b>Instructional Design (Introductory / Advanced)',
    training5: '<b>Kyushu Institute of Technology</b>Information Education Support Specialist Training Program',
    training6: '<b>Hokkaido University</b>Science and Technology Communicator Training Program',
    training7: '<b>Teikyo University</b>FD Coordinator Training Program',
    training8: '<b>Ehime University</b>FDer Training Course',
    training9: '<b>Ehime University</b>SD Coordinator Training Course',
    training10: '<b>The University of Electro-Communications</b>Data Entrepreneur Program',
    training11: '<b>The University of Electro-Communications</b>Web System Design Program',

    researchTitle: 'Research Themes',
    research1Title: 'Learning Support Robots',
    research1Body: 'Anticipating an era in which every learner has a personal learning partner robot, I study how robots learn and how they interact with learners.',
    research2Title: 'Educational DX and Smart Campus',
    research2Body: 'I work on avatar staff powered by generative AI, campus automation through IoT sensing and control, and VR campuses.',

    achTitle: 'Publications & Teaching',
    achDesc: 'An up-to-date list of my research achievements — papers, presentations, and awards — as well as my teaching record is available in the following databases.',
    rmDesc: 'The national researcher database of Japan, listing papers, presentations, awards, teaching, and more.',
    strdbDesc: 'The researcher database of Institute of Science Tokyo.',

    contactTitle: 'Contact',
    contactAffil: 'Center for Innovative Teaching and Learning (CITL), Institute of Science Tokyo',
    toTop: 'Back to top ↑'
  };

  // 日本語の原文を保存
  const JA = { meta: { title: document.title, description: document.querySelector('meta[name="description"]')?.content || '' } };
  const textEls = document.querySelectorAll('[data-i18n]');
  const htmlEls = document.querySelectorAll('[data-i18n-html]');
  const ariaEls = document.querySelectorAll('[data-i18n-aria]');
  textEls.forEach((el) => { JA[el.dataset.i18n] = el.textContent; });
  htmlEls.forEach((el) => { JA[el.dataset.i18nHtml] = el.innerHTML; });
  ariaEls.forEach((el) => { JA[el.dataset.i18nAria] = el.getAttribute('aria-label'); });
  JA.menuOpen = 'メニューを開く';
  JA.menuClose = 'メニューを閉じる';
  JA.langLabel = 'Switch to English';

  let dict = JA;
  const setLang = (lang, save) => {
    dict = lang === 'en' ? EN : JA;
    textEls.forEach((el) => { const v = dict[el.dataset.i18n]; if (v != null) el.textContent = v; });
    htmlEls.forEach((el) => { const v = dict[el.dataset.i18nHtml]; if (v != null) el.innerHTML = v; });
    ariaEls.forEach((el) => { const v = dict[el.dataset.i18nAria]; if (v != null) el.setAttribute('aria-label', v); });
    document.title = dict.meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', dict.meta.description);
    // 英語ページがあるリンクは言語に合わせて飛び先を切り替え
    document.querySelectorAll('[data-href-en]').forEach((a) => {
      if (!a.dataset.hrefJa) a.dataset.hrefJa = a.getAttribute('href');
      a.setAttribute('href', lang === 'en' ? a.dataset.hrefEn : a.dataset.hrefJa);
    });
    root.setAttribute('lang', lang);
    root.setAttribute('data-lang', lang);
    if (toggle) toggle.setAttribute('aria-label', toggle.getAttribute('aria-expanded') === 'true' ? dict.menuClose : dict.menuOpen);
    if (save) { try { localStorage.setItem('lang', lang); } catch (e) {} }
  };
  setLang(root.getAttribute('data-lang') === 'en' ? 'en' : 'ja', false);
  root.classList.add('i18n-ready');

  document.querySelector('.lang-toggle')?.addEventListener('click', () => {
    setLang(root.getAttribute('data-lang') === 'en' ? 'ja' : 'en', true);
  });

  /* ---- テーマ切替 ---- */
  document.querySelector('.theme-toggle')?.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
  });

  /* ---- モバイルメニュー ---- */
  const setMenu = (open) => {
    if (!toggle) return;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? dict.menuClose : dict.menuOpen);
    menu.classList.toggle('is-open', open);
  };
  toggle?.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
  navLinks.forEach((a) => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });

  /* ---- スクロール時のヘッダー影 ---- */
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---- 表示中セクションをナビでハイライト ---- */
  const sections = navLinks.map((a) => document.querySelector(a.getAttribute('href'))).filter(Boolean);
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((a) => a.classList.toggle('is-active', a.getAttribute('href') === `#${entry.target.id}`));
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  sections.forEach((s) => spy.observe(s));

  /* ---- フェードイン ---- */
  const reveal = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach((el) => reveal.observe(el));

  /* ---- メールアドレス（スパム対策でJSで組み立て） ---- */
  document.querySelectorAll('.js-email').forEach((el) => {
    const addr = `${el.dataset.user}@${el.dataset.domain}`;
    const a = document.createElement('a');
    a.href = `mailto:${addr}`;
    a.textContent = addr;
    el.replaceChildren(a);
  });

  /* ---- コピーライト年 ---- */
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
