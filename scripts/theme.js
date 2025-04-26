// Theme switcher for light, dark, and system modes
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
