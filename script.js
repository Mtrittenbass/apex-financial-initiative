// Apex Financial Initiative — shared site script

// Mobile hamburger menu
(function () {
  var toggle = document.querySelector('.menu-toggle');
  var links = document.getElementById('nav-links');
  if (!toggle || !links) return;

  function setOpen(open) {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    links.classList.toggle('open', open);
  }

  toggle.addEventListener('click', function () {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });

  // Close on Escape, on link click, or when resizing up to desktop
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && links.classList.contains('open')) {
      setOpen(false);
      toggle.focus();
    }
  });
  links.addEventListener('click', function (e) {
    if (e.target.closest('a')) setOpen(false);
  });
  window.addEventListener('resize', function () {
    if (window.innerWidth > 900) setOpen(false);
  });
})();

// Forms: no backend yet — validate, then show the thank-you message
document.querySelectorAll('form[data-thanks]').forEach(function (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    var card = form.closest('.form-box');
    card.classList.add('sent');
    var thanks = card.querySelector('.thanks');
    if (thanks) {
      thanks.setAttribute('tabindex', '-1');
      thanks.focus();
    }
    form.reset();
  });
});

// Footer year
document.querySelectorAll('[data-year]').forEach(function (el) {
  el.textContent = new Date().getFullYear();
});
