/**
 * VocabForge — Unified Vocabulary Database
 * Merges:
 *   - window.VOCAB_WORDS (100 A1 base words)
 *   - window.VFPacks enabled packs (jargon + seasonal)
 *   - window.VF_WORDS (15K CEFR-tagged WordNet dataset)
 *
 * Exposes:
 *   - window.VOCAB_UNIFIED: all words as rich objects
 *   - window.VF.searchWords(q, opts): search function
 */
(function() {
  'use strict';

  function normalizeWord(entry) {
    if (!entry || typeof entry !== 'object') return null;
    var w = (entry.word || entry.w || '').toString().trim().toLowerCase();
    if (!w) return null;
    return {
      id: entry.id || entry._id || (w + '_' + Math.random().toString(36).slice(2, 7)),
      word: w,
      display: entry.word || entry.w || w,
      level: (entry.level || entry.l || 'A1').toString().toUpperCase(),
      pos: entry.pos || entry.p || '—',
      definition: entry.definition || entry.def || entry.d || '',
      example: entry.example || entry.ex || '',
      phonetic: entry.phonetic || entry.phon || '',
      topic: entry.topic || entry.t || 'general',
      imgFront: entry.imgFront || '',
      imgBack: entry.imgBack || '',
      source: entry.source || 'wordnet'
    };
  }

  function buildUnified() {
    var map = {};
    var add = function(list, source) {
      if (!Array.isArray(list)) return;
      for (var i = 0; i < list.length; i++) {
        var n = normalizeWord(list[i]);
        if (!n) continue;
        n.source = source || n.source;
        // Prefer richer definition from existing sources
        if (map[n.word] && !n.definition && map[n.word].definition) {
          n.definition = map[n.word].definition;
        }
        if (map[n.word] && !n.example && map[n.word].example) {
          n.example = map[n.word].example;
        }
        map[n.word] = n;
      }
    };

    // 1. Base vocabulary (100 A1 words)
    if (typeof window !== 'undefined' && window.VOCAB_WORDS) {
      add(window.VOCAB_WORDS, 'base');
    }

    // 2. Enabled packs (jargon + seasonal)
    if (typeof window !== 'undefined' && window.VFPacks && window.VFPacks.getActiveWords) {
      try {
        add(window.VFPacks.getActiveWords(), 'pack');
      } catch (e) {
        console.warn('VocabForge: could not load active packs', e);
      }
    }

    // 3. 15K WordNet CEFR dataset
    if (typeof window !== 'undefined' && window.VF_WORDS) {
      add(window.VF_WORDS, 'wordnet');
    }

    var arr = [];
    for (var k in map) {
      if (map.hasOwnProperty(k)) arr.push(map[k]);
    }
    return arr;
  }

  function searchWords(query, opts) {
    opts = opts || {};
    var q = (query || '').toString().trim().toLowerCase();
    var levels = opts.levels || null;
    var pos = opts.pos || null;
    var limit = opts.limit || 50;
    var source = opts.source || null;

    var all = (typeof window !== 'undefined' && window.VOCAB_UNIFIED) ? window.VOCAB_UNIFIED : buildUnified();

    if (!q && !levels && !pos && !source) {
      return all.slice(0, limit);
    }

    var results = [];
    for (var i = 0; i < all.length && results.length < limit; i++) {
      var w = all[i];
      if (levels && levels.indexOf(w.level) === -1) continue;
      if (pos && w.pos.toLowerCase() !== pos.toLowerCase()) continue;
      if (source && w.source !== source) continue;

      if (!q) {
        results.push(w);
        continue;
      }

      // Match word, definition, or topic
      var matchesWord = w.word.indexOf(q) === 0 || w.word === q;
      var matchesDef = (w.definition || '').toLowerCase().indexOf(q) !== -1;
      var matchesTopic = (w.topic || '').toLowerCase().indexOf(q) !== -1;
      if (matchesWord || matchesDef || matchesTopic) {
        results.push(w);
      }
    }
    return results;
  }

  function refresh() {
    if (typeof window !== 'undefined') {
      window.VOCAB_UNIFIED = buildUnified();
      console.log('VocabForge unified vocabulary rebuilt:', window.VOCAB_UNIFIED.length, 'words');
    }
  }

  if (typeof window !== 'undefined') {
    window.VF_SEARCH = {
      search: searchWords,
      refresh: refresh,
      all: function() { return window.VOCAB_UNIFIED || buildUnified(); }
    };
    // Build once packs-loader has run (this script is loaded after packs-loader)
    refresh();
  }
})();
