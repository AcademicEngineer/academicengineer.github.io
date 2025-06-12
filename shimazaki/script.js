function toggleLanguage() {
  const elements = document.querySelectorAll('[data-en]');
  elements.forEach(el => {
    const current = el.innerHTML.trim();
    const en = el.getAttribute('data-en');
    const ja = el.getAttribute('data-ja');
    el.innerHTML = (current === ja || el.textContent === ja) ? en : ja;
  });
}