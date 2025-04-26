// language.js: Handles language switching and dynamic text
document.addEventListener('DOMContentLoaded', function () {
  const langFile = 'lang.json';
  let lang = localStorage.getItem('lang') || 'en-GB';
  const langBtns = document.querySelectorAll('.lang-btn');

  function updateLangTexts(data) {
    for (const key in data[lang]) {
      const el = document.getElementById(key);
      if (el) {
        // If github_warning, add the GitHub icon before the text
        if (key === 'github_warning') {
          el.innerHTML = `<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.11 3.29 9.45 7.86 10.98.58.11.79-.25.79-.56 0-.28-.01-1.02-.01-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.07-.74.08-.73.08-.73 1.18.08 1.8 1.22 1.8 1.22 1.05 1.8 2.75 1.28 3.43.98.11-.77.41-1.28.74-1.58-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.2-3.1-.12-.3-.52-1.51.11-3.16 0 0 .97-.31 3.18 1.19a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.5 3.17-1.19 3.17-1.19.63 1.65.23 2.86.11 3.16.75.81 1.2 1.84 1.2 3.1 0 4.43-2.68 5.41-5.24 5.69.43.37.81 1.11.81 2.24 0 1.62-.01 2.93-.01 3.33 0 .31.21.67.8.56A11.53 11.53 0 0 0 23.5 12.02C23.5 5.74 18.27.5 12 .5z"/></svg>` + data[lang][key];
          el.onclick = function() {
            window.open('https://github.com/ffarps?tab=repositories&q=&type=public&language=&sort=', '_blank');
          };
          el.onkeydown = function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              el.click();
            }
          };
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