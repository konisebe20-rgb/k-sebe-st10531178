/* Shop page: builds the menu from products.js, then lets people search, filter and sort it. */
(function () {
  'use strict';
  var list = document.getElementById('product-list');
  if (!list || !window.PRODUCTS) return;

  var searchEl = document.getElementById('search');
  var categoryEl = document.getElementById('category');
  var sortEl = document.getElementById('sort');
  var countEl = document.getElementById('results-count');
  var form = document.getElementById('shop-filters');

  function card(p) {
    var art = document.createElement('article');
    art.className = 'product-card';

    var trigger = document.createElement('button');
    trigger.type = 'button';
    trigger.className = 'gallery-item';
    trigger.setAttribute('data-lightbox', 'menu');
    trigger.setAttribute('data-full', 'images/' + p.image);
    trigger.setAttribute('data-alt', p.alt);
    trigger.setAttribute('aria-label', 'View larger image: ' + p.alt);
    var img = document.createElement('img');
    img.src = 'images/' + p.image;
    img.alt = p.alt;
    img.width = 400;
    img.height = 300;
    img.loading = 'lazy';
    trigger.appendChild(img);

    var h3 = document.createElement('h3');
    h3.textContent = p.name;

    var badge = document.createElement('p');
    badge.className = 'badge';
    badge.textContent = window.CATEGORY_LABELS[p.category] || p.category;

    var desc = document.createElement('p');
    desc.textContent = p.description;

    var price = document.createElement('p');
    price.className = 'price';
    price.textContent = 'R' + p.price;

    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'btn-primary add-to-cart';
    btn.setAttribute('data-item', p.name);
    btn.setAttribute('data-price', p.price);
    btn.textContent = 'Add to Cart';

    [trigger, h3, badge, desc, price, btn].forEach(function (n) { art.appendChild(n); });
    return art;
  }

  function render() {
    var q = searchEl.value.trim().toLowerCase();
    var cat = categoryEl.value;
    var sort = sortEl.value;

    var items = window.PRODUCTS.filter(function (p) {
      var matchesCat = cat === 'all' || p.category === cat;
      var text = (p.name + ' ' + p.description + ' ' + p.category).toLowerCase();
      return matchesCat && (q === '' || text.indexOf(q) !== -1);
    });

    if (sort === 'price-asc') items.sort(function (a, b) { return a.price - b.price; });
    if (sort === 'price-desc') items.sort(function (a, b) { return b.price - a.price; });
    if (sort === 'name') items.sort(function (a, b) { return a.name.localeCompare(b.name); });

    list.textContent = '';
    if (!items.length) {
      var empty = document.createElement('p');
      empty.className = 'empty-state';
      empty.textContent = 'No items match "' + searchEl.value.trim() + '". Try a different word or choose All items.';
      list.appendChild(empty);
    } else {
      items.forEach(function (p) { list.appendChild(card(p)); });
    }
    countEl.textContent = 'Showing ' + items.length + ' of ' + window.PRODUCTS.length + ' items';
  }

  var timer;
  searchEl.addEventListener('input', function () { clearTimeout(timer); timer = setTimeout(render, 150); });
  categoryEl.addEventListener('change', render);
  sortEl.addEventListener('change', render);
  form.addEventListener('submit', function (e) { e.preventDefault(); render(); });

  /* Allow links like shop.html#coffee to open a category */
  var hash = window.location.hash.replace('#', '');
  if (window.CATEGORY_LABELS && window.CATEGORY_LABELS[hash]) categoryEl.value = hash;

  render();
})();
