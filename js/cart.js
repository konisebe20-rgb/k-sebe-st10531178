/* Cart: stored in the browser (localStorage). Loaded on every page so the nav count always works. */
(function () {
  'use strict';
  window.RBB = window.RBB || {};
  var KEY = 'rbb_cart';

  function load() {
    try {
      var data = JSON.parse(localStorage.getItem(KEY));
      return Array.isArray(data) ? data : [];
    } catch (e) { return []; }
  }
  function save(cart) {
    try { localStorage.setItem(KEY, JSON.stringify(cart)); } catch (e) { /* storage blocked: cart lasts for this page only */ }
  }
  function count(cart) { return cart.reduce(function (n, i) { return n + i.qty; }, 0); }
  function total(cart) { return cart.reduce(function (n, i) { return n + i.price * i.qty; }, 0); }

  function updateCount(animate) {
    var el = document.getElementById('cart-count');
    if (!el) return;
    el.textContent = count(load());
    if (animate) {
      el.classList.remove('bump');
      void el.offsetWidth; /* restart the animation */
      el.classList.add('bump');
    }
  }

  function add(name, price) {
    var cart = load();
    var found = cart.filter(function (i) { return i.name === name; })[0];
    if (found) { found.qty += 1; } else { cart.push({ name: name, price: price, qty: 1 }); }
    save(cart);
    updateCount(true);
    renderCart();
  }

  function renderCart() {
    var body = document.getElementById('cart-items');
    if (!body) return;
    var cart = load();
    body.textContent = '';
    if (!cart.length) {
      var tr = document.createElement('tr');
      var td = document.createElement('td');
      td.colSpan = 4;
      td.textContent = 'Your cart is empty. Add something tasty from the menu.';
      tr.appendChild(td);
      body.appendChild(tr);
    }
    cart.forEach(function (item) {
      var row = document.createElement('tr');

      var nameCell = document.createElement('td');
      nameCell.textContent = item.name;

      var priceCell = document.createElement('td');
      priceCell.textContent = 'R' + item.price.toFixed(2);

      var qtyCell = document.createElement('td');
      var input = document.createElement('input');
      input.type = 'number';
      input.min = '1';
      input.max = '50';
      input.value = item.qty;
      input.className = 'qty-input';
      input.setAttribute('data-name', item.name);
      input.setAttribute('aria-label', 'Quantity for ' + item.name);
      qtyCell.appendChild(input);

      var removeCell = document.createElement('td');
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'remove-btn';
      btn.textContent = 'Remove';
      btn.setAttribute('data-name', item.name);
      btn.setAttribute('aria-label', 'Remove ' + item.name + ' from cart');
      removeCell.appendChild(btn);

      [nameCell, priceCell, qtyCell, removeCell].forEach(function (c) { row.appendChild(c); });
      body.appendChild(row);
    });
    var totalEl = document.getElementById('cart-total');
    if (totalEl) totalEl.textContent = total(cart).toFixed(2);
  }

  document.addEventListener('click', function (e) {
    var addBtn = e.target.closest('.add-to-cart');
    if (addBtn) {
      var price = parseFloat(addBtn.getAttribute('data-price'));
      var name = addBtn.getAttribute('data-item');
      if (!name || isNaN(price)) return;
      add(name, price);
      if (window.RBB.toast) window.RBB.toast(name + ' added to your cart');
      var old = addBtn.textContent;
      addBtn.textContent = 'Added';
      addBtn.disabled = true;
      setTimeout(function () { addBtn.textContent = old; addBtn.disabled = false; }, 900);
      return;
    }
    var rm = e.target.closest('.remove-btn');
    if (rm) {
      var name2 = rm.getAttribute('data-name');
      save(load().filter(function (i) { return i.name !== name2; }));
      updateCount(false);
      renderCart();
    }
  });

  document.addEventListener('change', function (e) {
    if (!e.target.classList.contains('qty-input')) return;
    var qty = parseInt(e.target.value, 10);
    var name = e.target.getAttribute('data-name');
    var cart = load();
    if (isNaN(qty) || qty < 1) {
      cart = cart.filter(function (i) { return i.name !== name; });
    } else {
      cart.forEach(function (i) { if (i.name === name) i.qty = Math.min(qty, 50); });
    }
    save(cart);
    updateCount(false);
    renderCart();
  });

  window.RBB.cart = {
    get: load,
    total: function () { return total(load()); },
    count: function () { return count(load()); },
    clear: function () { save([]); updateCount(false); renderCart(); }
  };

  updateCount(false);
  renderCart();
})();
