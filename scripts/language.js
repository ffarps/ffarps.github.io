// language.js: Handles language switching and dynamic text
document.addEventListener('DOMContentLoaded', function () {
  const langFile = 'lang.json';
  let lang = 'pt-PT';
  const langBtns = document.querySelectorAll('.lang-btn');

  function updateLangTexts(data) {
    for (const key in data[lang]) {
      const el = document.getElementById(key);
      if (el) {
        el.textContent = data[lang][key];
      }
    }
  }

  function setLang(newLang, data) {
    lang = newLang;
    document.getElementById('html-root').setAttribute('lang', lang);
    updateLangTexts(data);
    langBtns.forEach(btn => btn.classList.toggle('active', btn.getAttribute('data-lang') === lang));
  }

  fetch(langFile)
    .then(r => r.json())
    .then(data => {
      updateLangTexts(data);
      langBtns.forEach(btn => {
        btn.addEventListener('click', () => setLang(btn.getAttribute('data-lang'), data));
      });
    });
});