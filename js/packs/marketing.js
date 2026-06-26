/**
 * VocabForge — Marketing English jargon pack
 * Generated via qwen2.5:7b, 0 entries
 */
(function(){
  'use strict';
  var W = [];
  function add(id, word, level, pos, definition, example, ipa, topic) {
    W.push({id:id, word:word, level:level, pos:pos, definition:definition, example:example, ipa:ipa, topic:'marketing-'+topic});
  }


  if (typeof window !== 'undefined') {
    if (!window.VOCAB_PACKS) window.VOCAB_PACKS = {};
    window.VOCAB_PACKS.marketing = W;
  }
})();
