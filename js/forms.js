/* Forms: JavaScript validation, error messages, and submission for
   the cart checkout, contact page and wholesale enquiry page. */
(function () {
  'use strict';
  window.RBB = window.RBB || {};

  /* ---------- Validation rules ----------
     Each rule returns '' when the value is fine, or an error message. */
  var RULES = {
    required: function (v) { return v.trim() !== '' ? '' : 'This field is required.'; },
    name: function (v) {
      return v.trim() === '' || /^[A-Za-z\u00C0-\u024F][A-Za-z\u00C0-\u024F' .-]{1,59}$/.test(v.trim())
        ? '' : 'Use letters only, between 2 and 60 characters.';
    },
    email: function (v) {
      return v.trim() === '' || /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim())
        ? '' : 'Enter a valid email address, for example name@example.com.';
    },
    phone: function (v) {
      var digits = v.replace(/[\s-]/g, '');
      return v.trim() === '' || /^(\+27|0)[1-9][0-9]{8}$/.test(digits)
        ? '' : 'Enter a valid South African number, for example 016 123 9876 or +27 16 123 9876.';
    },
    minlen: function (v, n) { return v.trim() === '' || v.trim().length >= +n ? '' : 'Please enter at least ' + n + ' characters.'; },
    maxlen: function (v, n) { return v.length <= +n ? '' : 'Please use no more than ' + n + ' characters.'; },
    int: function (v) { return v.trim() === '' || /^[0-9]+$/.test(v.trim()) ? '' : 'Enter a whole number, like 20.'; },
    min: function (v, n) { return v.trim() === '' || +v >= +n ? '' : 'The number must be ' + n + ' or more.'; },
    max: function (v, n) { return v.trim() === '' || +v <= +n ? '' : 'The number must be ' + n + ' or less.'; },
    startdate: function (v) {
      if (v === '') return '';
      var d = new Date(v + 'T00:00:00');
      if (isNaN(d.getTime())) return 'Enter a valid date.';
      var earliest = earliestStart();
      if (d < earliest) return 'Choose a date at least 3 days from today so we have time to plan.';
      if (d.getDay() === 0) return 'We do not deliver on Sundays. Choose Monday to Saturday.';
      return '';
    }
  };

  function earliestStart() {
    var d = new Date();
    d.setHours(0, 0, 0, 0);
    d.setDate(d.getDate() + 3);
    return d;
  }
  function isoDate(d) {
    var m = String(d.getMonth() + 1).padStart(2, '0');
    var day = String(d.getDate()).padStart(2, '0');
    return d.getFullYear() + '-' + m + '-' + day;
  }

  function showError(el, msg) {
    var out = document.getElementById(el.id + '-error');
    if (out) out.textContent = msg;
    el.classList.toggle('invalid', !!msg);
    el.setAttribute('aria-invalid', msg ? 'true' : 'false');
    if (out) el.setAttribute('aria-describedby', out.id);
  }

  function validateField(el) {
    var rules = (el.getAttribute('data-rules') || '').split(/\s+/).filter(Boolean);
    var msg = '';
    for (var i = 0; i < rules.length && !msg; i++) {
      var parts = rules[i].split(':');
      var fn = RULES[parts[0]];
      if (fn) msg = fn(el.value, parts[1]);
    }
    showError(el, msg);
    return msg === '';
  }

  function validateForm(form) {
    var fields = Array.prototype.slice.call(form.querySelectorAll('[data-rules]')).filter(function (el) {
      return !el.closest('[hidden]');
    });
    var firstBad = null;
    fields.forEach(function (el) {
      if (!validateField(el) && !firstBad) firstBad = el;
    });
    if (firstBad) firstBad.focus();
    return !firstBad;
  }

  function wireLiveValidation(form) {
    form.addEventListener('focusout', function (e) {
      if (e.target.hasAttribute && e.target.hasAttribute('data-rules')) validateField(e.target);
    });
    form.addEventListener('input', function (e) {
      var t = e.target;
      if (t.hasAttribute && t.hasAttribute('data-rules') && t.classList.contains('invalid')) validateField(t);
      if (t.hasAttribute && t.hasAttribute('data-counter')) {
        var c = document.getElementById(t.id + '-count');
        if (c) c.textContent = t.value.length + ' / ' + t.getAttribute('maxlength') + ' characters';
      }
    });
  }

  function collect(form) {
    var data = {};
    Array.prototype.forEach.call(form.elements, function (el) {
      if (!el.name || el.disabled) return;
      if ((el.type === 'radio' || el.type === 'checkbox') && !el.checked) return;
      data[el.name] = el.value.trim();
    });
    return data;
  }

  /* AJAX submit: sends the data with fetch() so the page does not reload.
     Until a real Formspree ID is added to the form's action, it runs in demo mode. */
  function sendForm(form, data) {
    var url = form.getAttribute('action') || '';
    if (!/^https:\/\//.test(url) || url.indexOf('YOUR_FORM_ID') !== -1) {
      return new Promise(function (resolve) { setTimeout(resolve, 700); });
    }
    return fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(data)
    }).then(function (res) {
      if (!res.ok) throw new Error('The server answered with status ' + res.status);
      return res;
    });
  }

  function el(tag, text, cls) {
    var n = document.createElement(tag);
    if (text) n.textContent = text;
    if (cls) n.className = cls;
    return n;
  }
  function rand(n) { return 'R' + n.toFixed(2); }
  function showResult(box, nodes) {
    box.textContent = '';
    nodes.forEach(function (n) { box.appendChild(n); });
    box.hidden = false;
    box.focus();
  }

  /* ---------- Wholesale enquiry form ---------- */
  var enquiry = document.getElementById('enquiry-form');
  if (enquiry) {
    var select = document.getElementById('w-product');
    (window.PRODUCTS || []).filter(function (p) { return p.wholesale; }).forEach(function (p) {
      var o = document.createElement('option');
      o.value = p.id;
      o.textContent = p.name + ' (R' + p.price + ' each)';
      select.appendChild(o);
    });
    document.getElementById('w-date').min = isoDate(earliestStart());
    wireLiveValidation(enquiry);

    enquiry.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!validateForm(enquiry)) return;

      var data = collect(enquiry);
      var product = window.PRODUCTS.filter(function (p) { return p.id === data.product; })[0];
      var qty = parseInt(data.quantity, 10);
      var discount = qty >= 60 ? 0.20 : qty >= 30 ? 0.15 : 0.10;
      var gross = product.price * qty;
      var saving = gross * discount;
      var weekly = gross - saving;
      var start = new Date(data['start-date'] + 'T00:00:00');

      var btn = enquiry.querySelector('button[type="submit"]');
      var box = document.getElementById('enquiry-result');
      btn.disabled = true;
      btn.textContent = 'Sending...';

      sendForm(enquiry, data).then(function () {
        showResult(box, [
          el('h3', 'Thank you, ' + data['contact-name']),
          el('p', 'Here is your estimate for ' + data['business-name'] + ':'),
          (function () {
            var ul = document.createElement('ul');
            [
              qty + ' x ' + product.name + ' per week at ' + rand(product.price) + ' each = ' + rand(gross),
              'Wholesale discount (' + Math.round(discount * 100) + '%): -' + rand(saving),
              'Estimated weekly cost: ' + rand(weekly)
            ].forEach(function (t) { ul.appendChild(el('li', t)); });
            return ul;
          })(),
          el('p', 'Availability: we can start supplying you from ' +
            start.toLocaleDateString('en-ZA', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }) +
            '. We will confirm the final price and delivery times by email at ' + data.email + ' within two business days.')
        ]);
        enquiry.reset();
        document.getElementById('order-details-count').textContent = '';
      }).catch(function () {
        showResult(box, [
          el('h3', 'We could not send your enquiry'),
          el('p', 'Please try again, or email hello@riversidebakeandbrew.co.za directly.')
        ]);
      }).then(function () {
        btn.disabled = false;
        btn.textContent = 'Get My Estimate';
      });
    });
  }

  /* ---------- Contact form ---------- */
  var contact = document.getElementById('contact-form');
  if (contact) {
    wireLiveValidation(contact);
    contact.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!validateForm(contact)) return;

      var d = collect(contact);
      var recipient = contact.getAttribute('data-recipient');
      var subject = d.type + ' - from ' + d.name;
      var body = [
        'Name: ' + d.name,
        'Email: ' + d.email,
        'Phone: ' + (d.phone || 'Not given'),
        'Message type: ' + d.type,
        '',
        d.message
      ].join('\r\n');
      var href = 'mailto:' + recipient + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);

      var preview = el('pre', 'To: ' + recipient + '\nSubject: ' + subject + '\n\n' + body.replace(/\r\n/g, '\n'), 'email-preview');
      var send = el('a', 'Open my email app to send', 'btn-primary');
      send.href = href;

      showResult(document.getElementById('contact-result'), [
        el('h3', 'Your message is ready'),
        el('p', 'Check the email below. When you are happy, press the button to send it from your own email app.'),
        preview,
        send
      ]);
    });
  }

  /* ---------- Cart checkout form ---------- */
  var checkout = document.getElementById('checkout-form');
  if (checkout) {
    wireLiveValidation(checkout);
    var addrWrap = document.getElementById('address-wrap');
    Array.prototype.forEach.call(checkout.querySelectorAll('input[name="fulfilment"]'), function (r) {
      r.addEventListener('change', function () {
        var delivery = checkout.querySelector('input[name="fulfilment"]:checked').value === 'delivery';
        addrWrap.hidden = !delivery;
        if (!delivery) showError(document.getElementById('cart-address'), '');
      });
    });

    checkout.addEventListener('submit', function (e) {
      e.preventDefault();
      var err = document.getElementById('checkout-error');
      err.textContent = '';
      if (!window.RBB.cart.count()) {
        err.textContent = 'Your cart is empty. Add items from the menu before you check out.';
        return;
      }
      if (!validateForm(checkout)) return;

      var d = collect(checkout);
      var body = document.createElement('div');
      body.appendChild(el('p', 'Thank you, ' + d.name + '. We have your order.'));
      var ul = document.createElement('ul');
      window.RBB.cart.get().forEach(function (i) {
        ul.appendChild(el('li', i.qty + ' x ' + i.name + ' = ' + rand(i.price * i.qty)));
      });
      body.appendChild(ul);
      body.appendChild(el('p', 'Total: ' + rand(window.RBB.cart.total())));
      body.appendChild(el('p', d.fulfilment === 'delivery'
        ? 'We will deliver to: ' + d.address
        : 'Collect your order at 4 River Road, Vereeniging.'));
      body.appendChild(el('p', 'We will call you on ' + d.phone + ' to confirm.'));

      window.RBB.cart.clear();
      checkout.reset();
      addrWrap.hidden = true;
      window.RBB.openModal('Order received', body);
    });
  }
})();
