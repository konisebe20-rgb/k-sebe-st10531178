/* Shared interactive features: toast messages, modal, accordion, lightbox gallery. */
(function () {
  'use strict';
  window.RBB = window.RBB || {};

  /* ---------- Toast (small message that confirms an action) ---------- */
  var toastTimer;
  window.RBB.toast = function (message) {
    var t = document.getElementById('toast');
    if (!t) {
      t = document.createElement('div');
      t.id = 'toast';
      t.className = 'toast';
      t.setAttribute('role', 'status');
      document.body.appendChild(t);
    }
    t.textContent = message;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.classList.remove('show'); }, 2200);
  };

  /* ---------- Modal (uses the built-in <dialog> element) ---------- */
  window.RBB.openModal = function (title, bodyNode) {
    if (typeof HTMLDialogElement === 'undefined') { window.alert(title); return; }
    var d = document.createElement('dialog');
    d.className = 'modal';
    d.setAttribute('aria-labelledby', 'modal-title');

    var h = document.createElement('h2');
    h.id = 'modal-title';
    h.textContent = title;

    var close = document.createElement('button');
    close.type = 'button';
    close.className = 'btn-primary';
    close.textContent = 'Close';
    close.addEventListener('click', function () { d.close(); });

    d.appendChild(h);
    d.appendChild(bodyNode);
    d.appendChild(close);
    d.addEventListener('click', function (e) { if (e.target === d) d.close(); });
    d.addEventListener('close', function () { d.remove(); });
    document.body.appendChild(d);
    d.showModal();
  };

  /* ---------- Accordion ---------- */
  function setPanel(btn, open) {
    var panel = document.getElementById(btn.getAttribute('aria-controls'));
    if (!panel) return;
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    panel.classList.toggle('open', open);
    panel.style.maxHeight = open ? panel.scrollHeight + 'px' : '0px';
  }
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('.accordion-trigger');
    if (!btn) return;
    setPanel(btn, btn.getAttribute('aria-expanded') !== 'true');
  });
  window.addEventListener('resize', function () {
    document.querySelectorAll('.accordion-trigger[aria-expanded="true"]').forEach(function (b) { setPanel(b, true); });
  });

  /* ---------- Lightbox gallery ---------- */
  function openLightbox(trigger) {
    if (typeof HTMLDialogElement === 'undefined') return;
    var group = trigger.getAttribute('data-lightbox');
    var items = Array.prototype.slice.call(document.querySelectorAll('[data-lightbox]')).filter(function (el) {
      return el.getAttribute('data-lightbox') === group;
    });
    var index = items.indexOf(trigger);

    var d = document.createElement('dialog');
    d.className = 'lightbox';
    d.setAttribute('aria-label', 'Image viewer');

    var img = document.createElement('img');
    var cap = document.createElement('p');
    cap.className = 'lightbox-caption';

    function mkBtn(cls, label, text) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'lightbox-btn ' + cls;
      b.setAttribute('aria-label', label);
      b.textContent = text;
      return b;
    }
    var closeBtn = mkBtn('lightbox-close', 'Close image viewer', '\u00D7');
    var prevBtn = mkBtn('lightbox-prev', 'Previous image', '\u2039');
    var nextBtn = mkBtn('lightbox-next', 'Next image', '\u203A');

    function show(i) {
      index = (i + items.length) % items.length;
      var el = items[index];
      img.src = el.getAttribute('data-full');
      img.alt = el.getAttribute('data-alt') || '';
      cap.textContent = img.alt + ' (' + (index + 1) + ' of ' + items.length + ')';
    }
    prevBtn.addEventListener('click', function () { show(index - 1); });
    nextBtn.addEventListener('click', function () { show(index + 1); });
    closeBtn.addEventListener('click', function () { d.close(); });
    d.addEventListener('click', function (e) { if (e.target === d) d.close(); });
    d.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') show(index - 1);
      if (e.key === 'ArrowRight') show(index + 1);
    });
    d.addEventListener('close', function () { d.remove(); trigger.focus(); });

    [closeBtn, prevBtn, img, nextBtn, cap].forEach(function (n) { d.appendChild(n); });
    if (items.length < 2) { prevBtn.hidden = true; nextBtn.hidden = true; }
    show(index);
    document.body.appendChild(d);
    d.showModal();
  }
  document.addEventListener('click', function (e) {
    var t = e.target.closest('[data-lightbox]');
    if (t) openLightbox(t);
  });
})();
