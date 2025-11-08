// language.js: Handles language switching and dynamic text
document.addEventListener('DOMContentLoaded', function () {
  const langFile = '/lang.json';
  let lang = localStorage.getItem('lang') || 'en-GB';
  const langBtns = document.querySelectorAll('.lang-btn');

  function updateLangTexts(data) {
    for (const key in data[lang]) {
      const el = document.getElementById(key);
      if (el) {
        // If more_projects, add the GitHub icon before the text
        if (key === 'more_projects') {
          el.textContent = data[lang][key];
          el.onclick = function () {
            window.location.href = '/pages/projects.html';
          };
          el.onkeydown = function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              el.click();
            }
          };
        } else if (key === 'download_cv') {
          const cvBtn = document.getElementById('download_cv');
          if (cvBtn) {
            cvBtn.href = lang === 'pt-PT' ? '/downloads/franciscopereira.cv.pt.pdf' : '/downloads/franciscopereira.cv.en.pdf';
          }
          el.textContent = data[lang][key];
        } else {
          el.textContent = data[lang][key];
        }
      }
    }
    // Dynamically update badge text for project categories
    const badgeMap = {
      badge_sim: 'sim',
      badge_ml: 'ml',
      badge_web: 'web',
      badge_backend: 'backend'
    };
    for (const badgeId in badgeMap) {
      const badgeEl = document.getElementById(badgeId);
      if (badgeEl && data[lang][badgeMap[badgeId]]) {
        badgeEl.textContent = data[lang][badgeMap[badgeId]];
      }
    }
    // Dynamically update subtitle if present
    const subtitleEl = document.getElementById('subtitle');
    if (subtitleEl && data[lang]['subtitle']) {
      subtitleEl.textContent = data[lang]['subtitle'];
    }
    // Dynamically update subsubtitle if present
    const subsubtitleEl = document.getElementById('subsubtitle');
    if (subsubtitleEl && data[lang]['subsubtitle']) {
      subsubtitleEl.textContent = data[lang]['subsubtitle'];
    }
  }

  function setLang(newLang, data) {
    lang = newLang;
    document.getElementById('html-root').setAttribute('lang', lang);
    localStorage.setItem('lang', lang);
    updateLangTexts(data);
    langBtns.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
      const check = btn.querySelector('.lang-check');
      if (check) check.style.visibility = btn.classList.contains('active') ? 'visible' : 'hidden';
    });
  }

  fetch(langFile)
    .then(r => r.json())
    .then(data => {
      window.langData = data;
      window.lang = lang;
      updateLangTexts(data);
      langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          setLang(btn.getAttribute('data-lang'), data);
          window.lang = lang;
          document.dispatchEvent(new Event('languageChanged'));
        });
      });
      // Set active class on the saved language button
      const savedLangBtn = document.querySelector(`.lang-btn[data-lang='${lang}']`);
      if (savedLangBtn) savedLangBtn.classList.add('active');
      // Remove active class from others
      langBtns.forEach(btn => {
        if (btn !== savedLangBtn) btn.classList.remove('active');
      });
      // Show checkmark only for active
      langBtns.forEach(btn => {
        const check = btn.querySelector('.lang-check');
        if (check) check.style.visibility = btn.classList.contains('active') ? 'visible' : 'hidden';
      });
    });
});