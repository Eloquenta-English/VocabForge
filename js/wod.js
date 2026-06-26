/**
 * VocabForge — Word of the Day + Story of the Week
 * Picks a deterministic entry from VOCAB_WORDS based on day-of-year.
 * Same day = same word across all devices (no server needed).
 */
(function(){
  'use strict';

  function dayOfYear() {
    var now = new Date();
    var start = new Date(now.getFullYear(), 0, 0);
    var diff = now - start;
    var oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
  }

  function weekOfYear() {
    var now = new Date();
    var start = new Date(now.getFullYear(), 0, 1);
    var days = Math.floor((now - start) / (24*60*60*1000));
    return Math.floor(days / 7);
  }

  function isHalloweenWeek() {
    var now = new Date();
    return now.getMonth() === 9 && now.getDate() >= 25;  // Oct 25-31
  }
  function isChristmasWeek() {
    var now = new Date();
    var m = now.getMonth(), d = now.getDate();
    return (m === 11 && d >= 15) || (m === 0 && d <= 5); // Dec 15 - Jan 5
  }
  function isEasterWeek() {
    var now = new Date();
    var m = now.getMonth(), d = now.getDate();
    return (m === 2 && d >= 20) || (m === 3 && d <= 10); // Mar 20 - Apr 10 (approx)
  }

  /* Seasonal vocab overrides — uses existing vocab words */
  function getSeasonalBonusWord() {
    if (isHalloweenWeek()) {
      var halloween = ['night','dark','fire','cat','heart','face','foot','head','eye','mouth'];
      return halloween[(dayOfYear()) % halloween.length];
    }
    if (isChristmasWeek()) {
      var christmas = ['family','home','time','people','food','shop','market','bank','park','school'];
      return christmas[(dayOfYear()) % christmas.length];
    }
    if (isEasterWeek()) {
      var easter = ['sun','tree','flower','garden','bird','egg','baby','spring','green','walk'];
      return easter[(dayOfYear()) % easter.length];
    }
    return null;
  }

  function renderWordOfDay() {
    var wordEl = document.getElementById('wodWord');
    var defEl = document.getElementById('wodDef');
    if (!wordEl || typeof window.VOCAB_WORDS === 'undefined' || !window.VOCAB_WORDS.length) {
      if (wordEl) wordEl.textContent = 'No words loaded';
      return;
    }

    /* Prefer seasonal bonus if available */
    var bonus = getSeasonalBonusWord();
    var word;
    if (bonus) {
      word = window.VOCAB_WORDS.find(function(w){ return w.word === bonus; });
    }
    if (!word) {
      word = window.VOCAB_WORDS[dayOfYear() % window.VOCAB_WORDS.length];
    }

    wordEl.textContent = word.word + (word.ipa ? '  ' + word.ipa : '');
    defEl.textContent = word.definition;
    /* Highlight on card hover */
    var card = document.getElementById('wodCard');
    if (card) {
      card.style.cursor = 'pointer';
      card.onclick = function(){ VF.showScreen('flashcards'); };
    }
  }

  /* Story of the Week — cycles through 3 sample stories */
  var STORIES = [
    {
      title: 'Rusty and the Glowing Key',
      desc: 'A curious fox finds a magical key that opens a door to wonder. (A2 level)',
      href: '../VBookReader/index.html?story=rusty'
    },
    {
      title: 'The Moonlit Library',
      desc: 'Books whisper secrets at midnight to a brave young reader. (B1 level)',
      href: '../VBookReader/index.html?story=library'
    },
    {
      title: 'Captain Wavelength',
      desc: 'A signal-deck officer on the first ship to reach a new star. (B2 level)',
      href: '../VBookReader/index.html?story=wavelength'
    }
  ];

  function renderStoryOfWeek() {
    var titleEl = document.getElementById('sotwTitle');
    var descEl = document.getElementById('sotwDesc');
    var card = document.querySelector('.sotw-card');
    if (!titleEl) return;
    var story = STORIES[weekOfYear() % STORIES.length];
    titleEl.textContent = story.title;
    descEl.textContent = story.desc;
    if (card) card.href = story.href;
  }

  /* Run on DOM ready */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function(){ renderWordOfDay(); renderStoryOfWeek(); });
  } else {
    renderWordOfDay();
    renderStoryOfWeek();
  }

  /* Public API */
  window.VFWordOfDay = { renderWordOfDay: renderWordOfDay, renderStoryOfWeek: renderStoryOfWeek };
})();
