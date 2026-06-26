/**
 * VocabForge — Packs loader
 * Combines base VOCAB_WORDS with all jargon/seasonal packs into a single VOCAB_WORDS_ALL.
 * Exposes VFPacks for UI selection.
 */
(function(){
  'use strict';

  function safeArray(x) { return Array.isArray(x) ? x : []; }

  var PACKS_META = {
    base:      { name: 'General English (A1)',  color: '#22d3ee', icon: '📘' },
    legal:     { name: 'Legal English (B1–C1)', color: '#a78bfa', icon: '⚖️' },
    it:        { name: 'IT English (A2–C1)',    color: '#38bdf8', icon: '💻' },
    hr:        { name: 'HR English (A2–C1)',    color: '#fb7185', icon: '👥' },
    marketing: { name: 'Marketing English (A2–C1)', color: '#fb923c', icon: '📣' },
    halloween: { name: 'Halloween (seasonal)',  color: '#fb923c', icon: '🎃' },
    christmas: { name: 'Christmas (seasonal)',  color: '#34d399', icon: '🎄' },
    medical:   { name: 'Medical English (A2–C1)', color: '#fb7185', icon: '🏥' }
  };

  function buildAll() {
    var base = safeArray(window.VOCAB_WORDS);
    var packs = window.VOCAB_PACKS || {};
    var all = base.slice();
    Object.keys(packs).forEach(function(key){
      if (safeArray(packs[key]).length) {
        all = all.concat(packs[key]);
      }
    });
    return all;
  }

  function getStats() {
    var base = safeArray(window.VOCAB_WORDS).length;
    var packs = window.VOCAB_PACKS || {};
    var out = { base: base, total: base, packs: {} };
    Object.keys(packs).forEach(function(key){
      var n = safeArray(packs[key]).length;
      out.packs[key] = n;
      out.total += n;
    });
    return out;
  }

  function getEnabledPacks() {
    try {
      var raw = localStorage.getItem('vocabforge_enabled_packs');
      if (!raw) return ['base','legal','it','hr','marketing','halloween','christmas','medical'];
      return JSON.parse(raw);
    } catch(e) { return ['base']; }
  }

  function setEnabledPacks(arr) {
    localStorage.setItem('vocabforge_enabled_packs', JSON.stringify(arr));
  }

  function isPackEnabled(key) {
    var arr = getEnabledPacks();
    return arr.indexOf(key) !== -1;
  }

  function getActiveWords() {
    var all = buildAll();
    var enabled = getEnabledPacks();
    return all.filter(function(w){
      // Detect which pack a word came from by id prefix or topic
      if (!w.id) return true; // base
      var prefix = w.id.split('_')[0];
      if (prefix === 'a1') return enabled.indexOf('base') !== -1;
      // Match by topic prefix (legal-, it-, etc.)
      if (w.topic) {
        var packKey = w.topic.split('-')[0];
        if (['legal','it','hr','marketing','halloween','christmas','medical'].indexOf(packKey) !== -1) {
          return enabled.indexOf(packKey) !== -1;
        }
      }
      return true;
    });
  }

  window.VFPacks = {
    PACKS_META: PACKS_META,
    buildAll: buildAll,
    getStats: getStats,
    getEnabledPacks: getEnabledPacks,
    setEnabledPacks: setEnabledPacks,
    isPackEnabled: isPackEnabled,
    getActiveWords: getActiveWords
  };
})();
