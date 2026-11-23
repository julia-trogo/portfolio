/* Julia Trogo, portfolio
   - Language: pages are written in Portuguese. English is loaded on demand
     from assets/js/i18n-en.js (PT text -> EN text) and remembered.
     ?lang=en or ?lang=pt in the URL also sets it (useful to share links).
   - "Copy e-mail" button. */
(function () {
  'use strict';
  var root = document.documentElement;
  var KEY = 'jt-lang';
  var script = document.currentScript;
  var base = script ? script.src.replace(/main\.js(\?.*)?$/, '') : 'assets/js/';
  var lang = 'pt';
  var dict = null;
  var textNodes = null;
  var attrEls = null;
  var ATTRS = ['alt', 'aria-label', 'title', 'content'];

  function norm(s) { return s.replace(/\s+/g, ' ').trim(); }
  function store(l) { try { localStorage.setItem(KEY, l); } catch (e) {} }
  function read() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }

  function collect() {
    textNodes = [];
    var w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        if (!n.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        var p = n.parentElement;
        if (!p || p.closest('[data-l],script,style,[data-no-i18n]')) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var n;
    while ((n = w.nextNode())) textNodes.push({ node: n, pt: n.nodeValue });
    attrEls = [];
    var els = document.querySelectorAll('body [alt],body [aria-label],body [title],meta[name=description]');
    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      if (el.closest('[data-l],[data-no-i18n]')) continue;
      var saved = {};
      ATTRS.forEach(function (a) { if (el.hasAttribute(a)) saved[a] = el.getAttribute(a); });
      attrEls.push({ el: el, pt: saved });
    }
    root.setAttribute('data-pt-title', document.title);
  }

  function apply() {
    if (!textNodes) collect();
    var en = lang === 'en' && dict;
    textNodes.forEach(function (t) {
      if (!en) { t.node.nodeValue = t.pt; return; }
      var tr = dict[norm(t.pt)];
      if (tr === undefined) return;
      t.node.nodeValue = t.pt.match(/^\s*/)[0] + tr + t.pt.match(/\s*$/)[0];
    });
    attrEls.forEach(function (a) {
      Object.keys(a.pt).forEach(function (k) {
        var v = a.pt[k];
        a.el.setAttribute(k, en ? (dict[norm(v)] || v) : v);
      });
    });
    var ptTitle = root.getAttribute('data-pt-title');
    document.title = en ? (dict[norm(ptTitle)] || ptTitle) : ptTitle;
  }

  function loadDict(cb) {
    if (dict) return cb();
    var s = document.createElement('script');
    s.src = base + 'i18n-en.js';
    s.onload = function () { dict = window.I18N_EN || {}; cb(); };
    s.onerror = function () { dict = {}; cb(); };
    document.head.appendChild(s);
  }

  function reveal() { root.classList.remove('i18n-wait'); }

  function setLang(l, save) {
    lang = l === 'en' ? 'en' : 'pt';
    root.lang = lang === 'en' ? 'en' : 'pt-BR';
    root.classList.toggle('l-en', lang === 'en');
    var btns = document.querySelectorAll('.lang button');
    for (var i = 0; i < btns.length; i++) btns[i].setAttribute('aria-pressed', String(btns[i].getAttribute('data-lang') === lang));
    if (save) store(lang);
    if (lang === 'en') loadDict(function () { apply(); reveal(); });
    else { if (textNodes) apply(); reveal(); }
  }

  // language from the URL, then from the saved choice, otherwise Portuguese
  var q = null;
  try { q = new URLSearchParams(location.search).get('lang'); } catch (e) {}
  if (q === 'en' || q === 'pt') { store(q); }
  collect();
  setLang(q || read() || 'pt', false);

  document.addEventListener('click', function (e) {
    var b = e.target.closest('.lang button');
    if (b) {
      setLang(b.getAttribute('data-lang'), true);
      try {
        var u = new URL(location.href);
        if (u.searchParams.has('lang')) { u.searchParams.delete('lang'); history.replaceState(null, '', u); }
      } catch (err) {}
      return;
    }
    var c = e.target.closest('[data-copy]');
    if (c) {
      var text = c.getAttribute('data-copy');
      var status = document.getElementById(c.getAttribute('aria-controls'));
      var done = function () {
        if (status) status.textContent = lang === 'en' ? 'E-mail copied.' : 'E-mail copiado.';
        setTimeout(function () { if (status) status.textContent = ''; }, 2600);
      };
      if (navigator.clipboard) navigator.clipboard.writeText(text).then(done, function () {});
    }
  });
})();
