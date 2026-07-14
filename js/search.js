/**
 * VocabForge — Word Search & Filter
 * Full-text search across 15K+ word database
 */
(function(){
  ' strict';
  var VFSearch = {};
  
  // Load word database
  VFSearch.words = [];
  VFSearch.loaded = false;
  
  VFSearch.load = function(callback) {
    if (this.loaded) {
      callback(null, this.words);
      return;
    }
    
    var self = this;
    var script = document.createElement('script');
    script.src = 'js/data/wordnet-core.js';
    script.onload = function() {
      // The data file sets window.VF_WORDS
      self.words = window.VF_WORDS || [];
      self.loaded = true;
      callback(null, self.words);
    };
    script.onerror = function() {
      callback('Failed to load word database', null);
    };
    document.head.appendChild(script);
  };
  
  // Search words by query
  VFSearch.search = function(query, options) {
    options = options || {};
    var level = options.level || null;  // A1, A2, B1, B2
    var limit = options.limit || 50;
    var query = query.toLowerCase().trim();
    
    if (!query) return [];
    
    var results = [];
    var startsWith = [];
    var contains = [];
    
    for (var i = 0; i < this.words.length; i++) {
      var w = this.words[i];
      var word = w.w;
      
      // Filter by level
      if (level && w.l !== level) continue;
      
      if (word === query) {
        results.unshift(w);  // exact match first
      } else if (word.indexOf(query) === 0) {
        startsWith.push(w);
      } else if (word.indexOf(query) !== -1) {
        contains.push(w);
      }
    }
    
    // Combine: exact + startsWith + contains
    results = results.concat(startsWith).concat(contains);
    return results.slice(0, limit);
  };
  
  // Get words by level
  VFSearch.getByLevel = function(level, limit) {
    var results = [];
    for (var i = 0; i < this.words.length; i++) {
      if (this.words[i].l === level) {
        results.push(this.words[i]);
        if (results.length >= (limit || 100)) break;
      }
    }
    return results;
  };
  
  // Get word count by level
  VFSearch.getStats = function() {
    var stats = {A1: 0, A2: 0, B1: 0, B2: 0, total: this.words.length};
    for (var i = 0; i < this.words.length; i++) {
      var l = this.words[i].l;
      if (stats[l] !== undefined) stats[l]++;
    }
    return stats;
  };
  
  // Get a random word (for games)
  VFSearch.random = function(level) {
    var pool = level ? this.getByLevel(level, 1000) : this.words;
    return pool[Math.floor(Math.random() * pool.length)];
  };
  
  window.VFSearch = VFSearch;
})();