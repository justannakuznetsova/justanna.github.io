const i18Obj = {
  en: {
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    blog: 'Blog',
    contacts: 'Contacts',
    design: 'Design',
    front: 'Front-End Developer',
    anna: 'Hi! I\'m Anna',
    boast: 'I made this website using my skills in design and coding. Check it out!',
    'about-btn': 'About me',
  },
  ru: {
    home: 'Домой',
    about: 'Обо мне',
    projects: 'Проекты',
    blog: 'Блог',
    contacts: 'Контакты',
    design: 'Дизайн',
    front: 'FrontEnd разработчик',
    anna: 'Привет! Я - Анна',
    boast: 'Сайт создан с нуля при помощи навыков в дизайне и программировании. Добро пожаловать!',
    'about-btn': 'Обо мне',
  },
  ch: {
    home: '主页',
    about: '简介',
    projects: '成功案例',
    blog: '播客',
    contacts: '联系我',
    design: '设计',
    front: '前端开发工程师',
    anna: '嗨！我叫安娜',
    boast: '这个网站是利用设计与编辑的技巧而做的。欢迎光临!',
    'about-btn': '简介',
  },
};

const ruLanguage = document.querySelector('.language-button-ru');
const enLanguage = document.querySelector('.language-button-en');
const chLanguage = document.querySelector('.language-button-ch');
const language = document.querySelectorAll('[data-i18]');

function getTranslate(lang) {
  language.forEach((el) => {
    if (el.placeholder) {
      el.textContent = '';
      el.placeholder = (i18Obj[lang])[el.dataset.i18];
    } else { el.textContent = (i18Obj[lang])[el.dataset.i18]; }
  });
  if (lang === 'ru') {
    enLanguage.classList.remove('active');
    ruLanguage.classList.add('active');
  }
  if (lang === 'en') {
    ruLanguage.classList.remove('active');
    enLanguage.classList.add('active');
  }
  if (lang === 'ch') {
    ruLanguage.classList.remove('active');
    enLanguage.classList.remove('active');
    chLanguage.classList.add('active');
  }
}

ruLanguage.addEventListener('click', () => { getTranslate('ru'); });
enLanguage.addEventListener('click', () => { getTranslate('en'); });
chLanguage.addEventListener('click', () => { getTranslate('ch'); });

const lang = 'en';
function setLocalStorage() {
  localStorage.setItem('lang', lang);
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
  if (localStorage.getItem('lang')) {
    const langue = localStorage.getItem('lang');
    getTranslate(langue);
  }
}
window.addEventListener('load', getLocalStorage);
