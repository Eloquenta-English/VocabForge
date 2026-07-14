/**
 * VocabForge — Dictionary API Client
 * Fetches word definitions from FreeDictionaryAPI (free, no key needed)
 * Caches results in localStorage for offline use
 */
(function(){
  'use strict';
  var VFDict = {};
  
  // Fetch word data from FreeDictionary API
  VFDict.fetchWord = function(word, callback) {
    var cacheKey = 'vfdict_' + word.toLowerCase();
    var cached = localStorage.getItem(cacheKey);
    
    // Check cache first (valid for 7 days)
    if (cached) {
      try {
        var data = JSON.parse(cached);
        if (data._cached && (Date.now() - data._cached < 604800000)) {
          callback(null, data);
          return;
        }
      } catch(e) {}
    }
    
    // Fetch from API
    var url = 'https://api.dictionaryapi.dev/api/v2/entries/en/' + encodeURIComponent(word.toLowerCase());
    
    fetch(url)
      .then(function(r) { 
        if (!r.ok) throw new Error('Not found: ' + word);
        return r.json(); 
      })
      .then(function(data) {
        var result = VFDict.parseResponse(word, data);
        result._cached = Date.now();
        try {
          localStorage.setItem(cacheKey, JSON.stringify(result));
        } catch(e) {
          // localStorage full — try clearing old entries
          VFDict._clearOldCache();
        }
        callback(null, result);
      })
      .catch(function(err) {
        callback(err.message, null);
      });
  };
  
  // Parse API response into our format
  VFDict.parseResponse = function(word, data) {
    var entry = data[0] || {};
    var result = {
      word: word,
      phonetic: entry.phonetic || '',
      audio: '',
      meanings: []
    };
    
    // Find audio URL
    if (entry.phonetics) {
      for (var i = 0; i < entry.phonetics.length; i++) {
        if (entry.phonetics[i].audio) {
          result.audio = entry.phonetics[i].audio;
          break;
        }
      }
    }
    
    // Parse meanings
    if (entry.meanings) {
      entry.meanings.forEach(function(m) {
        var meaning = {
          pos: m.partOfSpeech || 'unknown',
          definitions: [],
          synonyms: m.synonyms || [],
          antonyms: m.antonyms || []
        };
        
        if (m.definitions) {
          m.definitions.slice(0, 3).forEach(function(d) {
            meaning.definitions.push({
              def: d.definition || '',
              example: d.example || ''
            });
          });
        }
        
        result.meanings.push(meaning);
      });
    }
    
    return result;
  };
  
  // Clear old cache entries to free space
  VFDict._clearOldCache = function() {
    var keys = Object.keys(localStorage).filter(function(k) {
      return k.indexOf('vfdict_') === 0;
    });
    // Remove oldest 20%
    keys.sort();
    var toRemove = Math.floor(keys.length * 0.2);
    for (var i = 0; i < toRemove; i++) {
      localStorage.removeItem(keys[i]);
    }
  };
  
  // Get cache stats
  VFDict.getCacheStats = function() {
    var keys = Object.keys(localStorage).filter(function(k) {
      return k.indexOf('vfdict_') === 0;
    });
    var size = 0;
    keys.forEach(function(k) {
      size += localStorage.getItem(k).length;
    });
    return {
      entries: keys.length,
      sizeKB: Math.floor(size / 1024)
    };
  };
  
  // Clear all cache
  VFDict.clearCache = function() {
    var keys = Object.keys(localStorage).filter(function(k) {
      return k.indexOf('vfdict_') === 0;
    });
    keys.forEach(function(k) { localStorage.removeItem(k); });
  };
  
  // Expose globally
  window.VFDict = VFDict;
})();