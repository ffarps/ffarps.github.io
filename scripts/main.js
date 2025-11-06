// Main JavaScript file for Francisco Pereira's portfolio
// Consolidated and optimized for minimal loading

// Language switching functionality
document.addEventListener('DOMContentLoaded', function () {
  const langFile = '/lang.json';
  let lang = localStorage.getItem('lang') || 'en-GB';
  const langBtns = document.querySelectorAll('.lang-btn');

  function updateLangTexts(data) {
    for (const key in data[lang]) {
      const el = document.getElementById(key);
      if (el) {
        if (key === 'github_warning') {
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
    
    // Update badge text for project categories
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

// Theme switcher functionality
(function() {
  const root = document.documentElement;
  const themeBtns = document.querySelectorAll('.theme-btn');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

  function setTheme(theme) {
    if (theme === 'dark') {
      root.style.setProperty('--back-accent-color', getComputedStyle(root).getPropertyValue('--back-accent-color-dark').trim());
      root.style.setProperty('--accent-color', getComputedStyle(root).getPropertyValue('--accent-color-dark').trim());
      root.style.setProperty('--font-color', getComputedStyle(root).getPropertyValue('--font-color-dark').trim());
    } else if (theme === 'light') {
      root.style.setProperty('--back-accent-color', getComputedStyle(root).getPropertyValue('--back-accent-color-light').trim());
      root.style.setProperty('--accent-color', getComputedStyle(root).getPropertyValue('--accent-color-light').trim());
      root.style.setProperty('--font-color', getComputedStyle(root).getPropertyValue('--font-color-light').trim());
    } else {
      // system default
      if (prefersDark.matches) {
        root.style.setProperty('--back-accent-color', getComputedStyle(root).getPropertyValue('--back-accent-color-dark').trim());
        root.style.setProperty('--accent-color', getComputedStyle(root).getPropertyValue('--accent-color-dark').trim());
        root.style.setProperty('--font-color', getComputedStyle(root).getPropertyValue('--font-color-dark').trim());
      } else {
        root.style.setProperty('--back-accent-color', getComputedStyle(root).getPropertyValue('--back-accent-color-light').trim());
        root.style.setProperty('--accent-color', getComputedStyle(root).getPropertyValue('--accent-color-light').trim());
        root.style.setProperty('--font-color', getComputedStyle(root).getPropertyValue('--font-color-light').trim());
      }
    }
    localStorage.setItem('theme', theme);
    themeBtns.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.theme-btn[data-theme="${theme}"]`).classList.add('active');
  }

  // Initial theme
  const savedTheme = localStorage.getItem('theme') || 'system';
  setTheme(savedTheme);

  themeBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      setTheme(this.getAttribute('data-theme'));
    });
  });

  // React to system changes if in system mode
  prefersDark.addEventListener('change', e => {
    if (localStorage.getItem('theme') === 'system') {
      setTheme('system');
    }
  });
})();

// Tag functionality for project filtering (if tags exist)
const tags = document.querySelectorAll(".tag");
tags.forEach((tag) => {
  tag.addEventListener("click", () => {
    tag.classList.toggle("selected");
  });
});